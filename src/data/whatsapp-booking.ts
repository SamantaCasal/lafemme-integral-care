// ============================================================
// WhatsApp Booking Configuration
// Edit this file to manage services, professionals, and availability
// ============================================================

export const WHATSAPP_SECRETARIA = "595981228045";

// ---- Professionals ----
export interface Professional {
  id: string;
  name: string;
}

export const professionals: Professional[] = [
  { id: "cyntia", name: "Lic. Cyntia Martínez" },
  { id: "karine", name: "Lic. Karine Correa" },
  { id: "vania", name: "Vannia Dubrez" },
  { id: "laura", name: "Lic. Laura Cañete" },
  { id: "magali", name: "Lic. Magalí Jure Wolf" },
];

// ---- Availability ----
// day: 1=Lunes, 2=Martes, 3=Miércoles, 4=Jueves, 5=Viernes, 6=Sábado
// shift: "mañana" | "tarde"
export interface AvailabilitySlot {
  day: number;
  shift: "mañana" | "tarde";
}

export const dayLabels: Record<number, string> = {
  1: "Lunes",
  2: "Martes",
  3: "Miércoles",
  4: "Jueves",
  5: "Viernes",
  6: "Sábado",
};

// Default availability: weekdays morning & afternoon
const defaultAvailability: AvailabilitySlot[] = [
  { day: 1, shift: "mañana" }, { day: 1, shift: "tarde" },
  { day: 2, shift: "mañana" }, { day: 2, shift: "tarde" },
  { day: 3, shift: "mañana" }, { day: 3, shift: "tarde" },
  { day: 4, shift: "mañana" }, { day: 4, shift: "tarde" },
  { day: 5, shift: "mañana" }, { day: 5, shift: "tarde" },
];

// Per-professional availability overrides (optional)
// If not listed here, uses defaultAvailability
export const professionalAvailability: Record<string, AvailabilitySlot[]> = {
  magali: [
    { day: 3, shift: "mañana" },
    { day: 3, shift: "tarde" },
  ],
};

export function getProfessionalAvailability(profId: string): AvailabilitySlot[] {
  return professionalAvailability[profId] || defaultAvailability;
}

// ---- Services ----
export type ServiceCategory = "embarazo" | "posparto" | "menopausia" | "bienestar";

export interface BookableService {
  id: string;
  name: string;
  category: ServiceCategory;
  shortDescription: string;
  fullDescription: string;
  icon: string;
  professionalIds: string[]; // empty = no professional assigned
  availabilityOverride?: AvailabilitySlot[]; // overrides default per-service
}

