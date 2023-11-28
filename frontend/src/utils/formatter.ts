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
  }
}