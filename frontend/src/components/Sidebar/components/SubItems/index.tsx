import Link from "next/link";
import { SidebarItem } from "../SidebarItem";
import { SubItemsProps } from "./SubItems.interface";
import styles from "./Subitems.module.scss"
import { handleClassNames } from "../../../../utils/handleClassNames";

export const SubItems = ({ name, items, isCollapsed }: SubItemsProps) => {
  return (
    <div className={handleClassNames([styles.container, isCollapsed && styles.collapsed])}>
      <h5 className="semibold">{name}</h5>
      <ul>
        {items.map(item => (
          <li key={item}>
            <Link href={`/${name.toLowerCase()}/${item.toLowerCase()}`}>
              <SidebarItem text={item} className={styles.sidebar} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}