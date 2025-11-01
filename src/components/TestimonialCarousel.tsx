import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";
import testimonial3 from "@/assets/testimonial-3.jpg";
import testimonial4 from "@/assets/testimonial-4.jpg";
import testimonial5 from "@/assets/testimonial-5.jpg";

const testimonials = [
  {
    id: 1,
    name: "Maria S.",
    image: testimonial1,
    message: "Fiz o quiz achando que era brincadeira… mas o presente que recebi tocou meu coração. Obrigado por isso!"
  },
  {
    id: 2,
    name: "João P.",
    image: testimonial2,
    message: "Nunca pensei que um quiz pudesse fortalecer tanto minha fé. O presente veio na hora certa!"
  },
  {
    id: 3,
    name: "Ana M.",
    image: testimonial3,
    message: "Maravilhoso! Compartilhei com toda minha família. O material é uma bênção divina! 🙏"
  },
  {
    id: 4,
    name: "Pedro L.",
    image: testimonial4,
    message: "Esse presente mudou minha forma de ler a Bíblia. Recomendo para todos os irmãos!"
  },
  {
    id: 5,
    name: "Carla R.",
    image: testimonial5,
    message: "Que surpresa abençoada! O conteúdo é rico e edificante. Valeu cada segundo do quiz! ✨"
  }
];

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const current = testimonials[currentIndex];

  return (
    <div className="bg-primary/5 border-l-4 border-primary p-4 md:p-6 rounded-lg mb-8 max-w-2xl mx-auto min-h-[120px] flex items-center">
      <AnimatePresence mode="wait">
        <motion.div
          key={current.id}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.5 }}
          className="flex items-start gap-4 w-full"
        >
          <img
            src={current.image}
            alt={current.name}
            className="w-12 h-12 md:w-16 md:h-16 rounded-full object-cover flex-shrink-0 border-2 border-primary/30"
          />
          <div className="flex-1">
            <p className="text-sm md:text-base text-muted-foreground italic mb-2">
              💬 "{current.message}"
            </p>
            <p className="text-sm font-semibold text-foreground">
              — {current.name}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default TestimonialCarousel;
