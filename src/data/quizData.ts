import jesusSheep from "@/assets/jesus-sheep.jpg";
import jesusBoat from "@/assets/jesus-boat.jpg";
import jesusTemple from "@/assets/jesus-temple.jpg";

export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
}

export interface Stage {
  id: number;
  questions: Question[];
  image: string;
  verse: {
    reference: string;
    text: string;
  };
  buttonText: string;
}

export const quizStages: Stage[] = [
  {
    id: 1,
    questions: [
      {
        id: 1,
        question: "Quando foi a última vez que você orou com calma e atenção?",
        options: [
          "Hoje, de manhã ou à noite.",
          "Nesta semana, mas anda meio correndo.",
          "Faz tempo que não oro; nem lembro a última vez.",
        ],
        correctAnswer: 0,
      },
      {
        id: 2,
        question: "Como você descreve sua relação com a Bíblia / leituras espirituais?",
        options: [
          "Leio/escuto regularmente — faz parte da rotina.",
          "Gosto de ler quando preciso de resposta.",
          "Quase não leio; falta tempo e vontade.",
        ],
        correctAnswer: 0,
      },
      {
        id: 3,
        question: "Você participa de alguma comunidade/igreja/pequeno grupo?",
        options: [
          "Sim — ativo e conectado.",
          "Às vezes vou ou participo online.",
          "Não, ando isolado.",
        ],
        correctAnswer: 0,
      },
    ],
    image: jesusSheep,
    verse: {
      reference: "Salmos 46:10",
      text: "Aquietai-vos e sabei que eu sou Deus.",
    },
    buttonText: "Continuar 🙌",
  },
  {
    id: 2,
    questions: [
      {
        id: 4,
        question: "Quando um problema bate, qual é sua primeira reação?",
        options: [
          "Oro e busco força na fé.",
          "Procuro alguém pra conversar e peço a Deus também.",
          "Tento resolver sozinho ou me afasto.",
        ],
        correctAnswer: 0,
      },
      {
        id: 5,
        question: "Qual é a maior barreira pra você viver mais perto de Deus hoje?",
        options: [
          "Sinto que já tô bem — não vejo problema.",
          "Falta de disciplina na rotina.",
          "Dúvidas / não sei por onde começar.",
        ],
        correctAnswer: 0,
      },
      {
        id: 6,
        question: "O que mais rouba seu tempo espiritual no dia a dia?",
        options: [
          "Não vejo roubo — consigo equilibrar.",
          "Trabalho / correria.",
          "Redes sociais / entretenimento.",
        ],
        correctAnswer: 0,
      },
    ],
    image: jesusBoat,
    verse: {
      reference: "Mateus 11:28",
      text: "Venham a mim, todos os que estão cansados e sobrecarregados, e eu lhes darei descanso.",
    },
    buttonText: "Avançar ✨",
  },
  {
    id: 3,
    questions: [
      {
        id: 7,
        question: "Se eu te desse 5 minutos por dia com um exercício prático, você faria?",
        options: [
          "Sim — já faço coisas parecidas.",
          "Sim, se for simples e direto.",
          "Não sei se vou lembrar/me comprometer.",
        ],
        correctAnswer: 0,
      },
      {
        id: 8,
        question: "O que você mais deseja conseguir espiritualmente nas próximas semanas?",
        options: [
          "Fortalecer a rotina e crescer na fé.",
          "Entender e ter respostas pra dúvidas.",
          "Recomeçar do zero e sentir paz.",
        ],
        correctAnswer: 0,
      },
      {
        id: 9,
        question: "Você está disposto a receber um guia prático (PDF) que te entrega passos diários por 7 dias?",
        options: [
          "Sim — quero fortalecer o que já tenho.",
          "Sim — quero orientação prática.",
          "Sim — preciso de um recomeço estruturado.",
        ],
        correctAnswer: 0,
      },
    ],
    image: jesusTemple,
    verse: {
      reference: "Josué 1:9",
      text: "Seja forte e corajoso! Não se apavore nem desanime, pois o Senhor, o seu Deus, estará com você por onde você andar.",
    },
    buttonText: "Ver Resultado 🎁",
  },
];

export const motivationalMessages = [
  "Você está sendo guiado pela fé 🙏",
  "Deus está contigo em cada resposta ✨",
  "Sua jornada espiritual está começando 🌟",
  "A sabedoria divina ilumina seu caminho 💫",
  "Continue confiando no Senhor 🕊️",
];
