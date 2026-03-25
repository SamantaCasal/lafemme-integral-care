import { useState, useMemo } from "react";
import Layout from "@/components/layout/Layout";
import { faqItems, faqCategories } from "@/data/faq";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("Todas");

  const filtered = useMemo(() => {
    const q = search.toLowerCase().trim();
    return faqItems.filter((item) => {
      const matchesCategory = activeCategory === "Todas" || item.category === activeCategory;
      const matchesSearch =
        !q ||
        item.question.toLowerCase().includes(q) ||
        item.answer.toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [search, activeCategory]);

  return (
    <Layout>
      <section className="py-16 md:py-24 bg-background">
        <div className="container max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground text-center mb-4">
            Preguntas frecuentes
          </h1>
          <p className="text-muted-foreground text-center mb-10">
            Encontrá respuestas a las consultas más comunes sobre nuestros servicios.
          </p>

          {/* Search */}
          <div className="relative mb-6">
            <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Buscar por palabra clave…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10"
            />
          </div>

          {/* Category chips */}
          <div className="flex flex-wrap gap-2 mb-10">
            {faqCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Results */}
          {filtered.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No encontramos resultados. Probá con otra búsqueda o categoría.</p>
            </div>
          ) : (
            <Accordion type="single" collapsible className="space-y-3">
              {filtered.map((item, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  className="bg-card border border-border rounded-xl px-6 data-[state=open]:shadow-md transition-shadow"
                >
                  <AccordionTrigger className="text-left font-medium text-foreground hover:text-primary py-5">
                    <div className="flex flex-col gap-1">
                      <span>{item.question}</span>
                      <span className="text-xs font-normal text-primary/70">{item.category}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-5 whitespace-pre-line">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default FAQ;
