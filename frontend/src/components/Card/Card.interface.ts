import { IconType } from "react-icons";
import { CardBarVariantProps } from "./components/CardBarVariant/CardBarVariant.interface";
import { CardLineVariantProps } from "./components/CardLineVariant/CardLineVariant.interface";
import { CardListVariantProps } from "./components/CardListVariant/CardListVariant.interface";
import { CardActivitiesVariantProps } from "./components/CardActivitiesVariant/CardActivitiesVariant.interface";

export type CardVariant = 
  { name: "bar", props: CardBarVariantProps } |
  { name: "line", props : CardLineVariantProps } | 
  { name: "list", props: CardListVariantProps } | 
  { name: "activities", props: CardActivitiesVariantProps };

export interface CardProps {
  title: string;
  difference?: number;
  status?: "increase" | "decrease";
  button?: {
    text: string;
    icon?: IconType;
    onClick: () => void;
  };
  support?: {
    amount: number;
    text: string;
  };
  variant: CardVariant
}