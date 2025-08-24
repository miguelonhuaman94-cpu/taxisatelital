import auto from "@/assets/airport-transfer-vehicles/auto.webp?url";
import suv from "@/assets/airport-transfer-vehicles/suv.webp?url";
import van from "@/assets/airport-transfer-vehicles/van.webp?url";
import sprinter from "@/assets/airport-transfer-vehicles/sprinter.webp?url";

export const AIRPORT_TRANSFER_VEHICLES = [
  {
    id: "auto",
    name: "Auto",
    description: "Ideal para 1 a 3 personas y maletas pequeñas.",
    image: auto,
    passengers: "1-3 pasajeros",
    luggage: "2 maletas pequeñas",
    features: [
      "Aire acondicionado",
      "WiFi gratuito", 
      "Agua embotellada",
      "Cargador USB",
    ],
    price: "Desde S/. 45/hora",
  },
  {
    id: "suv",
    name: "SUV 3 filas",
    description: "Ideal para 4 personas y maletas grandes.",
    image: suv,
    passengers: "1-4 pasajeros",
    luggage: "4 maletas grandes",
    features: [
      "Cuero premium",
      "Sistema de sonido",
      "Clima dual",
      "Asientos reclinables",
    ],
    price: "Desde S/. 65/hora",
  },
  {
    id: "van",
    name: "Van",
    description: "Ideal para 7 personas y 7 maletas.",
    image: van,
    passengers: "6-7 pasajeros", 
    luggage: "7 maletas grandes",
    features: [
      "Asientos reclinables",
      "Aire acondicionado",
      "Espacio amplio",
      "Entretenimiento",
    ],
    price: "Desde S/. 85/hora",
  },
  {
    id: "sprinter",
    name: "Sprinter",
    description: "Ideal para 13 pasajeros y 13 maletas.",
    image: sprinter,
    passengers: "10-13 pasajeros",
    luggage: "13 maletas grandes",
    features: [
      "Asientos ergonómicos",
      "Aire acondicionado",
      "Compartimento amplio",
      "Sistema de sonido",
    ],
    price: "Desde S/. 120/hora",
  },
]