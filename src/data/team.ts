export interface TeamMember {
  name: string;
  role: string;
  roleEn: string;
  specialty: string;
  bio: string;
  bioEn: string;
  instagram?: string;
  photo?: string;
}

export const teamMembers: TeamMember[] = [
  {
    name: "Lic. Cyntia Martínez",
    role: "Directora y Fundadora · Lic. en Obstetricia",
    roleEn: "Founder & Director · Lic. in Obstetrics",
    specialty: "Embarazo, posparto y reeducación pélvica",
    bio: "Fundadora de Clínica La Femme y Licenciada en Obstetricia. Su práctica se enfoca en el acompañamiento integral de la mujer, con una mirada profesional, cercana y respetuosa en cada etapa de la vida.",
    bioEn: "Founder of Clínica La Femme and Licensed in Obstetrics. Her practice focuses on comprehensive women's care, with a professional, close and respectful approach at every stage of life.",
    instagram: "https://www.instagram.com/obstetracyntiamartinez",
    photo: "cyntia",
  },
  {
    name: "Lic. Karine Correa",
    role: "Especialista en acompañamiento prenatal y lactancia",
    roleEn: "Prenatal care & lactation specialist",
    specialty: "Acompañamiento prenatal y lactancia",
    bio: "Especializada en acompañamiento integral durante el embarazo, preparación para el parto y asesoría en lactancia, con un abordaje humanizado y basado en evidencia científica.",
    bioEn: "Specialized in comprehensive support during pregnancy, birth preparation and lactation counseling, with a humanized and evidence-based approach.",
    photo: "karine",
  },
  {
    name: "Lic. Magalí Jure Wolf",
    role: "Lic. en Psicología",
    roleEn: "Lic. in Psychology",
    specialty: "Psicología general e integrativa",
    bio: "Licenciada en Psicología General con 8 años de experiencia. Trabaja desde un enfoque integrativo, brindando herramientas orientadas al bienestar emocional y la mejora de la calidad de vida.",
    bioEn: "Licensed in General Psychology with 8 years of experience. She works from an integrative approach, providing tools aimed at emotional well-being and improving quality of life.",
    photo: "magali",
  },
  {
    name: "Vannia Dubrez",
    role: "Entrenadora especializada en embarazo y posparto · Instructora de gimnasia hipopresiva",
    roleEn: "Pregnancy & postpartum fitness trainer · Hypopressive gymnastics instructor",
    specialty: "Entrenamiento en embarazo y posparto",
    bio: "Especializada en acompañar a la mujer durante el embarazo y el posparto mediante un enfoque de movimiento cuidado, profesional y adaptado a cada etapa. Su trabajo busca fortalecer el cuerpo, favorecer el bienestar y brindar seguridad en todo el proceso.",
    bioEn: "Specialized in supporting women during pregnancy and postpartum through a careful, professional movement approach adapted to each stage. Her work aims to strengthen the body, promote well-being and provide confidence throughout the process.",
    photo: "vania",
  },
  {
    name: "Lic. Laura Cañete",
    role: "Lic. en Nutrición · Especialista en nutrición materno-infantil",
    roleEn: "Lic. in Nutrition · Maternal & infant nutrition specialist",
    specialty: "Nutrición materno-infantil",
    bio: "Licenciada en Nutrición con enfoque en salud materno-infantil. Acompaña a la mujer con planes nutricionales personalizados durante la preconcepción, el embarazo y el posparto, promoviendo hábitos saludables y un bienestar integral.",
    bioEn: "Licensed in Nutrition with a focus on maternal and infant health. She supports women with personalized nutritional plans during preconception, pregnancy and postpartum, promoting healthy habits and comprehensive well-being.",
    photo: "laura",
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
