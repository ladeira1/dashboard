import { CircleProps } from "../../../Circle/Circle.interface";

export type CardActivitiesVariantItem = {
  date: Date;
  title: string;
  subtitle: string;
  tags?: CircleProps[]
}

export interface CardActivitiesVariantProps {
  items: CardActivitiesVariantItem[]
}