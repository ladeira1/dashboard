import { HiChevronRight } from "react-icons/hi"
import { handleClassNames } from "../../../../utils/handleClassNames"
import { Icon } from "../../../Icon"
import { SidebarItemProps } from "./SidebarItem.interface"
import styles from "./SidebarItem.module.scss"
import { Button } from "../../../Button"

export const SidebarItem = ({ icon, text, isCurrent = false, isCollapsed = false, className, onClickSubItems }: SidebarItemProps) => {
  return (
    <div onClick={() => onClickSubItems?.(text)} className={handleClassNames([styles.container, isCurrent && styles.current, isCollapsed && styles.collapsed, className])}>
      {icon && <Icon icon={icon} color="gray-300" width="18" />}
      {!isCollapsed && <p className="medium lg">{text}</p>}
      {!isCollapsed && !!onClickSubItems && (
        <Button 
          variant="unstyled" 
          size="unstyled" 
          onClick={() => onClickSubItems(text)}
          className={styles.button}>
          <Icon icon={HiChevronRight} color="text-disable" size="18" />
        </Button>
      )}
    </div>
  )
}