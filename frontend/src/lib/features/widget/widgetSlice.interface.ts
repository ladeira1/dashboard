import { IconType } from "react-icons";
import { WidgetVariants } from "../../../components/Widget/Widget.interface";

export interface Widget {
  icon: IconType;
  title: string;
  variant: WidgetVariants
}

export interface WidgetState {
  widgetsData: {
    title: string;
    widgets: Widget[];
  };
  shownItems: string[];
  filters: string[];
  isLoading: boolean;
}