import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles } from "lucide-react";
import QuizQuestion from "@/components/QuizQuestion";
import StageTransition from "@/components/StageTransition";
import FinalOffer from "@/components/FinalOffer";
import ResultAnalysis from "@/components/ResultAnalysis";
import ProgressBar from "@/components/ProgressBar";
import StartButton from "@/components/StartButton";
import { LiveProofCard } from "@/components/LiveProofCard";
import { quizStages, motivationalMessages } from "@/data/quizData";
import divineSky from "@/assets/divine-sky-background.jpg";

const Quiz = () => {
  const [hasStarted, setHasStarted] = useState(false);
  const [stage, setStage] = useState(1); // 1, 2, or 3
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showTransition, setShowTransition] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [showFinal, setShowFinal] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [answers, setAnswers] = useState<number[]>([]);

  const currentStage = quizStages[stage - 1];
  const currentQuestion = currentStage.questions[currentQuestionIndex];
  const totalQuestions = 9; // 3 stages * 3 questions
  const overallProgress = (stage - 1) * 3 + currentQuestionIndex + 1;
  
  const randomMessage = motivationalMessages[Math.floor(Math.random() * motivationalMessages.length)];

  const handleAnswer = (answer: number) => {
    setSelectedAnswer(answer);
    setAnswers([...answers, answer]);

    setTimeout(() => {
      if (currentQuestionIndex < currentStage.questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setSelectedAnswer(null);
      } else {
        setShowTransition(true);
      }
    }, 500);
  };

  const handleContinue = () => {
    if (stage < 3) {
      setStage(stage + 1);
      setCurrentQuestionIndex(0);
      setShowTransition(false);
      setSelectedAnswer(null);
    } else {
      setShowResult(true);
      setShowTransition(false);
    }
  };

  const handleResultComplete = () => {
    setShowFinal(true);
    setShowResult(false);
  };

  return (
    <div className="min-h-screen py-8 px-4 relative overflow-hidden">
      {/* Divine celestial background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${divineSky})` }}
      />
      {/* Subtle overlay for text clarity */}
      <div className="absolute inset-0 bg-black/10" />
      {!hasStarted && <LiveProofCard />}
      <div className="container max-w-7xl mx-auto relative z-10">
        {!hasStarted && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16 pt-8"
          >
            {/* Main title - Jornada da Fé */}
            <motion.h1 
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-3 leading-tight tracking-tight"
              style={{
                textShadow: '0 4px 20px rgba(0, 0, 0, 0.5), 0 0 40px rgba(255, 255, 255, 0.2)'
              }}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              Jornada da Fé
            </motion.h1>
            
            {/* Subtitle - 7 Dias Caminhando com Deus */}
            <motion.h2 
              className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight tracking-tight"
              style={{
                textShadow: '0 4px 20px rgba(0, 0, 0, 0.5), 0 0 40px rgba(255, 255, 255, 0.2)'
              }}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            >
              7 Dias Caminhando com Deus
            </motion.h2>
            
            {/* Description - Call to Action */}
            <motion.p 
              className="text-xl md:text-2xl lg:text-3xl text-white font-medium max-w-4xl mx-auto leading-relaxed mb-4"
              style={{
                textShadow: '0 2px 15px rgba(0, 0, 0, 0.4)'
              }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            >
              Você está no Caminho da Luz? Faça o teste e receba seu Guia Espiritual de 7 dias{' '}
              <span className="font-bold text-yellow-300" style={{ textShadow: '0 2px 15px rgba(0, 0, 0, 0.5), 0 0 20px rgba(253, 224, 71, 0.4)' }}>
                GRÁTIS!
              </span>
            </motion.p>
            
            {/* Social Proof */}
            <motion.p 
              className="text-base md:text-lg text-white/90 font-normal max-w-3xl mx-auto mb-8"
              style={{
                textShadow: '0 2px 10px rgba(0, 0, 0, 0.4)'
              }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45, ease: "easeOut" }}
            >
              Mais de 12.000 fiéis já aceitaram o desafio. Não fique de fora!
            </motion.p>
          </motion.div>
        )}

        {!hasStarted && (
          <StartButton onStart={() => setHasStarted(true)} />
        )}

        <AnimatePresence mode="wait">
          {hasStarted && !showTransition && !showResult && !showFinal && (
            <motion.div key="quiz" className="space-y-8">
              <ProgressBar current={overallProgress} total={totalQuestions} />
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex items-center justify-center gap-2 text-primary mb-6"
              >
                <Sparkles className="w-5 h-5" />
                <p className="text-base md:text-lg font-medium">{randomMessage}</p>
                <Sparkles className="w-5 h-5" />
              </motion.div>

              <QuizQuestion
                question={currentQuestion}
                onAnswer={handleAnswer}
                selectedAnswer={selectedAnswer}
              />
            </motion.div>
          )}

          {showTransition && !showResult && !showFinal && (
            <StageTransition
              key="transition"
              image={currentStage.image}
              verse={currentStage.verse}
              buttonText={currentStage.buttonText}
              onContinue={handleContinue}
            />
          )}

          {showResult && !showFinal && (
            <ResultAnalysis
              key="result"
              answers={answers}
              onComplete={handleResultComplete}
            />
          )}

          {showFinal && <FinalOffer key="final" />}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Quiz;
