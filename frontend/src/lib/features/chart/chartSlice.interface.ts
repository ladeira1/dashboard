export interface ChartSerie {
  name: string;
  type: "column" | "line";
  data: number[];
}


export interface ChartState {
  chartOptions: string[]
  series: ChartSerie[]
  isLoading: boolean;
}

export type FetchForChartDataResponse = Pick<ChartState, "chartOptions" | "series">