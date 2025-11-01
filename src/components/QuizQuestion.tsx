import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Question } from "@/data/quizData";

interface QuizQuestionProps {
  question: Question;
  onAnswer: (answer: number) => void;
  selectedAnswer: number | null;
}

const QuizQuestion = ({ question, onAnswer, selectedAnswer }: QuizQuestionProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="w-full max-w-3xl mx-auto"
    >
      <Card className="p-6 md:p-8 shadow-divine bg-card/95 backdrop-blur-sm border-2 border-primary/20">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground mb-6 md:mb-8 text-center leading-relaxed break-words">
          {question.question}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
          {question.options.map((option, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                variant={selectedAnswer === index ? "divine" : "outline"}
                size="lg"
                className="w-full h-auto py-4 md:py-6 px-4 text-sm md:text-base lg:text-lg font-medium text-center whitespace-normal break-words leading-relaxed"
                onClick={() => onAnswer(index)}
              >
                {option}
              </Button>
            </motion.div>
          ))}
        </div>
      </Card>
    </motion.div>
  );
};

export default QuizQuestion;
