import pistaComum from '../assets/Images/pistacomum.webp';
import pistaPremium from '../assets/Images/pistapremium.webp';
import cadeiras from '../assets/Images/cadeiras.webp';

export const locais = [
  {
    id: "1",
    setorImg: pistaComum,
    local: "Pista",
    desc: "Pista convencional, atendida pelos bares e banheiros das laterais do estádio. Espaço amplo, com local para sentar e descansar. Separada da pista premium por uma grade.",
    marginTop: "0"
  },
  {
    id: "2",
    setorImg: pistaPremium,
    local: "Pista Premium",
    desc: "Pista mais próxima do palco, com acesso muito próximo a banheiros e bares num raio de 100m. Todas as pessoas idosas e/ou com deficiência têm direito a acesso gratuito a essa área.",
    marginTop: "120px"
  },
  {
    id: "3",
    setorImg: cadeiras,
    local: "Cadeiras",
    desc: "Opção de cadeiras térreas ou elevadas. Acesso próximo a banheiros e bares, visão um pouco elevada em relação às pistas.",
    marginTop: "0"
  },
]