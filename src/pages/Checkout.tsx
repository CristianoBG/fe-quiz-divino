import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Gift, FileText, Check } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const navigate = useNavigate();

  const handleComplete = () => {
    navigate("/thanks");
  };

  return (
    <div className="min-h-screen bg-gradient-heaven py-12 px-4">
      <div className="container max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Seu Presente Espiritual 🎁
            </h1>
            <p className="text-lg text-muted-foreground">
              Complete sua jornada de fé com este guia especial
            </p>
          </div>

          <Card className="p-8 md:p-12 shadow-divine border-2 border-primary/20">
            <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Gift className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-foreground mb-2">
                      eBook: Guia da Palavra
                    </h2>
                    <p className="text-muted-foreground">
                      Um guia completo para aprofundar sua jornada espiritual e conexão com Deus
                    </p>
                  </div>
                </div>

                <div className="bg-accent/30 p-6 rounded-2xl space-y-4">
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-success" />
                    <span className="text-foreground">Versículos comentados</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-success" />
                    <span className="text-foreground">Reflexões diárias</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-success" />
                    <span className="text-foreground">Orações poderosas</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-success" />
                    <span className="text-foreground">Formato PDF para leitura offline</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-divine p-8 rounded-3xl text-center">
                <FileText className="w-24 h-24 text-primary-foreground mx-auto mb-4" />
                <p className="text-primary-foreground text-lg font-medium mb-2">
                  Acesso Completo
                </p>
                <div className="text-5xl font-bold text-primary-foreground mb-4">
                  R$ 9,99
                </div>
                <p className="text-primary-foreground/80 text-sm">
                  Contribuição simbólica única
                </p>
              </div>
            </div>

            <div className="bg-secondary/50 p-6 rounded-2xl mb-8">
              <h3 className="font-semibold text-foreground mb-4 text-lg">
                💳 Informações de Pagamento
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                Esta é uma página de demonstração. Adicione aqui sua integração de pagamento preferida.
              </p>
              <div className="space-y-3">
                <div className="p-4 bg-card rounded-lg border border-border">
                  <p className="text-sm text-muted-foreground">
                    Insira aqui seu sistema de checkout (Stripe, PayPal, etc.)
                  </p>
                </div>
              </div>
            </div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex justify-center"
            >
              <Button
                variant="divine"
                size="xl"
                onClick={handleComplete}
                className="w-full md:w-auto min-w-80"
              >
                <Gift className="w-5 h-5 mr-2" />
                Concluir e Receber Presente
              </Button>
            </motion.div>

            <p className="text-center text-xs text-muted-foreground mt-6">
              🔒 Pagamento 100% seguro e criptografado
            </p>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default Checkout;
