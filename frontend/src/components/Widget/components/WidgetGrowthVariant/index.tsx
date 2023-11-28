import { HiChevronDown, HiChevronUp } from "react-icons/hi";
import { WidgetVariantGrowthProps } from "./WidgetGrowthVariant.interface";
import styles from "./WidgetGrowthVariant.module.scss"
import { Icon } from "../../../Icon";
import { Button } from "../../../Button";
import colors from "@/styles/variables/colors.module.scss"
import { formatter } from "../../../../utils/formatter";

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

export const WidgetGrowthVariant = ({
  amount,
  status,
  difference,
  percentage,
  button
}: WidgetVariantGrowthProps) => {
  const IconComponent = iconByStatus[status]

  return (
    <div className={styles.container}>
      <h2 className="semibold">{formatter.toNumber(amount)}</h2>
      <footer>
        <div className={styles.valuesContainer} style={{
          backgroundColor: backgroundColorByStatus[status]
        }}>
          <div>
            {IconComponent}
            <p className="sm medium" style={{
              color: colorByStatus[status]
            }}>
              {formatter.toCompact(difference)}
            </p>
          </div>

          <div>
            {IconComponent}
            <p className="sm medium"style={{
              color: colorByStatus[status]
            }}>
              {formatter.toPercentage(percentage)}
            </p>
          </div>
        </div>

        {!!button && (
          <Button variant="tertiary" size="extra-small" onClick={button?.onClick}>
            {button?.text}
            {button?.icon && <Icon icon={button.icon} color="text-secondary" />}
          </Button>
        )}
      </footer>
    </div>
  )
}