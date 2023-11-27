import { IconProps } from "./Icon.interface";
import colors from "@/styles/variables/colors.module.scss";

export const Icon = ({
  icon,
  color = "primary-dark",
  ...rest
}: IconProps) => {
  return icon({ ...rest, color: colors[color] })
}