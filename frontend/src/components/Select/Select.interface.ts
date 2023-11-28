export type SelectOption = {
  label: string;
  value: string;
}

export interface SelectProps {
  label?: string
  placeholder?: string;
  options: SelectOption[]
  value?: SelectOption
  onChange?: (option: SelectOption) => void
}