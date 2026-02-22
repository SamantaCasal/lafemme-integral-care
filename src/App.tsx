import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/i18n/LanguageContext";
import Index from "./pages/Index";
import QuienesSomos from "./pages/QuienesSomos";
import Especialidades from "./pages/Especialidades";
import EspecialidadDetalle from "./pages/EspecialidadDetalle";
import Turnos from "./pages/Turnos";
import Blog from "./pages/Blog";
import BlogDetalle from "./pages/BlogDetalle";
import Testimonios from "./pages/Testimonios";
import FAQ from "./pages/FAQ";
import Contacto from "./pages/Contacto";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/quienes-somos" element={<QuienesSomos />} />
            <Route path="/especialidades" element={<Especialidades />} />
            <Route path="/especialidades/:slug" element={<EspecialidadDetalle />} />
            <Route path="/turnos" element={<Turnos />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogDetalle />} />
            <Route path="/testimonios" element={<Testimonios />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
