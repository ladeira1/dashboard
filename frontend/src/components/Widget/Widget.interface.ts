import { WidgetVariantValueProps } from "./components/WidgetValueVariant/WidgetValueVariant.interface";
import { WidgetVariantGrowthProps } from "./components/WidgetGrowthVariant/WidgetGrowthVariant.interface";
import { Widget } from "../../lib/features/widget/widgetSlice.interface";

export type WidgetVariants = {
  name: "growth",
  props: WidgetVariantGrowthProps 
} | {
  name: "value",
  props: WidgetVariantValueProps
}

export type WidgetProps = Widget