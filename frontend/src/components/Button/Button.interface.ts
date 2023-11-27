export type ButtonVariants = "primary" | "secondary" | "tertiary" | "unstyled"
export type ButtonSizes = "large" | "medium" | "small" | "extra-small" | "unstyled"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariants;
  size?: ButtonSizes;
}