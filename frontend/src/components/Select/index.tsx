"use client"
import SelectComponent, { StylesConfig } from 'react-select'
import { SelectOption, SelectProps } from './Select.interface'
import styles from "./Select.module.scss"
import colors from "@/styles/variables/colors.module.scss"

const stylesConfig: StylesConfig = {
  input: (s) => {
    return {
      ...s,
      borderRadius: "0.25rem",
      borderColor: colors["line-border"],
      cursor: "pointer",
      color: colors["text-secondary"],
    }
  },
  indicatorSeparator: (s) => {
    return {
      display: "none"
    }
  },
  dropdownIndicator: (s) => {
    return {
      ...s,
      color: colors["text-secondary"]
    }
  },
  placeholder: (s) => {
    return {
      ...s,
      color: colors["text-secondary"],
      fontSize: "0.875rem",
      fontWeight: 400
    }
  },
  singleValue: (s) => {
    return {
      ...s,
      color: colors["text-primary"],
      fontSize: "0.875rem",
      fontWeight: 400
    }
  },
  menuList: (s) => {
    return {
      ...s,
      backgroundColor: colors["white"]
    }
  },
  option: (s, state) => {
    return {
      ...s,
      color: colors["text-primary"],
      fontSize: "0.875rem",
      fontWeight: 400,
      backgroundColor: state.isSelected ? colors["gray-200"] : "transparent",
      ":hover": {
        backgroundColor: colors["gray-100"]
      },
    }
  },
}

export const Select = ({ value, onChange, label, placeholder = "", options }: SelectProps) => (
  <label className={styles.container}>
    {label && <p className="medium md">{label}</p>}
    <SelectComponent 
      options={options} 
      placeholder={placeholder} 
      styles={stylesConfig} 
      defaultValue={value}
      onChange={e => onChange?.(e as SelectOption)}
    />
  </label>
)