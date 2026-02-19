import { useParams, Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { blogPosts } from "@/data/blog";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CalendarDays, Clock } from "lucide-react";

const BlogDetalle = () => {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <Layout>
        <div className="container py-24 text-center">
          <h1 className="text-2xl font-semibold text-foreground mb-4">Artículo no encontrado</h1>
          <Button asChild variant="outline">
            <Link to="/blog">← Volver al blog</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <article className="py-16 md:py-24 bg-background">
        <div className="container max-w-3xl">
          <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-8 transition-colors">
            <ArrowLeft size={16} /> Volver al blog
          </Link>

          <span className="inline-block text-xs font-medium text-primary bg-accent px-3 py-1 rounded-full mb-4">
            {post.category}
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{post.title}</h1>
          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-10">
            <span className="flex items-center gap-1"><CalendarDays size={14} />{new Date(post.date).toLocaleDateString("es-ES")}</span>
            <span className="flex items-center gap-1"><Clock size={14} />{post.readTime}</span>
          </div>

          <div className="prose prose-lg max-w-none text-foreground">
            {post.content.split("\n\n").map((paragraph, i) => {
              if (paragraph.startsWith("## ")) {
                return <h2 key={i} className="text-2xl font-semibold text-foreground mt-8 mb-4 font-serif">{paragraph.replace("## ", "")}</h2>;
              }
              if (paragraph.startsWith("- ")) {
                const items = paragraph.split("\n").filter(Boolean);
                return (
                  <ul key={i} className="list-disc pl-6 space-y-1 text-muted-foreground mb-4">
                    {items.map((item, j) => (
                      <li key={j}>{item.replace("- ", "")}</li>
                    ))}
                  </ul>
                );
              }
              return <p key={i} className="text-muted-foreground leading-relaxed mb-4">{paragraph}</p>;
            })}
          </div>

          <div className="mt-12 pt-8 border-t border-border text-center">
            <p className="text-muted-foreground mb-4">¿Querés saber más? Agendá una consulta con nuestro equipo.</p>
            <Button asChild>
              <Link to="/turnos">Agendar turno</Link>
            </Button>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default BlogDetalle;
