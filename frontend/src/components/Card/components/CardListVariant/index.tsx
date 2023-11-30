import { HiChevronRight } from "react-icons/hi"
import { Button } from "../../../Button"
import { Icon } from "../../../Icon"
import { Circle } from "../../../Circle"
import { CardListVariantProps } from "./CardListVariant.interface"
import { formatter } from "../../../../utils/formatter"
import { Pill } from "../../../Pill"
import styles from "./CardListVariant.module.scss"

export const CardListVariant = ({ items }: CardListVariantProps) => {
  return (
    <ul className={styles.container}>
      {items?.map((item, index) => (
        <li key={item.title} className={styles.item}>
          <header>
            <Circle value={index + 1} color="text-primary" backgroundColor="primary-lightest" />
            <h5 className="semibold">{item.title}</h5>
            <Button variant="tertiary" size="extra-small">
              View listing <Icon icon={HiChevronRight} color="text-secondary"/>
            </Button>
          </header>

          <ul className={styles.itemListContainer}>
            {item.values.map(value => (
              <li key={value.title}>
                <p className="sm medium">{value.title}</p>
                <div className="row">
                  <h4 className="semibold">{formatter.toCurrency(value.amount)}</h4>
                  <Pill text={formatter.toCompact(value.difference)} status={value.status} />
                </div>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  )
}