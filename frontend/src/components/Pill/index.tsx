import { HiChevronDown, HiChevronUp } from "react-icons/hi"
import { Icon } from "../Icon"
import { PillProps } from "./Pill.interface"
import styles from "./Pill.module.scss"
import colors from "@/styles/variables/colors.module.scss"

const iconByStatus = {
  increase: <Icon icon={HiChevronUp} color="success-main" />,
  decrease: <Icon icon={HiChevronDown} color="error-main" />
}

const backgroundColorByStatus = {
  increase: colors["success-lightest"],
  decrease: colors["error-lightest"]
}

const colorByStatus = {
  increase: colors["success-main"],
  decrease: colors["error-main"]
}

export const Pill = ({ status, text, secondText }: PillProps) => {
  return (
    <div className={styles.container} style={{
      backgroundColor: backgroundColorByStatus[status]
    }}>
      <div>
        {iconByStatus[status]}
        <p className="sm medium" style={{
          color: colorByStatus[status],
        }}>
          {text}
        </p>
      </div>

      {!!secondText && (
        <div>
          {iconByStatus[status]}
          <p className="sm medium"style={{
            color: colorByStatus[status]
          }}>
            {secondText}
          </p>
        </div>
      )}
    </div>
  )
}