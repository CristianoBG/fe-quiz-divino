import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

interface StartButtonProps {
  onStart: () => void;
}

const StartButton = ({ onStart }: StartButtonProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      className="flex justify-center mb-12"
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        animate={{ 
          y: [0, -10, 0],
        }}
        transition={{
          y: {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }
        }}
      >
        <Button
          variant="divine"
          size="xl"
          onClick={onStart}
          className="gap-3 text-xl px-16 py-8 shadow-divine"
        >
          <Sparkles className="w-6 h-6" />
          COMEÇAR AGORA 🙏✨
          <Sparkles className="w-6 h-6" />
        </Button>
      </motion.div>
    </motion.div>
  );
};

export default StartButton;
