import { IconType } from "react-icons";
import { CardActivitiesVariantProps } from "../../../components/Card/components/CardActivitiesVariant/CardActivitiesVariant.interface";
import { CardBarVariantProps } from "../../../components/Card/components/CardBarVariant/CardBarVariant.interface";
import { CardLineVariantProps } from "../../../components/Card/components/CardLineVariant/CardLineVariant.interface";
import { CardListVariantProps } from "../../../components/Card/components/CardListVariant/CardListVariant.interface";

export type CardVariant = 
  { name: "bar", props: CardBarVariantProps } |
  { name: "line", props : CardLineVariantProps } | 
  { name: "list", props: CardListVariantProps } | 
  { name: "activities", props: CardActivitiesVariantProps };

export interface Card {
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

export interface Serie {
  text: string;
  legend: string;
  goal: number;
  current: number;
}

export interface CardState {
  isLoading: boolean
  cards: Card[]
  series: Serie[]
  goals: Record<string, number>
}