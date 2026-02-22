export interface TeamMember {
  name: string;
  role: string;
  specialty: string;
  bio: string;
  instagram?: string;
  photo?: string;
}

export const teamMembers: TeamMember[] = [
  {
    name: "Obst. Cyntia Martínez",
    role: "Directora · Obstetra",
    specialty: "Embarazo, posparto y reeducación pélvica",
    bio: "Con más de [COMPLETAR] años de experiencia, la Obst. Cyntia Martínez fundó La Femme con la visión de ofrecer un acompañamiento integral, humano y basado en evidencia. Su enfoque personalizado abarca desde el embarazo hasta la menopausia, siempre priorizando el bienestar de cada mujer.",
    instagram: "https://www.instagram.com/obstetracyntiamartinez",
    photo: "cyntia",
  },
  {
    name: "Lic. Rosa Roa",
    role: "Nutricionista",
    specialty: "Nutrición perinatal y preconcepción",
    bio: "Especializada en nutrición para preconcepción, embarazo y postparto. Diseña planes alimentarios personalizados que acompañan cada etapa con un enfoque práctico y sostenible.",
    instagram: "https://www.instagram.com/lic.rosaroa",
    photo: "rosa",
  },
  {
    name: "Lic. Juana Perez",
    role: "Psicóloga Perinatal",
    specialty: "Psicología perinatal y vínculo",
    bio: "Acompaña emocionalmente a mujeres y familias durante la búsqueda del embarazo, la gestación y el posparto. Trabaja con ansiedad, adaptación a la maternidad, duelo gestacional y fortalecimiento del vínculo.",
    instagram: "https://www.instagram.com/lic.juanaperez",
    photo: "juana",
  },
  {
    name: "Lic. Vania Rodriguez",
    role: "Instructora Física",
    specialty: "Actividad física perinatal y postparto",
    bio: "Guía a mujeres en el movimiento seguro durante el embarazo y la recuperación postparto. Diseña rutinas adaptadas a cada etapa, priorizando el bienestar y la funcionalidad del cuerpo.",
    instagram: "https://www.instagram.com/lic.vaniarodriguez",
    photo: "vania",
  },
  {
    name: "Lic. Raquel Perez",
    role: "Fisioterapeuta",
    specialty: "Fisioterapia pélvica y postural",
    bio: "Especializada en reeducación del suelo pélvico y rehabilitación postural. Trabaja con técnicas manuales y ejercicios específicos para la recuperación integral de cada paciente.",
    instagram: "https://www.instagram.com/lic.raquelperez",
    photo: "raquel",
  },
];

export const WHATSAPP_NUMBER = "595981228045";
export const WHATSAPP_DISPLAY = "0981 228045";
export const INSTAGRAM_HANDLE = "@clinicalafemme.py";
export const INSTAGRAM_URL = "https://www.instagram.com/clinicalafemme.py";
export const CLINIC_ADDRESS = "Cruz Del Chaco 877, Asunción 001413";
export const CLINIC_HOURS = "Lunes a viernes de 8 a 18h · Sábados de 8 a 12h";
export const CLINIC_EMAIL = "lafemme@gmail.com";
export const BOOKING_LINK = "[COMPLETAR_LINK_AGENDA]";
