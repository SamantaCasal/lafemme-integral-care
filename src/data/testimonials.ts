export interface Testimonial {
  id: number;
  name: string;
  stage: string;
  text: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  { id: 1, name: "María G.", stage: "Posparto", text: "Después de mi cesárea no sabía por dónde empezar. En La Femme me acompañaron paso a paso con la reeducación del piso pélvico y la lactancia. Hoy me siento recuperada al 100%.", rating: 5 },
  { id: 2, name: "Sofía R.", stage: "Embarazo", text: "El curso de preparación al nacimiento fue increíble. Mi pareja y yo llegamos al parto sintiéndonos seguros y acompañados. No puedo estar más agradecida.", rating: 5 },
  { id: 3, name: "Carolina M.", stage: "Posparto", text: "La asesoría de lactancia me salvó. Tenía grietas terribles y con la laserterapia y el acompañamiento, logramos una lactancia sin dolor.", rating: 5 },
  { id: 4, name: "Valentina P.", stage: "Embarazo", text: "Me encanta el spa. La presoterapia durante el embarazo me aliviaba muchísimo la hinchazón. Un lujo necesario.", rating: 4 },
  { id: 5, name: "Luciana D.", stage: "Menopausia", text: "Encontrar un espacio que entienda la menopausia sin tabúes fue transformador. Me siento escuchada y contenida.", rating: 5 },
  { id: 6, name: "Ana B.", stage: "Posparto", text: "La evaluación postparto fue muy completa. Me detectaron una diástasis que no sabía que tenía y armaron un plan perfecto para mí.", rating: 5 },
  { id: 7, name: "Camila S.", stage: "Embarazo", text: "La nutricionista me armó un plan que me ayudó con las náuseas y me dio energía. Excelente profesional.", rating: 5 },
  { id: 8, name: "Florencia T.", stage: "Posparto", text: "La psicóloga perinatal me ayudó a transitar un posparto difícil. Su enfoque es cálido y profesional.", rating: 5 },
  { id: 9, name: "Julieta K.", stage: "Embarazo", text: "Los ejercicios de versión cefálica funcionaron. Mi bebé giró y pude tener el parto que soñaba.", rating: 5 },
  { id: 10, name: "Romina L.", stage: "Menopausia", text: "Por fin un lugar donde hablar de menopausia con naturalidad. Las sesiones de reeducación me cambiaron la calidad de vida.", rating: 4 },
  { id: 11, name: "Paula V.", stage: "Posparto", text: "Increíble cómo en pocas sesiones de hipopresivos empecé a notar cambios. La clínica es hermosa y el trato es inmejorable.", rating: 5 },
  { id: 12, name: "Daniela F.", stage: "Embarazo", text: "Desde la primera consulta sentí que estaba en las mejores manos. Muy profesionales y a la vez muy humanas.", rating: 5 },
];
