export interface TableColumn {
  statementId: string;
  startDate: string;
  endDate: string;
  depositDate: string;
  amount: number;
}

export interface TableState {
  tableOptions: string[]
  columns: TableColumn[]
  isLoading: boolean
}

export type FetchForTableData = Pick<TableState, "columns" | "tableOptions">