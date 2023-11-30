import { useId, useState } from "react";
import { handleClassNames } from "../../utils/handleClassNames";
import styles from "./Input.module.scss"

export interface InputProps {
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
}

export const Input = ({ placeholder, value, onChange }: InputProps) => {
  const id = useId()
  const [isSelected, setIsSelected] = useState(false);

  return (
    <label
      htmlFor={id}
      onFocus={() => setIsSelected(true)}
      onBlur={() => setIsSelected(false)}
      className={handleClassNames([styles.container, isSelected && styles.containerSelected])}
    >
      <input
        id={id}
        type="text"
        placeholder={placeholder}
        autoComplete="off"
        value={value}
        onChange={event => onChange(event.target.value)}
      />
      <p>{placeholder}</p>
    </label>
  )
}