import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { BookableService, BookingFormData, BOOKING_CATEGORIES } from "@/types/booking";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Clock, Check } from "lucide-react";

interface Props {
  form: BookingFormData;
  updateForm: (u: Partial<BookingFormData>) => void;
  onNext: () => void;
}

const formatPrice = (g: number) => `Gs. ${g.toLocaleString("es-PY")}`;

const catLabels: Record<string, string> = {
  all: "Todos",
  embarazo: "Embarazo",
  posparto: "Posparto",
  lactancia: "Lactancia",
  reeducacion: "Reeducación",
  "spa-terapias": "Spa / Terapias",
  nutricion: "Nutrición",
  psicologia: "Psicología",
};

const StepServiceSelect = ({ form, updateForm, onNext }: Props) => {
  const [services, setServices] = useState<BookableService[]>([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState("all");
  const [search, setSearch] = useState("");

  useEffect(() => {
    const load = async () => {
      const { data } = await supabase
        .from("bookable_services")
        .select("*")
        .eq("is_active", true)
        .order("sort_order");
      setServices((data as BookableService[]) || []);
      setLoading(false);
    };
    load();
  }, []);

  const filtered = services.filter((s) => {
    const matchCat = category === "all" || s.category === category;
    const matchSearch =
      !search ||
      s.name_es.toLowerCase().includes(search.toLowerCase()) ||
      s.description_es.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div>
      <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-2">
        Elegí tu servicio
      </h2>
      <p className="text-muted-foreground mb-6">Seleccioná la especialidad que necesitás.</p>

      <div className="relative mb-4">
        <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
        <Input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Buscar servicio..." className="pl-9" />
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        {BOOKING_CATEGORIES.map((cat) => (
          <button
            key={cat.value}
            onClick={() => setCategory(cat.value)}
            className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
              category === cat.value
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground hover:bg-accent"
            }`}
          >
            {catLabels[cat.value] || cat.labelKey}
          </button>
        ))}
      </div>

      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="h-36 rounded-xl bg-muted animate-pulse" />
          ))}
        </div>
      ) : filtered.length === 0 ? (
        <p className="text-muted-foreground text-center py-8">No se encontraron servicios.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filtered.map((service) => {
            const selected = form.service?.id === service.id;
            return (
              <button
                key={service.id}
                onClick={() => updateForm({ service, professional: null, date: null, time: null })}
                className={`text-left p-4 rounded-xl border transition-all ${
                  selected
                    ? "border-primary bg-primary/5 ring-2 ring-primary/20"
                    : "border-border bg-card hover:border-primary/30 hover:shadow-sm"
                }`}
              >
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-semibold text-foreground text-sm leading-tight">{service.name_es}</h3>
                  {selected && <Check size={18} className="text-primary shrink-0" />}
                </div>
                <p className="text-muted-foreground text-xs mt-1 line-clamp-2">{service.description_es}</p>
                <div className="flex items-center justify-between mt-3">
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock size={12} />
                    <span>{service.duration_minutes} min</span>
                    <span className="mx-1">·</span>
                    <span className="capitalize">{service.modality}</span>
                  </div>
                  <span className="text-sm font-bold text-primary">{formatPrice(service.price_guaranies)}</span>
                </div>
              </button>
            );
          })}
        </div>
      )}

      <div className="flex justify-end mt-6">
        <Button onClick={onNext} disabled={!form.service} size="lg">Continuar</Button>
      </div>
    </div>
  );
};

export default StepServiceSelect;
