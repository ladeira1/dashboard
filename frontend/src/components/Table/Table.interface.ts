export interface TableProps {
  headers: string[]
  columns: { rows: (string | Date)[] }[]
}