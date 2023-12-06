import { format, parseISO } from "date-fns"
export const formatter = {
  toPercentage: (value: number) => {
    return new Intl.NumberFormat("default", {
      style: "percent",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value / 100)
  },
  toCompact: (value: number) => {
    return new Intl.NumberFormat("en", { notation: "compact" }).format(value)
  },
  toNumber: (value: number) => {
    return new Intl.NumberFormat("en", { notation: "standard" }).format(value)
  },
  toCurrency: (value: number) => {
    return new Intl.NumberFormat("en", { style: "currency", currency: "USD", notation: "compact" }).format(value)
  },
  toCompactDate: (value: string | Date | number) => {
    if(typeof value === "number") return value;
    try {
      const parsed = parseISO(value as string)
      return format(parsed, "MMM dd, yyyy")
    } catch {
      return value as string
    }
  }
}