import { SelectOption } from "../../../Select/Select.interface";

export interface HeaderItemProps {
  options: SelectOption[]
  value: SelectOption;
  onChange: (v: SelectOption) => void; 
}