export interface WidgetsData {
  title: string;
  widgets: WidgetResponse[]
}

export interface WidgetResponse {
  id: number;
  icon: string;
  title: string;
  variant: WidgetVariants
}

export type WidgetVariants = {
  name: "growth",
  props: WidgetVariantGrowthProps 
} | {
  name: "value",
  props: WidgetVariantValueProps
}

export interface WidgetVariantGrowthProps {
  amount: number;
  status: "increase" | "decrease";
  difference: number;
  percentage: number;
  button?: {
    text: string;
    icon?: string;
    onClick?: () => void;
  }
}

export interface WidgetVariantValueProps {
  items: {
    text: string;
    amount: number;
    color?: string;
  }[]
}