import { SelectOption } from "../Select/Select.interface";
import { WidgetProps } from "../Widget/Widget.interface";

export interface WidgetsData {
  title: string;
  widgets: WidgetProps[]
}

export interface Filters {
  period?: SelectOption
  comparedTo?: SelectOption
  frequency?: SelectOption
}