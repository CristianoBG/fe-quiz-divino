import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User } from "lucide-react";

const testimonials = [
  "Carla de Recife acabou de iniciar o teste.",
  "Marcos de São Paulo recebeu seu guia espiritual.",
  "Ana de Curitiba acabou de completar o teste.",
  "Pedro de Belo Horizonte está descobrindo sua fé.",
  "Maria de Porto Alegre recebeu sua mensagem divina.",
  "João de Salvador acabou de começar o teste."
];

export const LiveProofCard = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        setIsVisible(true);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence mode="wait">
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 20, scale: 0.9 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="bg-white/70 backdrop-blur-sm rounded-xl px-4 py-3 shadow-lg border border-primary/10 max-w-sm"
          >
            <div className="flex items-center gap-3">
              <div className="bg-primary/10 rounded-full p-2 flex-shrink-0">
                <User className="w-4 h-4 text-primary" />
              </div>
              <p className="text-sm text-foreground/90 font-medium">
                👤 {testimonials[currentIndex]}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
