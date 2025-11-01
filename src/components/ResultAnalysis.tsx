import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";
import { BookOpen } from "lucide-react";

interface ResultAnalysisProps {
  answers: number[];
  onComplete: () => void;
}

const ResultAnalysis = ({ answers, onComplete }: ResultAnalysisProps) => {
  const [showLoading, setShowLoading] = useState(true);
  const [showResult, setShowResult] = useState(false);
  const [profile, setProfile] = useState<"REACENDEDOR" | "BUSCADOR" | "RECOMEÇO">("REACENDEDOR");

  useEffect(() => {
    // Calcular o perfil baseado nas respostas
    const answerCounts = answers.reduce(
      (acc, answer) => {
        if (answer === 0) acc.reacendedor++;
        else if (answer === 1) acc.buscador++;
        else if (answer === 2) acc.recomeco++;
        return acc;
      },
      { reacendedor: 0, buscador: 0, recomeco: 0 }
    );

    const maxCount = Math.max(answerCounts.reacendedor, answerCounts.buscador, answerCounts.recomeco);
    
    if (answerCounts.reacendedor === maxCount) {
      setProfile("REACENDEDOR");
    } else if (answerCounts.buscador === maxCount) {
      setProfile("BUSCADOR");
    } else {
      setProfile("RECOMEÇO");
    }

    // Mostrar loading por 3 segundos
    const loadingTimer = setTimeout(() => {
      setShowLoading(false);
      setShowResult(true);
    }, 3000);

    // Mostrar resultado por 4 segundos e depois avançar
    const resultTimer = setTimeout(() => {
      onComplete();
    }, 7000);

    return () => {
      clearTimeout(loadingTimer);
      clearTimeout(resultTimer);
    };
  }, [answers, onComplete]);

  const resultMessages = {
    REACENDEDOR: "Você tá com a chama acesa — só falta organizar a rotina. O guia 'Caminho da Luz — 7 Dias com Deus' plugará exercícios rápidos pra você manter a fé na prática. Peça sua cópia física grátis (só paga o frete) e receba a versão digital agora por e-mail.",
    BUSCADOR: "Você tem sede de direção. O guia vai te dar passos práticos e leituras guiadas pra clarear dúvidas e criar hábito. Peça seu exemplar físico grátis — só o frete — e baixe já a versão digital por e-mail.",
    RECOMEÇO: "Tá na hora do recomeço — e tá tudo bem. Esse guia de 7 dias foi feito pra quem precisa de um começo seguro e mão na massa. Peça a cópia física grátis (só frete) e garanta a versão digital imediata."
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="w-full max-w-4xl mx-auto"
    >
      <Card className="overflow-hidden shadow-divine border-2 border-primary/20">
        <div className="p-6 md:p-8 lg:p-12 bg-gradient-heaven text-center min-h-[400px] md:min-h-[500px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            {showLoading && (
              <motion.div
                key="loading"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="flex flex-col items-center gap-6 px-4"
              >
                <motion.div
                  animate={{
                    rotateY: [0, 180, 360],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="relative"
                >
                  <BookOpen className="w-16 h-16 md:w-24 md:h-24 text-primary" />
                </motion.div>
                
                <motion.div
                  animate={{
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <p className="text-xl md:text-2xl lg:text-3xl font-semibold text-foreground">
                    Carregando resposta...
                  </p>
                </motion.div>
              </motion.div>
            )}

            {showResult && (
              <motion.div
                key="result"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="space-y-4 md:space-y-6 max-w-2xl px-4 w-full"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", duration: 0.6 }}
                  className="inline-block p-3 md:p-4 bg-primary/10 rounded-full mb-2 md:mb-4"
                >
                  <BookOpen className="w-12 h-12 md:w-16 md:h-16 text-primary" />
                </motion.div>

                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3 md:mb-4 break-words">
                  Resultado: {profile}
                </h2>

                <div className="bg-accent/30 p-4 md:p-6 rounded-2xl">
                  <p className="text-base md:text-lg lg:text-xl text-foreground leading-relaxed break-words">
                    {resultMessages[profile]}
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </Card>
    </motion.div>
  );
};

export default ResultAnalysis;
