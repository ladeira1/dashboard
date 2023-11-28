import { formatter } from "../../../../utils/formatter"
import { WidgetVariantValueProps } from "./WidgetValueVariant.interface"
import styles from "./WidgetValueVariant.module.scss"
import colors from "@/styles/variables/colors.module.scss"

export const WidgetValueVariant = ({ items }: WidgetVariantValueProps) => {
  return (
    <li className={styles.container}>
      {items.map(item => (
        <ul key={item.text}>
            <p className="sm medium" style={{
              color: item?.color ? colors[item?.color] : colors["text-secondary"]
            }}>{item.text}</p>
            <h3 className="semibold">{formatter.toNumber(item.amount)}</h3>
        </ul>
      ))}
    </li>
  )
}