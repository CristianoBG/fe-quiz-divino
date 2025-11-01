import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download, Heart, Share2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import jesusWelcome from "@/assets/jesus-welcome.jpg";

const Thanks = () => {
  const navigate = useNavigate();

  const handleDownload = () => {
    window.open("https://drive.google.com/file/d/1ppWqQzmzu1Wc-qb-jyEf__CkTcRvoILS/view?usp=drive_link", "_blank");
  };

  const handleShare = () => {
    const shareUrl = "https://renove.site";
    if (navigator.share) {
      navigator.share({
        title: "Jornada da Fé - 7 Dias Caminhando com Deus",
        text: "Faça o teste e receba seu Guia Espiritual de 7 dias GRÁTIS!",
        url: shareUrl,
      });
    } else {
      navigator.clipboard.writeText(shareUrl);
      alert("Link copiado para a área de transferência!");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-heaven py-12 px-4">
      <div className="container max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="overflow-hidden shadow-divine border-2 border-primary/20">
            <div className="relative">
              <img
                src={jesusWelcome}
                alt="Jesus Cristo"
                className="w-full h-64 md:h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-8 left-0 right-0 text-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
                    Que Deus abençoe sua jornada! 🙏
                  </h1>
                </motion.div>
              </div>
            </div>

            <div className="p-8 md:p-12 bg-gradient-heaven">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-center space-y-6"
              >
                <div className="flex justify-center">
                  <div className="p-4 bg-success/10 rounded-full">
                    <Heart className="w-12 h-12 text-success" />
                  </div>
                </div>

                <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                  Obrigado por sua Fé! ✨
                </h2>

                <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  Sua contribuição ajuda a espalhar a palavra de Deus. 
                  Agora você pode baixar seu guia espiritual e começar uma nova jornada de fé.
                </p>

                <div className="bg-accent/30 p-6 rounded-2xl max-w-xl mx-auto">
                  <p className="text-lg text-foreground italic mb-3">
                    "Bem-aventurados os que não viram e creram."
                  </p>
                  <p className="text-primary font-bold">João 20:29</p>
                </div>

                <div className="pt-6 space-y-4">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      variant="divine"
                      size="xl"
                      onClick={handleDownload}
                      className="w-full md:w-auto min-w-80 gap-3"
                    >
                      <Download className="w-5 h-5" />
                      Baixar Guia em PDF
                    </Button>
                  </motion.div>

                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <Button
                      variant="outline"
                      size="lg"
                      onClick={() => navigate("/")}
                      className="gap-2"
                    >
                      Refazer Quiz
                    </Button>
                    <Button
                      variant="outline"
                      size="lg"
                      onClick={handleShare}
                      className="gap-2"
                    >
                      <Share2 className="w-4 h-4" />
                      Compartilhar
                    </Button>
                  </div>
                </div>

                <div className="pt-8 border-t border-border">
                  <p className="text-sm text-muted-foreground">
                    Que a paz do Senhor esteja sempre com você 🕊️
                  </p>
                </div>
              </motion.div>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default Thanks;
