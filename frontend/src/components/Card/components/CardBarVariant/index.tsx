import { formatter } from "../../../../utils/formatter"
import { handleClassNames } from "../../../../utils/handleClassNames"
import { CardBarVariantProps } from "./CardBarVariant.interface"
import styles from "./CardbarVariant.module.scss"

export const CardBarVariant = ({ series }: CardBarVariantProps) => {
  return (
    <div className="center" style={{ height: "100%"}}>
      <ul className={styles.container}>
        {series?.map(item => (
          <li key={item.text}>
            <div className="column">
              <p className="md medium">{item.text}</p>
              <p className="md medium">{item.legend}</p>
            </div>

            <div className={styles.bar}>
              <div style={{
                transform: `scaleX(${item.current / item.goal})`
              }} />
            </div>

            <p className={handleClassNames(["md regular", styles.textPrimary])}>{formatter.toPercentage(item.current * 100 / item.goal)}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}