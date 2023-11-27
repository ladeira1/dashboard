import { handleClassNames } from "../../utils/handleClassNames"
import { ButtonProps } from "./Button.interface"
import styles from "./Button.module.scss"

export const Button = ({
  variant = "primary",
  type = "button", 
  size = "large",
  onClick,
  className,
  ...rest
 }: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={handleClassNames([styles.button, styles[variant], styles[size], className])}
      {...rest}
    />
  )
}