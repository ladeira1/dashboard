import { useId } from "react";
import styles from "./Checkbox.module.scss"
import { CheckboxProps } from "./Checkbox.interface";

export const Checkbox = ({ label, value, onChange, ...rest }: CheckboxProps) => {
  const id = useId()

  return (
    <label htmlFor={id} className={styles.container} aria-checked={value}>
      <input id={id} type="checkbox" value={String(value)} onChange={onChange} {...rest} />
      <p className="lg regular">{label}</p>
    </label>
  )
}