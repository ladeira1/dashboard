import { formatter } from "../../../../utils/formatter"
import { handleClassNames } from "../../../../utils/handleClassNames"
import { Circle } from "../../../Circle"
import { CardActivitiesVariantProps } from "./CardActivitiesVariant.interface"
import styles from "./CardActivitiesVariant.module.scss"

export const CardActiviesVariant = ({ items }: CardActivitiesVariantProps) => {
  return (
    <ul className={styles.container}>
      {items?.map(item => (
        <li key={item.title}>
          <p className="sm regular">{formatter.toCompactDate(item.date)}</p>
          <div className={styles.divider}>
            <div className={styles.circle}/>
            <div className={styles.line}/>
          </div>
          <div className={styles.textContainer}>
            <p className="md semibold">{item.title}</p>
            <p className={handleClassNames(["sm regular", styles.subtitle])}>{item.subtitle}</p>

            <ul>
              {item.tags?.map(value => (
                <li key={value.value}>
                  <Circle value={value.value} color={value.color} backgroundColor={value.backgroundColor} />
                </li>
              ))}
            </ul>
          </div>
        </li>
      ))}
    </ul>
  )
}