import { Award, Clock, Heart, Shield, Star, Users } from "@lucide/astro";

export const VALUES = [
  {
    icon: Heart,
    title: "Compromiso",
    description:
      "Nos comprometemos a brindar el mejor servicio de transporte con atención personalizada y profesional en cada viaje.",

    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Clock,
    title: "Puntualidad",
    description:
      "La puntualidad es nuestra prioridad. Llegamos siempre a tiempo para que no te preocupes por retrasos o contratiempos.",

    color: "from-green-500 to-green-600",
  },
  {
    icon: Shield,
    title: "Seguridad",
    description:
      "Tu seguridad es fundamental. Contamos con vehículos equipados con tecnología de seguridad y conductores especializados.",
    color: "from-red-500 to-red-600",
  },

  //* Additional Values
   {
    icon: Award,
    title: "Calidad",
    description:
      "Ofrecemos servicios de alta calidad con vehículos modernos y cómodos para tu comodidad.",
  },
  {
    icon: Users,
    title: "Experiencia",
    description:
      "Más de 10 años brindando servicios de transporte confiable en toda la región.",
  },
  {
    icon: Star,
    title: "Excelencia",
    description:
      "Buscamos la excelencia en cada servicio, superando las expectativas de nuestros clientes.",
  },
];

export const STATS = [
  { number: "25+", label: "Años de experiencia" },
  { number: "5000+", label: "Clientes satisfechos" },
  { number: "500+", label: "Vehículos disponibles" },
  { number: "99%", label: "Puntualidad garantizada" },
];
