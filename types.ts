import { LucideIcon } from "lucide-react";

export interface ProgramFeature {
  text: string;
}

export interface Course {
  id: string;
  title: string;
  level: string;
  color: string;
  features: string[];
  price: string;
  duration: string;
  isPopular?: boolean;
}

export interface Benefit {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface FaqItem {
  question: string;
  answer: string;
}