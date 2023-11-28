import { IconType } from "react-icons";

export interface SidebarItemProps {
  icon?: IconType;
  text: string;
  isCurrent?: boolean;
  isCollapsed?: boolean;
  className?: string;
  onClickSubItems?: (title: string) => void;
}