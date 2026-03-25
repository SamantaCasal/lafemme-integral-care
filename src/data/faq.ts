export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export const faqCategories = ["Todas", "General", "Embarazo", "Posparto", "Lactancia", "Menopausia", "Nutrición", "Piso Pélvico"];

export const faqItems: FAQItem[] = [
  // --- Preguntas frecuentes originales ---
  {
    question: "¿Cómo reservo un turno?",
    answer: "Podés solicitar tu turno a través de nuestra página de turnos, o directamente por WhatsApp al 0981 228045. Te responderemos a la brevedad para confirmar día y horario.",
    category: "General",
  },
  {
    question: "¿Qué llevo a la primera consulta?",
    answer: "Te recomendamos traer tu documentación médica reciente (ecografías, análisis de sangre, informes previos), ropa cómoda y cualquier pregunta que tengas. El resto lo ponemos nosotras.",
    category: "General",
  },
  {
    question: "¿Cuándo conviene hacer la evaluación postparto?",
    answer: "Lo ideal es entre las 6 y 8 semanas posteriores al parto, tanto vaginal como cesárea. Sin embargo, nunca es tarde para comenzar. Si tenés síntomas como incontinencia o dolor, consultá sin importar cuánto tiempo haya pasado.",
    category: "Posparto",
  },
  {
    question: "¿Atienden nutrición y psicología durante el embarazo y posparto?",
    answer: "Sí. Contamos con una nutricionista y una psicóloga especializadas en las etapas de preconcepción, embarazo y postparto. Ambas forman parte del equipo integral de La Femme.",
    category: "General",
  },
  {
    question: "¿Qué duración tienen las sesiones?",
    answer: "Las sesiones varían según el servicio. En general, las consultas duran entre 30 y 60 minutos. Las sesiones de reeducación o spa pueden extenderse entre 45 y 90 minutos. Te informaremos al momento de solicitar tu turno.",
    category: "General",
  },
  {
    question: "¿Cómo sé qué servicio necesito?",
    answer: "Si no estás segura, podés solicitar una consulta de evaluación inicial. Nuestra obstetra evaluará tu caso y te orientará hacia el servicio más adecuado para vos.",
    category: "General",
  },
  {
    question: "¿Cuál es la política de cancelación?",
    answer: "Te pedimos avisar con al menos 24 horas de anticipación si necesitás cancelar o reprogramar tu turno. Esto nos permite ofrecer ese espacio a otra paciente.",
    category: "General",
  },
  {
    question: "¿Dónde están ubicados y hay estacionamiento?",
    answer: "Estamos en Cruz Del Chaco 877, Asunción. Nos encontramos en una zona accesible y de fácil ubicación.",
    category: "General",
  },
  {
    question: "¿Atienden menopausia?",
    answer: "Sí. En La Femme acompañamos a mujeres en todas las etapas: embarazo, posparto y menopausia. Ofrecemos reeducación del piso pélvico, nutrición y apoyo psicológico adaptados a esta etapa.",
    category: "Menopausia",
  },
  {
    question: "¿Las sesiones de reeducación son dolorosas?",
    answer: "No. Las sesiones son progresivas y adaptadas a cada paciente. Trabajamos con técnicas suaves y controladas. Si en algún momento sentís molestia, ajustamos inmediatamente el plan.",
    category: "Piso Pélvico",
  },

  // --- Contenido migrado desde Blog ---
  {
    question: "¿Qué es la diástasis abdominal y cómo tratarla?",
    answer: "La diástasis abdominal es la separación de los músculos rectos del abdomen, frecuente durante y después del embarazo.\n\nUn profesional puede evaluarla con un test manual, midiendo la separación en dedos de ancho y verificando la tensión del tejido conectivo.\n\nEn la mayoría de los casos se puede tratar sin cirugía. La reeducación abdominal con ejercicios específicos (hipopresivos, activación del transverso abdominal) logra grandes resultados. Es importante no hacer abdominales clásicos, ya que pueden empeorar la separación.\n\nLo ideal es hacer una evaluación postparto entre las 6 y 8 semanas después del parto. Cuanto antes se comience el tratamiento, mejores son los resultados.",
    category: "Posparto",
  },
  {
    question: "¿Cómo son los primeros días de lactancia?",
    answer: "La lactancia materna requiere aprendizaje. Los primeros días son fundamentales para establecer una buena técnica.\n\nEl primer alimento que producís es el calostro: un líquido espeso y amarillento, rico en anticuerpos. Aunque parece poco, es exactamente lo que tu bebé necesita.\n\nUn buen agarre es clave para prevenir grietas y dolor. El bebé debe tomar gran parte de la areola, no solo el pezón. Su mentón debe tocar el pecho y los labios estar evertidos.\n\nSi sentís dolor persistente, tenés grietas, o tu bebé no parece satisfecho, buscá asesoramiento profesional. La laserterapia puede ayudar mucho con las grietas.",
    category: "Lactancia",
  },
  {
    question: "¿Qué ejercicios son seguros durante el embarazo?",
    answer: "El ejercicio durante el embarazo no solo es seguro sino recomendable en la mayoría de los casos. Mejora el estado de ánimo, la postura, la circulación y puede facilitar el trabajo de parto.\n\nEjercicios recomendados: caminatas a paso moderado, yoga prenatal adaptado, ejercicios de fortalecimiento del suelo pélvico, natación y ejercicios con pelota de pilates.\n\nEvitar: deportes de contacto o con riesgo de caída, abdominales clásicos (crunch), ejercicios boca arriba prolongados después del primer trimestre y actividades con cambios bruscos de dirección.\n\nFortalecer el suelo pélvico durante el embarazo previene incontinencia y mejora el pronóstico del parto.",
    category: "Embarazo",
  },
  {
    question: "¿Cómo se vive la menopausia y cómo podemos ayudar?",
    answer: "La menopausia marca el fin de la etapa reproductiva y el inicio de una nueva fase. No es una enfermedad: es una transición natural que merece acompañamiento.\n\nSíntomas comunes: sofocos y sudoración nocturna, cambios de humor, sequedad vaginal, cambios en el suelo pélvico y alteraciones del sueño.\n\nEn La Femme ofrecemos un abordaje integral: desde la reeducación del suelo pélvico hasta el acompañamiento nutricional y psicológico. Cada mujer vive esta etapa de forma diferente y merece un plan personalizado.",
    category: "Menopausia",
  },
  {
    question: "¿Cómo debería alimentarme en cada trimestre del embarazo?",
    answer: "La alimentación durante el embarazo es fundamental para la salud de la mamá y el desarrollo del bebé.\n\nPrimer trimestre: priorizar ácido fólico, hierro y vitamina B12. Comidas pequeñas y frecuentes si hay náuseas. Evitar alimentos crudos o poco cocidos.\n\nSegundo trimestre: aumentan las necesidades calóricas. Incorporar calcio, omega 3 y proteínas de calidad. Es un buen momento para establecer hábitos saludables.\n\nTercer trimestre: mayor necesidad de hierro y fibra. Comidas más pequeñas por la presión del útero. Hidratación constante.",
    category: "Nutrición",
  },
  {
    question: "¿Por qué es importante el suelo pélvico y cómo cuidarlo?",
    answer: "El suelo pélvico es un conjunto de músculos y tejidos que sostienen los órganos pélvicos. Su buen funcionamiento es esencial para la continencia, la función sexual y el soporte de órganos.\n\nPuede debilitarse por: embarazo y parto, menopausia, estreñimiento crónico, sobrepeso y ejercicio de alto impacto sin preparación.\n\nSeñales de alerta: pérdidas de orina al toser, estornudar o saltar; sensación de pesadez pélvica; dolor durante las relaciones sexuales; urgencia urinaria.\n\nLa reeducación del suelo pélvico con un profesional especializado es el primer paso. Los ejercicios se adaptan a cada caso y los resultados son excelentes.",
    category: "Piso Pélvico",
  },
];
