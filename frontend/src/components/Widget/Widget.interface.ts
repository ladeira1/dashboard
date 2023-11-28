import { IconType } from "react-icons";
import { WidgetVariantValueProps } from "./components/WidgetValueVariant/WidgetValueVariant.interface";
import { WidgetVariantGrowthProps } from "./components/WidgetGrowthVariant/WidgetGrowthVariant.interface";

export type WidgetVariants = {
  name: "growth",
  props: WidgetVariantGrowthProps 
} | {
  name: "value",
  props: WidgetVariantValueProps
}

export interface WidgetProps {
  icon: IconType;
  title: string;
  variant: WidgetVariants
}