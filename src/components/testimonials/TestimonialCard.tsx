import { Star, Instagram, MessageCircle } from "lucide-react";
import type { Testimonial } from "@/data/testimonials";
import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  testimonial: Testimonial;
  className?: string;
  size?: "compact" | "default";
}

const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

const SourceBadge = ({ source }: { source?: string }) => {
  if (!source) return null;
  return (
    <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground/70">
      {source === "Instagram" && <Instagram size={12} className="text-primary/60" />}
      {source === "Google" && <GoogleIcon />}
      {source}
    </span>
  );
};

const TestimonialCard = ({ testimonial, className, size = "default" }: TestimonialCardProps) => {
  const { variant, name, text, rating, source } = testimonial;

  const isCompact = size === "compact";

  if (variant === "social") {
    return (
      <div className={cn(
        "group relative rounded-2xl border border-border/60 bg-card p-5 transition-all duration-300 hover:shadow-md hover:border-primary/20",
        isCompact && "p-4",
        className
      )}>
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
              <span className="text-xs font-semibold text-secondary-foreground font-body">
                {name.charAt(0)}
              </span>
            </div>
            <span className="text-sm font-medium text-foreground font-body">{name}</span>
          </div>
          <SourceBadge source={source} />
        </div>
        <p className={cn(
          "text-foreground/85 leading-relaxed font-body",
          isCompact ? "text-sm" : "text-[15px]"
        )}>
          {text}
        </p>
      </div>
    );
  }

  if (variant === "message") {
    return (
      <div className={cn(
        "group relative rounded-2xl bg-secondary/50 border border-secondary p-5 transition-all duration-300 hover:shadow-md hover:bg-secondary/70",
        isCompact && "p-4",
        className
      )}>
        <div className="flex items-center gap-2 mb-3">
          <MessageCircle size={14} className="text-primary/50" />
          <span className="text-xs text-muted-foreground/60 font-body">Mensaje de paciente</span>
        </div>
        <p className={cn(
          "text-foreground/85 leading-relaxed italic font-body",
          isCompact ? "text-sm" : "text-[15px]"
        )}>
          "{text}"
        </p>
        <p className="text-sm font-medium text-foreground/70 mt-3 font-body">— {name}</p>
      </div>
    );
  }

  // review variant
  return (
    <div className={cn(
      "group relative rounded-2xl border border-border/60 bg-card p-5 transition-all duration-300 hover:shadow-md hover:border-primary/20",
      isCompact && "p-4",
      className
    )}>
      <div className="flex items-center justify-between mb-3">
        {rating && (
          <div className="flex gap-0.5">
            {Array.from({ length: rating }).map((_, i) => (
              <Star key={i} size={14} className="fill-primary text-primary" />
            ))}
          </div>
        )}
        <SourceBadge source={source} />
      </div>
      <p className={cn(
        "text-foreground/85 leading-relaxed font-body",
        isCompact ? "text-sm" : "text-[15px]"
      )}>
        {text}
      </p>
      <div className="flex items-center gap-2.5 mt-4 pt-3 border-t border-border/40">
        <div className="w-7 h-7 rounded-full bg-secondary flex items-center justify-center">
          <span className="text-[11px] font-semibold text-secondary-foreground font-body">
            {name.charAt(0)}
          </span>
        </div>
        <span className="text-sm font-medium text-foreground/80 font-body">{name}</span>
      </div>
    </div>
  );
};

export default TestimonialCard;
