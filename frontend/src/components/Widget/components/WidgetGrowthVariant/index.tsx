import { WidgetVariantGrowthProps } from "./WidgetGrowthVariant.interface";
import styles from "./WidgetGrowthVariant.module.scss"
import { Icon } from "../../../Icon";
import { Button } from "../../../Button";
import { formatter } from "../../../../utils/formatter";
import { Pill } from "../../../Pill";

export const WidgetGrowthVariant = ({
  amount,
  status,
  difference,
  percentage,
  button
}: WidgetVariantGrowthProps) => {
  return (
    <div className={styles.container}>
      <h2 className="semibold">{formatter.toNumber(amount)}</h2>
      <footer>
        <Pill 
          status={status}
          text={formatter.toCompact(difference)} 
          secondText={formatter.toPercentage(percentage)} 
        />

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