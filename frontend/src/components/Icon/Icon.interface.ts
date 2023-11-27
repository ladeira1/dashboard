import { IconBaseProps, IconType } from "react-icons";
import colors from "@/styles/variables/colors.module.scss";

export interface IconProps extends Omit<IconBaseProps, "color"> {
  icon: IconType;
  color: keyof typeof colors;
}