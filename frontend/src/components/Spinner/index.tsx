import { SpinnerProps } from "./Spinner.interface"
import styles from "./Spinner.module.scss"

export const Spinner = ({ isLoading }: SpinnerProps) => {
  if(!isLoading) return null;

  return (
    <div className={styles.container}>
      <span className={styles.spinner} />
    </div>
  )
}