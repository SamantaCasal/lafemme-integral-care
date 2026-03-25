import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import directorImage from "@/assets/director-home.jpg";

const DirectorSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative animate-fade-up">
            <div className="aspect-[3/4] max-w-md mx-auto lg:mx-0 rounded-2xl overflow-hidden shadow-xl">
              <img
                src={directorImage}
                alt="Lic. Cyntia Martínez – Directora y Fundadora de La Femme"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-secondary rounded-2xl -z-10" />
          </div>

          <div className="space-y-6 animate-fade-up delay-200">
            <span className="text-primary font-medium text-sm tracking-widest uppercase">
              Directora y Fundadora · Lic. en Obstetricia
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground">
              Lic. Cyntia Martínez
            </h2>
            <div className="text-muted-foreground text-base md:text-lg leading-relaxed space-y-4">
              <p>
                <strong>Lic. Cyntia Martínez es fundadora de Clínica La Femme, obstetra y docente universitaria.</strong> Apasionada por la salud integral de la mujer, dedica su trabajo a acompañar con calidez, respeto y respaldo profesional cada etapa de su vida.
              </p>
              <p>
                Su camino profesional ha estado marcado por una búsqueda constante de formación y actualización, con la convicción de que una atención de calidad debe estar siempre sostenida por el conocimiento, la ética y la sensibilidad humana. En 2017 viajó a Francia para continuar especializándose en áreas clave de la salud de la mujer, realizando estudios en acción humanitaria, lactancia materna y reeducación del piso pélvico, además de participar en seminarios sobre fisiología del nacimiento.
              </p>
              <p>
                Clínica La Femme nació de esa misma visión: la de crear un espacio pensado especialmente para acompañar a las mujeres en momentos tan importantes como el embarazo, el posparto y la menopausia, integrando salud física, bienestar emocional y atención especializada. Un lugar creado con amor, compromiso y una mirada integral, donde cada mujer pueda sentirse cuidada, escuchada y acompañada.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild>
                <Link to="/turnos">Agendá con la obstetra</Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/quienes-somos">Conocé al equipo</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DirectorSection;
