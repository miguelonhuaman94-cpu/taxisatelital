import { CreditCard, Smartphone } from "@lucide/astro";
import visa from "@/assets/payment-methods/visa.webp?url";
import mastercard from "@/assets/payment-methods/mastercard.webp?url";
import americanExpress from "@/assets/payment-methods/american-express.webp?url";
import yape from "@/assets/payment-methods/yape.webp?url";
import plin from "@/assets/payment-methods/plin.webp?url";

export const PAYMENT_METHODS = [
  {
    id: "visa",
    name: "Visa",
    image: visa,
    icon: CreditCard,
  },
  {
    id: "mastercard",
    name: "Mastercard",
    image: mastercard,
    icon: CreditCard,
  },
  {
    id: "american-express",
    name: "American Express",
    image: americanExpress,
    icon: CreditCard,
  },
  {
    id: "yape",
    name: "Yape",
    image: yape,
    icon: Smartphone,
  },
  {
    id: "plin",
    name: "Plin",
    image: plin,
    icon: Smartphone,
  },
];
