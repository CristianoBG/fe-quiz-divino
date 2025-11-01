import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Gift, Share2, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import jesusWelcome from "@/assets/jesus-welcome.jpg";
import giftHeaven from "@/assets/gift-heaven.jpg";
import TestimonialCarousel from "@/components/TestimonialCarousel";

const FinalOffer = () => {
  const navigate = useNavigate();
  const [showRejection, setShowRejection] = useState(false);

  const handleAccept = () => {
    window.location.href = "https://pay.pagueprotegido.shop/checkout?product=7f9351b9-b6d4-11f0-b47c-46da4690ad53";
  };

  const handleReject = () => {
    setShowRejection(true);
  };

  if (showRejection) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-4xl mx-auto"
      >
        <Card className="overflow-hidden shadow-divine border-2 border-primary/20">
          <div className="relative">
            <img
              src={jesusWelcome}
              alt="Jesus Cristo"
              className="w-full h-64 md:h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>

          <div className="p-6 md:p-8 lg:p-12 bg-gradient-heaven text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="px-4"
            >
              <h2 className="text-xl md:text-2xl lg:text-4xl font-bold text-foreground mb-4 md:mb-6 break-words">
                Compartilhe o Evangelho 🌍
              </h2>
              <div className="bg-accent/30 p-4 md:p-6 rounded-2xl mb-4 md:mb-6">
                <p className="text-base md:text-lg lg:text-xl text-foreground italic mb-3 md:mb-4 break-words leading-relaxed">
                  "E disse-lhes: Ide por todo o mundo, pregai o evangelho a toda criatura."
                </p>
                <p className="text-primary font-bold break-words">Marcos 16:15</p>
              </div>
              <p className="text-sm md:text-base lg:text-lg text-muted-foreground break-words leading-relaxed">
                Obrigado por sua participação. Compartilhe a palavra de Deus com o mundo! 🙏
              </p>
              <div className="mt-6 md:mt-8">
                <Button
                  variant="divine"
                  size="xl"
                  onClick={() => navigate("/")}
                  className="gap-2 md:gap-3 h-auto py-3 px-6 whitespace-normal break-words"
                >
                  <Share2 className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
                  <span>Compartilhar Quiz</span>
                </Button>
              </div>
            </motion.div>
          </div>
        </Card>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="w-full max-w-4xl mx-auto"
    >
      <Card className="overflow-hidden shadow-divine border-2 border-primary/20">
        <div className="relative">
          <img
            src={giftHeaven}
            alt="Presente Celestial"
            className="w-full h-80 md:h-[500px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/20 to-transparent" />
        </div>

        <div className="p-6 md:p-8 lg:p-12 bg-gradient-heaven text-center -mt-20 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="px-4"
          >
            <div className="flex justify-center mb-4 md:mb-6">
              <div className="p-3 md:p-4 bg-primary/10 rounded-full">
                <Gift className="w-10 h-10 md:w-12 md:h-12 text-primary" />
              </div>
            </div>

            <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-foreground mb-4 md:mb-6 break-words leading-tight">
              🙌 Parabéns! Sua fé foi colocada à prova — e você venceu!
            </h2>

            <p className="text-base md:text-lg lg:text-xl text-foreground leading-relaxed mb-3 md:mb-4 max-w-2xl mx-auto break-words">
              Você mostrou sabedoria, amor e firmeza espiritual. 💫
            </p>

            <p className="text-sm md:text-base lg:text-lg text-foreground leading-relaxed mb-6 md:mb-8 max-w-2xl mx-auto break-words">
              E por isso, preparamos um presente que vai fortalecer ainda mais sua conexão com Deus.
            </p>

            <TestimonialCarousel />

            <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-foreground mb-4 break-words">
              Você aceita receber seu presente?
            </h3>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-4 md:mb-6">
              <motion.div 
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }}
                animate={{ 
                  boxShadow: [
                    "0 0 20px rgba(74, 222, 128, 0.3)",
                    "0 0 40px rgba(74, 222, 128, 0.5)",
                    "0 0 20px rgba(74, 222, 128, 0.3)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-full sm:w-auto"
              >
                <Button
                  variant="success"
                  size="xl"
                  onClick={handleAccept}
                  className="w-full sm:min-w-[200px] md:min-w-64 gap-2 shadow-divine h-auto py-3 px-4 md:px-6 whitespace-normal break-words text-center"
                >
                  <Gift className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
                  <span>Sim! Quero meu presente abençoado 🎁</span>
                </Button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
                <Button
                  variant="reject"
                  size="xl"
                  onClick={handleReject}
                  className="w-full sm:min-w-[200px] md:min-w-64 gap-2 h-auto py-3 px-4 md:px-6 whitespace-normal break-words"
                >
                  <X className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
                  <span>Não, obrigado</span>
                </Button>
              </motion.div>
            </div>

            <motion.p 
              className="text-xs md:text-sm text-muted-foreground break-words"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Entrega digital imediata ✨ — fortaleça sua fé agora mesmo.
            </motion.p>
          </motion.div>
        </div>
      </Card>
    </motion.div>
  );
};

export default FinalOffer;
