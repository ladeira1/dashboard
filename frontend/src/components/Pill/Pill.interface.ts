export type PillStatus = "increase" | "decrease"

export interface PillProps {
  text: string;
  secondText?: string;
  status: PillStatus
}