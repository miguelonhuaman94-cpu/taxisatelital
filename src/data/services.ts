import { Plane, Clock, MapPin, Car, Shield } from "@lucide/astro";
import airportTransferImage from "@/assets/services/airport-transfer.webp?url";
import replacementDriverImage from "@/assets/services/replacement-driver.webp?url"; // Assuming this is the correct path for the replacement driver image
import tourismTripImage from '@/assets/services/tourism-trip.webp?url';
import packageDeliveryImage from '@/assets/services/package-delivery.webp?url';
import schoolTransportImage from '@/assets/services/school-transport.webp?url';
import cargoMovingImage from '@/assets/services/cargo-moving.webp?url';
import hourlyServiceImage from '@/assets/services/hourly-service.webp?url';


export const SERVICES = [
  {
    icon: Plane,
    id: "airport-transfer",
  
    title: "Traslado al aeropuerto",
    description:
      "Servicio confiable y puntual para llegar a tiempo a tu vuelo. Monitoreo de vuelos en tiempo real.",
    image: airportTransferImage,
  },
  {
    icon: Car,
    id: "replacement-driver",
    title: "Chofer de reemplazo",
    description: "Servicio de choferes profesionales para reemplazo temporal.",
    image: replacementDriverImage,
  },
  {
    icon: MapPin,
    id: "tourism-trip",
 
    title: "Viajes turísticos",
    description:
      "Descubre los mejores destinos con nuestros tours personalizados y guías especializados.",
    image: tourismTripImage,
  },
  
  //* Additional Services
   {
    icon: Plane,
    title: "Envio de Paquetes",
    description: "Soluciones de entrega de paquetes rápidas y seguras",
    id: "package-delivery",
    image: packageDeliveryImage,
   
  },
  {
    icon: Car,
    title: "Viajes escolares",
    description: "Transporte seguro y puntual para estudiantes.",
    id: "school-transport",
    image: schoolTransportImage,
  
  },
  {
    icon: Shield,
    title: "Carga y mudanzas",
    description: "Servicios de carga y mudanza eficientes y seguros.",
    id: "cargo-moving",
    image: cargoMovingImage,
  
  },
  {
    icon: Clock,
    id: "hourly-service",
    image: hourlyServiceImage,  
    title: "Servicio por horas",
    description:
      "Disponibilidad total durante el tiempo que necesites. Ideal para reuniones de trabajo y eventos.",

  },
];

