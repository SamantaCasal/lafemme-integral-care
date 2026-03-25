import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import QuienesSomos from "./pages/QuienesSomos";
import Especialidades from "./pages/Especialidades";
import EspecialidadDetalle from "./pages/EspecialidadDetalle";
import Turnos from "./pages/Turnos";
import Testimonios from "./pages/Testimonios";
import FAQ from "./pages/FAQ";
import Contacto from "./pages/Contacto";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
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
          <Route path="/testimonios" element={<Testimonios />} />
          <Route path="/faq" element={<FAQ />} />
          {/* Redirect old blog routes to FAQ */}
          <Route path="/blog" element={<Navigate to="/faq" replace />} />
          <Route path="/blog/:slug" element={<Navigate to="/faq" replace />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
