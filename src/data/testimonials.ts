export type TestimonialVariant = "social" | "review" | "message";

export interface Testimonial {
  id: number;
  name: string;
  text: string;
  rating?: number;
  variant: TestimonialVariant;
  source?: string;
  featured?: boolean;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Gabriela R.",
    text: "Tuve una muy linda experiencia. Me sentí muy contenida y acompañada en cada etapa, tanto en la preparación para el parto como en el post parto. Gracias por la calidez y el apoyo de todo el equipo.",
    rating: 5,
    variant: "review",
    source: "Google",
    featured: true,
  },
  {
    id: 2,
    name: "Camila S.",
    text: "Capísima, la mejor para acompañar el embarazo y el post parto 💕",
    variant: "social",
    source: "Instagram",
    featured: true,
  },
  {
    id: 3,
    name: "Valentina M.",
    text: "La mejor de todas, mucho amor a tu trabajo. Agradecida por haber coincidido contigo en una etapa tan delicada 🤍",
    variant: "message",
    featured: true,
  },
  {
    id: 4,
    name: "Lorena P.",
    text: "Se nota el amor por lo que hacés, tuve el privilegio de contar con tu apoyo pre, durante y post parto. No podría haber elegido un lugar mejor.",
    rating: 5,
    variant: "review",
    source: "Google",
  },
  {
    id: 5,
    name: "María José D.",
    text: "Mi cariño eterno hacia vos Kari por la contención que nos brindaste con tanto amor. Se necesitan más profesionales así 💗",
    variant: "social",
    source: "Instagram",
  },
  {
    id: 6,
    name: "Sofía L.",
    text: "Desde la primera consulta sentí que estaba en las mejores manos. Muy profesionales y a la vez muy humanas. Mil veces recomendadas.",
    rating: 5,
    variant: "review",
    source: "Google",
  },
  {
    id: 7,
    name: "Andrea F.",
    text: "Me ayudaron muchísimo con la lactancia. Tenía grietas y mucho dolor, y con el tratamiento y el acompañamiento logramos una lactancia feliz 🥰",
    variant: "message",
  },
  {
    id: 8,
    name: "Carolina B.",
    text: "Encontrar un espacio que entienda la menopausia sin tabúes fue transformador. Me siento escuchada y contenida en cada sesión.",
    rating: 5,
    variant: "review",
    source: "Google",
  },
  {
    id: 9,
    name: "Natalia G.",
    text: "Todo el equipo es increíble. Se siente el amor y la dedicación en cada detalle. ¡Gracias por tanto! 🌸",
    variant: "social",
    source: "Instagram",
  },
  {
    id: 10,
    name: "Rocío T.",
    text: "El curso de preparación al nacimiento fue hermoso. Mi pareja y yo llegamos al parto sintiéndonos seguros y acompañados. No puedo estar más agradecida.",
    rating: 5,
    variant: "review",
    source: "Google",
  },
  {
    id: 11,
    name: "Florencia A.",
    text: "La psicóloga perinatal me ayudó a transitar un posparto difícil. Gracias por la contención y el cariño 💜",
    variant: "message",
  },
  {
    id: 12,
    name: "Paula V.",
    text: "En pocas sesiones de hipopresivos empecé a notar cambios. La clínica es hermosa y el trato es inmejorable. ¡Super recomendada!",
    rating: 5,
    variant: "review",
    source: "Google",
  },
];