export const bookableServices: BookableService[] = [
  {
    id: "evaluacion-postparto",
    name: "Evaluación Postparto",
    category: "posparto",
    shortDescription: "Evaluación física postural, suelo pélvico y faja abdominal para acompañar tu recuperación integral.",
    fullDescription: "Evaluación física postural, suelo pélvico y faja abdominal. Recabamos información para identificar síntomas como incontinencia urinaria o fecal, dolor durante las relaciones sexuales, diástasis abdominal, entre otros. Según los hallazgos se define un plan para recuperación o retorno seguro a la actividad física.",
    icon: "ClipboardCheck",
    professionalIds: ["cyntia", "karine"],
  },
  {
    id: "evaluacion-inicial-embarazo",
    name: "Evaluación Inicial – Embarazo",
    category: "embarazo",
    shortDescription: "Primera valoración integral durante el embarazo para conocer tu estado físico, suelo pélvico y necesidades, y definir el acompañamiento más adecuado.",
    fullDescription: "Primera valoración integral durante el embarazo para conocer tu estado físico, suelo pélvico y necesidades, y definir el acompañamiento más adecuado para tu caso.",
    icon: "ClipboardCheck",
    professionalIds: ["cyntia", "karine"],
  },
  {
    id: "asesoria-lactancia",
    name: "Asesoría de Lactancia",
    category: "embarazo",
    shortDescription: "Apoyo personalizado prenatal y posparto para una lactancia segura y sin dolor.",
    fullDescription: "Prenatal: herramientas, respuestas y apoyo personalizado para iniciar una lactancia más segura. Plan realista, manejo de dudas. Posparto: transferencia y succión, grietas/dolor, agarre correcto, extracción si es necesario. Incluye laserterapia en caso de grietas o dolor en el pezón.",
    icon: "Heart",
    professionalIds: ["cyntia", "karine"],
  },
  {
    id: "curso-preparacion-nacimiento",
    name: "Curso de Preparación al Nacimiento",
    category: "embarazo",
    shortDescription: "Todo lo que necesitás saber sobre el parto, lactancia y primeros cuidados. Cupos limitados.",
    fullDescription: "Trabajo de parto y nacimiento, práctica de posturas, roles con papá (simulador de contracciones/peso), apego piel a piel, primeros cuidados y lactancia de los primeros días. Cupos limitados.",
    icon: "GraduationCap",
    professionalIds: ["cyntia", "karine"],
  },
  {
    id: "version-cefalica",
    name: "Ejercicios de Versión Cefálica",
    category: "embarazo",
    shortDescription: "Técnica no invasiva para intentar girar al bebé a posición cefálica antes del parto.",
    fullDescription: "Técnica no invasiva para intentar girar al bebé de podálica/transversa a cefálica (cabeza abajo) antes del parto. Ejercicios específicos según evaluación previa. Sesiones controladas con criterios de seguridad.",
    icon: "Baby",
    professionalIds: ["cyntia"],
  },
  {
    id: "reeducacion-embarazo",
    name: "Reeducación Abdominal y Piso Pélvico – Embarazo",
    category: "embarazo",
    shortDescription: "Fortalecé tu faja abdominal y suelo pélvico durante el embarazo para un mejor pronóstico de parto.",
    fullDescription: "Fortalecer faja abdominal y suelo pélvico, prevenir molestias y mejorar pronóstico de parto. Técnicas de control, respiración y postura, acompañamiento personalizado.",
    icon: "Activity",
    professionalIds: ["vania"],
  },
  {
    id: "reeducacion-postparto",
    name: "Reeducación Abdominal y Piso Pélvico – Posparto",
    category: "posparto",
    shortDescription: "Restaurá la fuerza de tu core y suelo pélvico. Recuperación abdominal, diástasis y más.",
    fullDescription: "Restaurar fuerza y función del core y suelo pélvico, mejorar postura/dolor de espalda, recuperación abdominal y diástasis conservadora, prevenir/tratar incontinencia, dolor sexual, prolapsos.",
    icon: "Dumbbell",
    professionalIds: ["vania"],
  },
  {
    id: "clases-hipopresivos",
    name: "Clases de Hipopresivos",
    category: "bienestar",
    shortDescription: "Clases guiadas para activar el core profundo, mejorar la postura y respiración, fortalecer el abdomen y lograr resultados progresivos.",
    fullDescription: "Clases guiadas para activar el core profundo, mejorar la postura y respiración, fortalecer el abdomen y lograr resultados progresivos. Ideal para todas las etapas.",
    icon: "Dumbbell",
    professionalIds: ["vania"],
  },
  {
    id: "presoterapia",
    name: "Presoterapia",
    category: "bienestar",
    shortDescription: "Drenaje mecánico para aliviar piernas cansadas, edema y retención de líquidos.",
    fullDescription: "Drenaje linfático mecánico para embarazo o postparto: mejora circulación sanguínea/linfática, alivia piernas cansadas, reduce edema y retención de líquidos.",
    icon: "Sparkles",
    professionalIds: ["cyntia"],
  },
  {
    id: "nutricion",
    name: "Nutrición por Etapa",
    category: "bienestar",
    shortDescription: "Plan nutricional personalizado para preconcepción, embarazo y posparto.",
    fullDescription: "Nutrición preconcepcional, embarazo y postparto: plan personalizado, control de síntomas, educación alimentaria, apoyo en lactancia.",
    icon: "Apple",
    professionalIds: ["laura"],
  },
  {
    id: "psicologia",
    name: "Psicología Perinatal",
    category: "bienestar",
    shortDescription: "Acompañamiento emocional en la búsqueda, embarazo y posparto.",
    fullDescription: "Acompañamiento emocional en búsqueda, embarazo y postparto; ansiedad, adaptación, vínculo, sostén familiar.",
    icon: "Brain",
    professionalIds: ["magali"],
    availabilityOverride: [
      { day: 3, shift: "mañana" },
      { day: 3, shift: "tarde" },
    ],
  },
  {
    id: "fisioterapia",
    name: "Fisioterapia",
    category: "bienestar",
    shortDescription: "Sesiones personalizadas con masajes, drenaje linfático y técnicas descontracturantes para aliviar molestias, tensión y retención de líquidos.",
    fullDescription: "Sesiones personalizadas con masajes, drenaje linfático y técnicas descontracturantes para aliviar molestias, tensión y retención de líquidos.",
    icon: "Activity",
    professionalIds: [], // pendiente de definir
  },
];

export const serviceCategoryOptions = [
  { value: "todas", label: "Todas" },
  { value: "embarazo", label: "Embarazo" },
  { value: "posparto", label: "Posparto" },
  { value: "menopausia", label: "Menopausia" },
  { value: "bienestar", label: "Bienestar" },
];

// ---- Helpers ----

export function getServiceAvailability(service: BookableService, professionalId?: string | null): AvailabilitySlot[] {
  // Service-level override takes priority
  if (service.availabilityOverride) {
    return service.availabilityOverride;
  }

  // If a specific professional is chosen
  if (professionalId && professionalId !== "sin-preferencia") {
    return getProfessionalAvailability(professionalId);
  }

  // "Sin preferencia" or no professional: union of all professionals' availability
  if (service.professionalIds.length === 0) {
    return defaultAvailability;
  }

  const allSlots = service.professionalIds.flatMap((pid) => getProfessionalAvailability(pid));
  // Deduplicate
  const unique = new Map<string, AvailabilitySlot>();
  allSlots.forEach((s) => unique.set(`${s.day}-${s.shift}`, s));
  return Array.from(unique.values()).sort((a, b) => a.day - b.day || (a.shift === "mañana" ? -1 : 1));
}

export function getProfessionalById(id: string): Professional | undefined {
  return professionals.find((p) => p.id === id);
}

export function buildWhatsAppUrl(data: {
  name: string;
  email: string;
  service: string;
  professional: string;
  slots: string[];
  withBaby: string;
  nursery: string;
}): string {
  const message = `Hola, quiero solicitar un turno para la clínica.

Nombre y apellido: ${data.name}
Mail: ${data.email}
Servicio / Especialidad: ${data.service}
Profesional: ${data.professional}
Horarios de preferencia: ${data.slots.join(", ")}
Asiste con bebé: ${data.withBaby}
Servicio de nursery: ${data.nursery}

Por favor, necesito coordinación de turno. Gracias.`;

  return `https://wa.me/${WHATSAPP_SECRETARIA}?text=${encodeURIComponent(message)}`;
}
