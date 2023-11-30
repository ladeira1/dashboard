import { Button } from "../../../Button"
import { Chart } from "../../../Chart"
import { CardLineVariantProps } from "./CardLineVariant.interface"
import styles from "./CardLineVariant.module.scss"

export const CardLineVariant = ({ series, categories }: CardLineVariantProps) => {
  return (
    <>
      <Chart series={series} categories={categories} />
      <div className={styles.buttonContainer}>
        <Button variant="tertiary" size="extra-small">View More</Button>
      </div>
    </>
  )
}