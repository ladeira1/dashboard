export interface TableColumn {
  statementId: string;
  startDate: string;
  endDate: string;
  depositDate: string;
  amount: number;
}

export interface TableData {
  tableOptions: string[]
  columns: TableColumn[]
}