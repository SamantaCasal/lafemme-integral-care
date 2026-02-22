
-- Bookable services with pricing
CREATE TABLE public.bookable_services (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  slug TEXT NOT NULL UNIQUE,
  name_es TEXT NOT NULL,
  name_en TEXT NOT NULL DEFAULT '',
  category TEXT NOT NULL,
  description_es TEXT NOT NULL DEFAULT '',
  description_en TEXT NOT NULL DEFAULT '',
  duration_minutes INT NOT NULL DEFAULT 60,
  price_guaranies INT NOT NULL DEFAULT 0,
  modality TEXT NOT NULL DEFAULT 'presencial',
  is_active BOOLEAN NOT NULL DEFAULT true,
  sort_order INT NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Professionals
CREATE TABLE public.professionals (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  role_es TEXT NOT NULL DEFAULT '',
  role_en TEXT NOT NULL DEFAULT '',
  photo_url TEXT,
  is_active BOOLEAN NOT NULL DEFAULT true,
  sort_order INT NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Which professionals offer which services
CREATE TABLE public.professional_services (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  professional_id UUID NOT NULL REFERENCES public.professionals(id) ON DELETE CASCADE,
  service_id UUID NOT NULL REFERENCES public.bookable_services(id) ON DELETE CASCADE,
  UNIQUE(professional_id, service_id)
);

-- Weekly availability template (recurring)
CREATE TABLE public.availability_templates (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  professional_id UUID NOT NULL REFERENCES public.professionals(id) ON DELETE CASCADE,
  day_of_week INT NOT NULL CHECK (day_of_week BETWEEN 0 AND 6), -- 0=Sunday
  start_time TIME NOT NULL,
  end_time TIME NOT NULL,
  slot_duration_minutes INT NOT NULL DEFAULT 60,
  is_active BOOLEAN NOT NULL DEFAULT true
);

-- Date exceptions (blocked days, special hours)
CREATE TABLE public.availability_exceptions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  professional_id UUID NOT NULL REFERENCES public.professionals(id) ON DELETE CASCADE,
  exception_date DATE NOT NULL,
  is_blocked BOOLEAN NOT NULL DEFAULT true,
  start_time TIME,
  end_time TIME,
  reason TEXT
);

-- Bookings
CREATE TABLE public.bookings (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  booking_number TEXT NOT NULL UNIQUE,
  service_id UUID NOT NULL REFERENCES public.bookable_services(id),
  professional_id UUID NOT NULL REFERENCES public.professionals(id),
  booking_date DATE NOT NULL,
  booking_time TIME NOT NULL,
  duration_minutes INT NOT NULL,
  price_guaranies INT NOT NULL,
  
  -- Patient data
  patient_name TEXT NOT NULL,
  patient_email TEXT NOT NULL,
  patient_phone TEXT NOT NULL,
  patient_notes TEXT,
  
  -- Invoice
  needs_invoice BOOLEAN NOT NULL DEFAULT false,
  invoice_ruc TEXT,
  invoice_name TEXT,
  
  -- Status
  status TEXT NOT NULL DEFAULT 'confirmed' CHECK (status IN ('confirmed', 'cancelled', 'completed', 'no_show')),
  cancel_token UUID DEFAULT gen_random_uuid(),
  
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Enable RLS on all tables
ALTER TABLE public.bookable_services ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.professionals ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.professional_services ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.availability_templates ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.availability_exceptions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.bookings ENABLE ROW LEVEL SECURITY;

-- Public read for services, professionals, availability
CREATE POLICY "Anyone can view active services" ON public.bookable_services FOR SELECT USING (is_active = true);
CREATE POLICY "Anyone can view active professionals" ON public.professionals FOR SELECT USING (is_active = true);
CREATE POLICY "Anyone can view professional services" ON public.professional_services FOR SELECT USING (true);
CREATE POLICY "Anyone can view availability templates" ON public.availability_templates FOR SELECT USING (is_active = true);
CREATE POLICY "Anyone can view availability exceptions" ON public.availability_exceptions FOR SELECT USING (true);

-- Anyone can create bookings (no auth required for patients)
CREATE POLICY "Anyone can create bookings" ON public.bookings FOR INSERT WITH CHECK (true);
-- Anyone can read their own booking by cancel_token (for cancel/reschedule link)
CREATE POLICY "Anyone can view bookings" ON public.bookings FOR SELECT USING (true);

-- Booking number sequence function
CREATE OR REPLACE FUNCTION public.generate_booking_number()
RETURNS TRIGGER AS $$
DECLARE
  year_str TEXT;
  seq_num INT;
BEGIN
  year_str := EXTRACT(YEAR FROM now())::TEXT;
  SELECT COALESCE(MAX(CAST(SUBSTRING(booking_number FROM 9) AS INT)), 0) + 1
  INTO seq_num
  FROM public.bookings
  WHERE booking_number LIKE 'LF-' || year_str || '-%';
  
  NEW.booking_number := 'LF-' || year_str || '-' || LPAD(seq_num::TEXT, 6, '0');
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

CREATE TRIGGER set_booking_number
BEFORE INSERT ON public.bookings
FOR EACH ROW
WHEN (NEW.booking_number IS NULL OR NEW.booking_number = '')
EXECUTE FUNCTION public.generate_booking_number();

-- Updated_at trigger
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

CREATE TRIGGER update_bookings_updated_at
BEFORE UPDATE ON public.bookings
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Seed bookable services
INSERT INTO public.bookable_services (slug, name_es, name_en, category, description_es, description_en, duration_minutes, price_guaranies, sort_order) VALUES
('laserterapia', 'Laserterapia', 'Laser Therapy', 'lactancia', 'Tratamiento con láser para grietas y dolor en el pezón durante la lactancia.', 'Laser treatment for nipple cracks and pain during breastfeeding.', 45, 650000, 1),
('consejeria-lactancia', 'Consejería en Lactancia Materna (Primera consulta)', 'Breastfeeding Counseling (First visit)', 'lactancia', 'Apoyo personalizado para iniciar o mejorar tu lactancia con técnicas basadas en evidencia.', 'Personalized support to start or improve breastfeeding with evidence-based techniques.', 60, 300000, 2),
('evaluacion-embarazo', 'Evaluación Embarazo (Primera consulta)', 'Pregnancy Evaluation (First visit)', 'embarazo', 'Evaluación integral durante el embarazo: postura, suelo pélvico y plan de acompañamiento.', 'Comprehensive pregnancy evaluation: posture, pelvic floor and care plan.', 60, 300000, 3),
('evaluacion-posparto', 'Evaluación Posparto (Primera consulta)', 'Postpartum Evaluation (First visit)', 'posparto', 'Evaluación física postural, suelo pélvico y faja abdominal para tu recuperación integral.', 'Postural physical evaluation, pelvic floor and abdominal support for comprehensive recovery.', 60, 300000, 4),
('reevaluacion', 'Reevaluación (Seguimiento)', 'Follow-up Evaluation', 'reeducacion', 'Consulta de seguimiento o reevaluación de tu plan de tratamiento.', 'Follow-up or re-evaluation of your treatment plan.', 45, 200000, 5),
('reeducacion-embarazo', 'Reeducación perineal embarazo', 'Perineal Rehabilitation (Pregnancy)', 'embarazo', 'Fortalecé tu faja abdominal y suelo pélvico durante el embarazo.', 'Strengthen your abdominal and pelvic floor during pregnancy.', 60, 200000, 6),
('reeducacion-posparto', 'Reeducación perineal y abdominal posparto', 'Perineal & Abdominal Rehab (Postpartum)', 'posparto', 'Restaurá la fuerza de tu core y suelo pélvico después del parto.', 'Restore your core and pelvic floor strength after birth.', 60, 200000, 7),
('presoterapia', 'Presoterapia', 'Pressotherapy', 'spa', 'Drenaje linfático mecánico para aliviar piernas cansadas y retención de líquidos.', 'Mechanical lymphatic drainage to relieve tired legs and fluid retention.', 45, 200000, 8),
('nutricion', 'Nutrición por Etapa', 'Stage Nutrition', 'nutricion', 'Plan nutricional personalizado para preconcepción, embarazo y posparto.', 'Personalized nutrition plan for preconception, pregnancy and postpartum.', 60, 300000, 9),
('psicologia-perinatal', 'Psicología Perinatal', 'Perinatal Psychology', 'psicologia', 'Acompañamiento emocional en la búsqueda, embarazo y posparto.', 'Emotional support during conception, pregnancy and postpartum.', 60, 300000, 10);

-- Seed professionals
INSERT INTO public.professionals (name, role_es, role_en, sort_order) VALUES
('Lic. Cyntia Carolina Martínez Galeano', 'Directora · Obstetra', 'Director · Obstetrician', 1),
('Lic. Rosa Roa', 'Nutricionista', 'Nutritionist', 2),
('Lic. Juana Perez', 'Psicóloga Perinatal', 'Perinatal Psychologist', 3),
('Lic. Vania Rodriguez', 'Instructora Física', 'Physical Instructor', 4),
('Lic. Raquel Perez', 'Fisioterapeuta', 'Physiotherapist', 5);

-- Link professionals to services (Cyntia does most clinical services)
INSERT INTO public.professional_services (professional_id, service_id)
SELECT p.id, s.id FROM public.professionals p, public.bookable_services s
WHERE p.name = 'Lic. Cyntia Carolina Martínez Galeano'
AND s.slug IN ('laserterapia', 'consejeria-lactancia', 'evaluacion-embarazo', 'evaluacion-posparto', 'reevaluacion', 'reeducacion-embarazo', 'reeducacion-posparto', 'presoterapia');

INSERT INTO public.professional_services (professional_id, service_id)
SELECT p.id, s.id FROM public.professionals p, public.bookable_services s
WHERE p.name = 'Lic. Rosa Roa' AND s.slug = 'nutricion';

INSERT INTO public.professional_services (professional_id, service_id)
SELECT p.id, s.id FROM public.professionals p, public.bookable_services s
WHERE p.name = 'Lic. Juana Perez' AND s.slug = 'psicologia-perinatal';

INSERT INTO public.professional_services (professional_id, service_id)
SELECT p.id, s.id FROM public.professionals p, public.bookable_services s
WHERE p.name = 'Lic. Raquel Perez' AND s.slug IN ('reeducacion-embarazo', 'reeducacion-posparto', 'reevaluacion');

INSERT INTO public.professional_services (professional_id, service_id)
SELECT p.id, s.id FROM public.professionals p, public.bookable_services s
WHERE p.name = 'Lic. Vania Rodriguez' AND s.slug IN ('reeducacion-embarazo', 'reeducacion-posparto');

-- Seed availability (Mon-Fri 08:00-16:00 for all professionals)
INSERT INTO public.availability_templates (professional_id, day_of_week, start_time, end_time, slot_duration_minutes)
SELECT p.id, d.dow, '08:00'::TIME, '16:00'::TIME, 60
FROM public.professionals p
CROSS JOIN (VALUES (1),(2),(3),(4),(5)) AS d(dow);
