export interface CheckboxProps extends Omit<React.ButtonHTMLAttributes<HTMLInputElement>, "value">  {
  label?: string;
  value: boolean;
}