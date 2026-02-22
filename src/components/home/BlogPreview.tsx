import { Link } from "react-router-dom";
import { blogPosts } from "@/data/blog";
import { CalendarDays, Clock } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const BlogPreview = () => {
  const { t, lang } = useLanguage();
  const latest = blogPosts.slice(0, 3);

  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground">
            {t("blog.title")}
          </h2>
          <p className="mt-3 text-muted-foreground">
            {t("blog.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {latest.map((post, i) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="group bg-background rounded-xl border border-border overflow-hidden hover:shadow-lg transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="h-2 bg-primary/20 group-hover:bg-primary transition-colors duration-300" />
              <div className="p-6 space-y-3">
                <span className="inline-block text-xs font-medium text-primary bg-accent px-3 py-1 rounded-full">
                  {post.category}
                </span>
                <h3 className="font-serif text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-4 text-xs text-muted-foreground pt-2">
                  <span className="flex items-center gap-1"><CalendarDays size={12} />{new Date(post.date).toLocaleDateString(lang === "es" ? "es-ES" : "en-US")}</span>
                  <span className="flex items-center gap-1"><Clock size={12} />{post.readTime}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/blog" className="text-primary font-medium hover:underline underline-offset-4">
            {t("blog.view_all")}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
