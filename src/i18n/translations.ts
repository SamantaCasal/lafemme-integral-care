export type Lang = "es" | "en";

export const translations: Record<Lang, Record<string, string>> = {
  es: {
    // Nav
    "nav.home": "Inicio",
    "nav.about": "Quiénes somos",
    "nav.specialties": "Especialidades",
    "nav.blog": "Blog",
    "nav.testimonials": "Testimonios",
    "nav.faq": "FAQ",
    "nav.contact": "Contacto",
    "nav.book": "Agendar turno",

    // Hero
    "hero.title": "La Femme",
    "hero.subtitle": "Embarazo, posparto y menopausia: acompañamiento integral en cada etapa.",
    "hero.cta": "Agendar turno",
    "hero.specialties": "Ver especialidades",

    // About Preview
    "about.title": "Quiénes somos",
    "about.intro": "Somos un equipo multidisciplinario comprometido con la salud integral de la mujer. En La Femme combinamos calidez, profesionalismo y evidencia para acompañarte en cada etapa.",
    "about.cta": "Agendá tu turno",
    "about.section_title": "Quiénes somos",
    "about.section_text": "En La Femme creemos que cada mujer merece un acompañamiento cálido, profesional y basado en evidencia. Somos una clínica integral especializada en las etapas más transformadoras de la vida: embarazo, posparto y menopausia. Nuestro equipo multidisciplinario trabaja de forma coordinada para cuidar tu cuerpo, tu mente y tu bienestar.",

    // Director
    "director.label": "Directora · Obstetra",
    "director.name": "Obst. Cyntia Martínez",
    "director.bio": "Con más de [COMPLETAR] años de experiencia en salud femenina, Cyntia fundó La Femme con un propósito claro: ofrecer un espacio donde cada mujer se sienta escuchada, contenida y cuidada. Su enfoque combina la evidencia científica con una mirada profundamente humana, priorizando siempre el acompañamiento personalizado.",
    "director.cta1": "Agendá con la obstetra",
    "director.cta2": "Conocé al equipo",

    // Featured Services
    "services.title": "Especialidades destacadas",
    "services.subtitle": "Conocé nuestros servicios diseñados para cada etapa de tu vida.",
    "services.more_info": "Más información →",
    "services.view_all": "Ver todas las especialidades →",

    // Stages
    "stages.title": "¿Para quiénes hacemos lo que hacemos?",
    "stages.pregnancy": "Embarazo",
    "stages.pregnancy_desc": "Te acompañamos desde el inicio con preparación al parto, nutrición, ejercicios y contención emocional para vivir un embarazo pleno.",
    "stages.postpartum": "Posparto",
    "stages.postpartum_desc": "Recuperación integral: evaluación postparto, lactancia, reeducación del piso pélvico y apoyo psicológico para esta nueva etapa.",
    "stages.menopause": "Menopausia",
    "stages.menopause_desc": "Un espacio sin tabúes para transitar la menopausia con bienestar, acompañamiento médico, nutricional y emocional.",
    "stages.view_services": "Ver servicios →",

    // Testimonial Banner
    "testimonials.banner_label": "Lo que dicen nuestras pacientes",
    "testimonials.banner_click": "Hacé clic para ver más testimonios →",
    "testimonials.title": "Testimonios",
    "testimonials.subtitle": "Lo que dicen nuestras pacientes sobre su experiencia en La Femme.",
    "testimonials.share_title": "¿Querés compartir tu experiencia?",
    "testimonials.share_text": "Nos encantaría escucharte. Tu historia puede ayudar a otras mujeres.",
    "testimonials.share_cta": "Contanos tu experiencia",
    "testimonials.share_wa": "Hola, quiero compartir mi experiencia en La Femme.",

    // Quick Contact
    "contact.quick_title": "Contacto rápido",
    "contact.phone_label": "Teléfono / WhatsApp",
    "contact.ig_label": "Instagram",
    "contact.address_label": "Dirección",
    "contact.hours_label": "Horarios",
    "contact.map_placeholder": "[Mapa — Insertar embed de Google Maps con la dirección de la clínica]",

    // Appointment Teaser
    "appointment.title": "Agendá tu turno en 3 pasos",
    "appointment.step": "Paso",
    "appointment.step1_title": "Elegí tu especialidad",
    "appointment.step1_desc": "Explorá nuestros servicios y encontrá lo que necesitás.",
    "appointment.step2_title": "Elegí profesional",
    "appointment.step2_desc": "Seleccioná la profesional que prefieras para tu consulta.",
    "appointment.step3_title": "Confirmá tu turno",
    "appointment.step3_desc": "Elegí fecha y horario. ¡Listo!",
    "appointment.book": "Agendar turno",
    "appointment.wa_text": "Hola, quiero agendar un turno en La Femme.",

    // Blog Preview
    "blog.title": "Blog",
    "blog.subtitle": "Artículos y recursos para tu bienestar.",
    "blog.view_all": "Ver todos los artículos →",
    "blog.info_subtitle": "Información y recursos sobre embarazo, posparto, menopausia y bienestar.",
    "blog.search_placeholder": "Buscar artículo...",
    "blog.no_results": "No se encontraron artículos.",
    "blog.not_found": "Artículo no encontrado",
    "blog.back": "Volver al blog",
    "blog.read_more": "¿Querés saber más? Agendá una consulta con nuestro equipo.",

    // Footer
    "footer.brand_desc": "Clínica especializada en embarazo, posparto y menopausia. Acompañamiento integral en cada etapa.",
    "footer.links": "Enlaces",
    "footer.contact": "Contacto",
    "footer.legal": "Legal",
    "footer.privacy": "Política de privacidad",
    "footer.terms": "Términos y condiciones",
    "footer.copyright": "Todos los derechos reservados. La información proporcionada en este sitio es de carácter informativo y no reemplaza una consulta profesional.",
    "footer.specialties": "Especialidades",
    "footer.book": "Agendar turno",
    "footer.testimonials": "Testimonios",
    "footer.faq_label": "Preguntas frecuentes",

    // Badges
    "badge.consultorios": "Consultorios",
    "badge.ejercicios": "Área de ejercicios",
    "badge.spa": "Spa",
    "badge.nursery": "Nursery",
    "badge.reeducacion": "Reeducación abdominal y piso pélvico",

    // Especialidades page
    "specialties.page_title": "Nuestras Especialidades",
    "specialties.page_subtitle": "Servicios diseñados para acompañarte en cada etapa con un enfoque integral y personalizado.",
    "specialties.not_found": "Especialidad no encontrada",
    "specialties.back": "Volver a especialidades",
    "specialties.consult": "Consultanos",
    "specialties.view_more": "Ver más →",
    "specialties.filter_all": "Todas",

    // Contacto page
    "contact.title": "Contacto",
    "contact.subtitle": "Estamos para ayudarte. Escribinos o visitanos.",
    "contact.name_label": "Nombre",
    "contact.name_placeholder": "Tu nombre",
    "contact.email_label": "Email",
    "contact.phone_field_label": "Teléfono",
    "contact.phone_placeholder": "Tu teléfono",
    "contact.message_label": "Mensaje",
    "contact.message_placeholder": "¿En qué podemos ayudarte?",
    "contact.submit": "Enviar mensaje",
    "contact.wa_direct": "WhatsApp directo",
    "contact.map_embed": "[Embed de Google Maps]",
    "contact.success": "¡Mensaje enviado! (mock). Te responderemos pronto.",

    // Turnos page
    "turnos.title": "Agendá tu turno",
    "turnos.subtitle_prefix": "Completá el formulario o escribinos directamente por WhatsApp al",
    "turnos.name_label": "Nombre y apellido",
    "turnos.name_placeholder": "Tu nombre completo",
    "turnos.stage_label": "Etapa",
    "turnos.stage_placeholder": "Seleccioná tu etapa",
    "turnos.specialty_label": "Especialidad",
    "turnos.specialty_placeholder": "Ej: Evaluación postparto, lactancia...",
    "turnos.professional_label": "Profesional",
    "turnos.professional_placeholder": "Seleccioná profesional",
    "turnos.date_label": "Preferencia de fecha/horario",
    "turnos.date_placeholder": "Ej: Lunes a la tarde",
    "turnos.message_label": "Mensaje (opcional)",
    "turnos.message_placeholder": "Contanos si tenés alguna consulta...",
    "turnos.submit": "Enviar formulario",
    "turnos.wa_send": "Enviar por WhatsApp",
    "turnos.success": "¡Gracias! Tu solicitud fue enviada (mock). Te contactaremos a la brevedad.",
    "turnos.stage_pregnancy": "Embarazo",
    "turnos.stage_postpartum": "Posparto",
    "turnos.stage_menopause": "Menopausia",
    "turnos.prof_obstetra": "Obstetra",
    "turnos.prof_nutricionista": "Nutricionista",
    "turnos.prof_psicologa": "Psicóloga",

    // FAQ page
    "faq.title": "Preguntas Frecuentes",
    "faq.subtitle": "Encontrá respuestas a las consultas más comunes.",

    // Categories
    "cat.todas": "Todas",
    "cat.embarazo": "Embarazo",
    "cat.posparto": "Posparto",
    "cat.menopausia": "Menopausia",
    "cat.bienestar": "Bienestar",
  },
  en: {
    // Nav
    "nav.home": "Home",
    "nav.about": "About Us",
    "nav.specialties": "Specialties",
    "nav.blog": "Blog",
    "nav.testimonials": "Testimonials",
    "nav.faq": "FAQ",
    "nav.contact": "Contact",
    "nav.book": "Book Appointment",

    // Hero
    "hero.title": "La Femme",
    "hero.subtitle": "Pregnancy, postpartum & menopause: comprehensive care at every stage.",
    "hero.cta": "Book Appointment",
    "hero.specialties": "View Specialties",

    // About Preview
    "about.title": "About Us",
    "about.intro": "We are a multidisciplinary team committed to comprehensive women's health. At La Femme we combine warmth, professionalism and evidence to support you at every stage.",
    "about.cta": "Book your appointment",
    "about.section_title": "About Us",
    "about.section_text": "At La Femme we believe every woman deserves warm, professional, evidence-based care. We are a comprehensive clinic specializing in life's most transformative stages: pregnancy, postpartum and menopause. Our multidisciplinary team works in coordination to care for your body, mind and well-being.",

    // Director
    "director.label": "Director · Obstetrician",
    "director.name": "Obst. Cyntia Martínez",
    "director.bio": "With over [COMPLETE] years of experience in women's health, Cyntia founded La Femme with a clear purpose: to offer a space where every woman feels heard, supported and cared for. Her approach combines scientific evidence with a deeply human perspective, always prioritizing personalized care.",
    "director.cta1": "Book with the obstetrician",
    "director.cta2": "Meet the team",

    // Featured Services
    "services.title": "Featured Specialties",
    "services.subtitle": "Discover our services designed for every stage of your life.",
    "services.more_info": "More info →",
    "services.view_all": "View all specialties →",

    // Stages
    "stages.title": "Who do we do what we do for?",
    "stages.pregnancy": "Pregnancy",
    "stages.pregnancy_desc": "We accompany you from the start with birth preparation, nutrition, exercises and emotional support for a fulfilling pregnancy.",
    "stages.postpartum": "Postpartum",
    "stages.postpartum_desc": "Comprehensive recovery: postpartum evaluation, breastfeeding, pelvic floor rehabilitation and psychological support for this new stage.",
    "stages.menopause": "Menopause",
    "stages.menopause_desc": "A taboo-free space to navigate menopause with well-being, medical, nutritional and emotional support.",
    "stages.view_services": "View services →",

    // Testimonial Banner
    "testimonials.banner_label": "What our patients say",
    "testimonials.banner_click": "Click to see more testimonials →",
    "testimonials.title": "Testimonials",
    "testimonials.subtitle": "What our patients say about their experience at La Femme.",
    "testimonials.share_title": "Want to share your experience?",
    "testimonials.share_text": "We'd love to hear from you. Your story can help other women.",
    "testimonials.share_cta": "Share your experience",
    "testimonials.share_wa": "Hello, I want to share my experience at La Femme.",

    // Quick Contact
    "contact.quick_title": "Quick Contact",
    "contact.phone_label": "Phone / WhatsApp",
    "contact.ig_label": "Instagram",
    "contact.address_label": "Address",
    "contact.hours_label": "Hours",
    "contact.map_placeholder": "[Map — Insert Google Maps embed with clinic address]",

    // Appointment Teaser
    "appointment.title": "Book your appointment in 3 steps",
    "appointment.step": "Step",
    "appointment.step1_title": "Choose your specialty",
    "appointment.step1_desc": "Explore our services and find what you need.",
    "appointment.step2_title": "Choose a professional",
    "appointment.step2_desc": "Select the professional you prefer for your consultation.",
    "appointment.step3_title": "Confirm your appointment",
    "appointment.step3_desc": "Choose date and time. Done!",
    "appointment.book": "Book Appointment",
    "appointment.wa_text": "Hello, I want to book an appointment at La Femme.",

    // Blog Preview
    "blog.title": "Blog",
    "blog.subtitle": "Articles and resources for your well-being.",
    "blog.view_all": "View all articles →",
    "blog.info_subtitle": "Information and resources about pregnancy, postpartum, menopause and well-being.",
    "blog.search_placeholder": "Search article...",
    "blog.no_results": "No articles found.",
    "blog.not_found": "Article not found",
    "blog.back": "Back to blog",
    "blog.read_more": "Want to learn more? Book a consultation with our team.",

    // Footer
    "footer.brand_desc": "Clinic specializing in pregnancy, postpartum and menopause. Comprehensive care at every stage.",
    "footer.links": "Links",
    "footer.contact": "Contact",
    "footer.legal": "Legal",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms & Conditions",
    "footer.copyright": "All rights reserved. The information provided on this site is for informational purposes and does not replace a professional consultation.",
    "footer.specialties": "Specialties",
    "footer.book": "Book Appointment",
    "footer.testimonials": "Testimonials",
    "footer.faq_label": "Frequently Asked Questions",

    // Badges
    "badge.consultorios": "Consulting Rooms",
    "badge.ejercicios": "Exercise Area",
    "badge.spa": "Spa",
    "badge.nursery": "Nursery",
    "badge.reeducacion": "Abdominal & Pelvic Floor Rehab",

    // Especialidades page
    "specialties.page_title": "Our Specialties",
    "specialties.page_subtitle": "Services designed to support you at every stage with a comprehensive and personalized approach.",
    "specialties.not_found": "Specialty not found",
    "specialties.back": "Back to specialties",
    "specialties.consult": "Contact us",
    "specialties.view_more": "View more →",
    "specialties.filter_all": "All",

    // Contacto page
    "contact.title": "Contact",
    "contact.subtitle": "We're here to help. Write to us or visit us.",
    "contact.name_label": "Name",
    "contact.name_placeholder": "Your name",
    "contact.email_label": "Email",
    "contact.phone_field_label": "Phone",
    "contact.phone_placeholder": "Your phone",
    "contact.message_label": "Message",
    "contact.message_placeholder": "How can we help you?",
    "contact.submit": "Send message",
    "contact.wa_direct": "Direct WhatsApp",
    "contact.map_embed": "[Google Maps Embed]",
    "contact.success": "Message sent! (mock). We'll get back to you soon.",

    // Turnos page
    "turnos.title": "Book Your Appointment",
    "turnos.subtitle_prefix": "Fill out the form or write to us directly on WhatsApp at",
    "turnos.name_label": "Full name",
    "turnos.name_placeholder": "Your full name",
    "turnos.stage_label": "Stage",
    "turnos.stage_placeholder": "Select your stage",
    "turnos.specialty_label": "Specialty",
    "turnos.specialty_placeholder": "E.g.: Postpartum evaluation, breastfeeding...",
    "turnos.professional_label": "Professional",
    "turnos.professional_placeholder": "Select professional",
    "turnos.date_label": "Preferred date/time",
    "turnos.date_placeholder": "E.g.: Monday afternoon",
    "turnos.message_label": "Message (optional)",
    "turnos.message_placeholder": "Tell us if you have any questions...",
    "turnos.submit": "Submit form",
    "turnos.wa_send": "Send via WhatsApp",
    "turnos.success": "Thank you! Your request has been sent (mock). We'll contact you shortly.",
    "turnos.stage_pregnancy": "Pregnancy",
    "turnos.stage_postpartum": "Postpartum",
    "turnos.stage_menopause": "Menopause",
    "turnos.prof_obstetra": "Obstetrician",
    "turnos.prof_nutricionista": "Nutritionist",
    "turnos.prof_psicologa": "Psychologist",

    // FAQ page
    "faq.title": "Frequently Asked Questions",
    "faq.subtitle": "Find answers to the most common questions.",

    // Categories
    "cat.todas": "All",
    "cat.embarazo": "Pregnancy",
    "cat.posparto": "Postpartum",
    "cat.menopausia": "Menopause",
    "cat.bienestar": "Wellness",
  },
};
