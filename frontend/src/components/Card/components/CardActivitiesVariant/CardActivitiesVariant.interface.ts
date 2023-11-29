import { CircleProps } from "../../../Circle/Circle.interface";

export type CardActivitiesVariantItem = {
  date: string;
  title: string;
  subtitle: string;
  tags?: CircleProps[]
}

export interface CardActivitiesVariantProps {
  items: CardActivitiesVariantItem[]
}