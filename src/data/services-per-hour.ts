import auto from "@/assets/services-per-hour/auto.webp?url";
import suv from "@/assets/services-per-hour/suv.webp?url";
import van from "@/assets/services-per-hour/van.webp?url";

export const SERVICES_PER_HOUR = [
  {
    id: "auto-per-hour",
    name: "Auto",
    description: "Ideal para individuos o grupos pequeños.",
    image: auto,
  },
  {
    id: "suv-per-hour",
    name: "SUV",
    description: "Perfecto para familias o grupos de hasta 6.",
    image: suv,
  },
  {
    id: "van-per-hour",
    name: "Van",
    description: "Opción espaciosa para grupos más grandes.",
    image: van,
  },
];
