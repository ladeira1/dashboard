import { PillStatus } from "../../../Pill/Pill.interface";

export type CardListVariantItemValue = {
  title: string;
  amount: number;
  difference: number;
  status: PillStatus
}

export type CardListVariantItem = {
  title: string;
  values: CardListVariantItemValue[]
}

export interface CardListVariantProps {
  items: CardListVariantItem[]
}