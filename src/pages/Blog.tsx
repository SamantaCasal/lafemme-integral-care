import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { blogPosts, blogCategories } from "@/data/blog";
import { CalendarDays, Clock, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useLanguage } from "@/i18n/LanguageContext";

const Blog = () => {
  const [category, setCategory] = useState("Todas");
  const [search, setSearch] = useState("");
  const { t, lang } = useLanguage();

  const filtered = blogPosts.filter((post) => {
    const matchCat = category === "Todas" || post.category === category;
    const matchSearch = post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <Layout>
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground text-center mb-4">{t("blog.title")}</h1>
          <p className="text-muted-foreground text-center mb-10 max-w-xl mx-auto">
            {t("blog.info_subtitle")}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-between items-center mb-10">
            <div className="flex flex-wrap gap-2">
              {blogCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    category === cat ? "bg-primary text-primary-foreground" : "bg-accent text-accent-foreground hover:bg-primary/10"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            <div className="relative w-full sm:w-64">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder={t("blog.search_placeholder")}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-9"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="group bg-card rounded-xl border border-border overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                <div className="h-2 bg-primary/20 group-hover:bg-primary transition-colors" />
                <div className="p-6 space-y-3">
                  <span className="inline-block text-xs font-medium text-primary bg-accent px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                  <h3 className="font-serif text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground pt-2">
                    <span className="flex items-center gap-1"><CalendarDays size={12} />{new Date(post.date).toLocaleDateString(lang === "es" ? "es-ES" : "en-US")}</span>
                    <span className="flex items-center gap-1"><Clock size={12} />{post.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-muted-foreground py-12">{t("blog.no_results")}</p>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
