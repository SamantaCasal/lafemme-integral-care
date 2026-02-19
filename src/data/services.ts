export interface Service {
  slug: string;
  title: string;
  category: "embarazo" | "posparto" | "menopausia" | "bienestar";
  shortDescription: string;
  fullDescription: string;
  icon: string;
}

export const services: Service[] = [
  {
    slug: "evaluacion-postparto",
    title: "Evaluación Postparto",
    category: "posparto",
    shortDescription: "Evaluación física postural, suelo pélvico y faja abdominal para tu recuperación integral.",
    fullDescription: "Evaluación física postural, suelo pélvico y faja abdominal. Recabamos información para identificar síntomas como incontinencia urinaria o fecal, dolor durante las relaciones sexuales, diástasis abdominal, entre otros. Según los hallazgos se define un plan para recuperación o retorno seguro a la actividad física.",
    icon: "ClipboardCheck",
  },
  {
    slug: "asesoria-lactancia",
    title: "Asesoría de Lactancia",
    category: "embarazo",
    shortDescription: "Apoyo personalizado prenatal y posparto para una lactancia segura y sin dolor.",
    fullDescription: "Prenatal: herramientas, respuestas y apoyo personalizado para iniciar una lactancia más segura. Plan realista, manejo de dudas. Posparto: transferencia y succión, grietas/dolor, agarre correcto, extracción si es necesario. Incluye laserterapia en caso de grietas o dolor en el pezón.",
    icon: "Heart",
  },
  {
    slug: "curso-preparacion-nacimiento",
    title: "Curso de Preparación al Nacimiento",
    category: "embarazo",
    shortDescription: "Todo lo que necesitás saber sobre el parto, lactancia y primeros cuidados. Cupos limitados.",
    fullDescription: "Trabajo de parto y nacimiento, práctica de posturas, roles con papá (simulador de contracciones/peso), apego piel a piel, primeros cuidados y lactancia de los primeros días. Cupos limitados.",
    icon: "GraduationCap",
  },
  {
    slug: "version-cefalica",
    title: "Ejercicios de Versión Cefálica",
    category: "embarazo",
    shortDescription: "Técnica no invasiva para intentar girar al bebé a posición cefálica antes del parto.",
    fullDescription: "Técnica no invasiva para intentar girar al bebé de podálica/transversa a cefálica (cabeza abajo) antes del parto. Ejercicios específicos según evaluación previa. Sesiones controladas con criterios de seguridad.",
    icon: "Baby",
  },
  {
    slug: "reeducacion-embarazo",
    title: "Reeducación Abdominal y Piso Pélvico – Embarazo",
    category: "embarazo",
    shortDescription: "Fortalecé tu faja abdominal y suelo pélvico durante el embarazo para un mejor pronóstico de parto.",
    fullDescription: "Fortalecer faja abdominal y suelo pélvico, prevenir molestias y mejorar pronóstico de parto. Técnicas de control, respiración y postura, acompañamiento personalizado. Final con drenaje linfático manual, presoterapia o masaje descontracturante.",
    icon: "Activity",
  },
  {
    slug: "reeducacion-postparto",
    title: "Reeducación Abdominal y Piso Pélvico – Posparto",
    category: "posparto",
    shortDescription: "Restaurá la fuerza de tu core y suelo pélvico. Recuperación abdominal, diástasis y más.",
    fullDescription: "Restaurar fuerza y función del core y suelo pélvico, mejorar postura/dolor de espalda, recuperación abdominal y diástasis conservadora, prevenir/tratar incontinencia, dolor sexual, prolapsos. Incluye activación abdominal/suelo pélvico, hipopresivos, aparatología y terapias manuales.",
    icon: "Dumbbell",
  },
  {
    slug: "presoterapia",
    title: "Presoterapia",
    category: "bienestar",
    shortDescription: "Drenaje linfático mecánico para aliviar piernas cansadas, edema y retención de líquidos.",
    fullDescription: "Drenaje linfático mecánico para embarazo o postparto: mejora circulación sanguínea/linfática, alivia piernas cansadas, reduce edema y retención de líquidos. Requiere valoración obstétrica previa.",
    icon: "Sparkles",
  },
  {
    slug: "nutricion",
    title: "Nutrición por Etapa",
    category: "bienestar",
    shortDescription: "Plan nutricional personalizado para preconcepción, embarazo y posparto.",
    fullDescription: "Nutrición preconcepcional, embarazo y postparto: plan personalizado, control de síntomas, educación alimentaria, apoyo en lactancia. Cada plan se adapta a tu etapa y necesidades específicas.",
    icon: "Apple",
  },
  {
    slug: "psicologia",
    title: "Psicología Perinatal",
    category: "bienestar",
    shortDescription: "Acompañamiento emocional en la búsqueda, embarazo y posparto.",
    fullDescription: "Acompañamiento emocional en búsqueda, embarazo y postparto; ansiedad, adaptación, vínculo, sostén familiar. Un espacio seguro para transitar cada etapa con acompañamiento profesional.",
    icon: "Brain",
  },
];

export const serviceCategories = [
  { value: "todas", label: "Todas" },
  { value: "embarazo", label: "Embarazo" },
  { value: "posparto", label: "Posparto" },
  { value: "menopausia", label: "Menopausia" },
  { value: "bienestar", label: "Bienestar" },
];
