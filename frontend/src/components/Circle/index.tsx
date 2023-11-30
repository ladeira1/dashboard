import { CircleProps } from "./Circle.interface";
import styles from "./Circle.module.scss"
import colors from "@/styles/variables/colors.module.scss"

export const Circle = ({ value, color, backgroundColor }: CircleProps) => {
  return (
    <div className={styles.container} style={{ backgroundColor: colors[backgroundColor] }}>
      <span style={{ color: colors[color] }}>{value}</span>
    </div>
  )
}