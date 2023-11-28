import { IconType } from "react-icons";

export interface WidgetVariantGrowthProps {
  amount: number;
  status: "increase" | "decrease";
  difference: number;
  percentage: number;
  button?: {
    text: string;
    icon?: IconType;
    onClick: () => void;
  }
}