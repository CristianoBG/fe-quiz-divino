import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BookOpen } from "lucide-react";

interface StageTransitionProps {
  image: string;
  verse: {
    reference: string;
    text: string;
  };
  buttonText: string;
  onContinue: () => void;
}

const StageTransition = ({ image, verse, buttonText, onContinue }: StageTransitionProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-4xl mx-auto"
    >
      <Card className="overflow-hidden shadow-divine border-2 border-primary/20">
        <div className="relative">
          <img
            src={image}
            alt="Jesus Cristo"
            className="w-full h-64 md:h-96 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>

        <div className="p-6 md:p-8 lg:p-12 bg-gradient-heaven">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-start gap-3 md:gap-4 mb-6"
          >
            <div className="p-2 md:p-3 bg-primary/10 rounded-full flex-shrink-0">
              <BookOpen className="w-5 h-5 md:w-6 md:h-6 text-primary" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-base md:text-lg font-bold text-primary mb-2 break-words">
                {verse.reference}
              </h3>
              <p className="text-base md:text-lg lg:text-xl text-foreground leading-relaxed italic break-words">
                "{verse.text}"
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex justify-center mt-6 md:mt-8"
          >
            <Button
              variant="divine"
              size="xl"
              onClick={onContinue}
              className="min-w-[200px] md:min-w-64 whitespace-normal h-auto py-3 px-6 text-center break-words"
            >
              {buttonText}
            </Button>
          </motion.div>
        </div>
      </Card>
    </motion.div>
  );
};

export default StageTransition;
