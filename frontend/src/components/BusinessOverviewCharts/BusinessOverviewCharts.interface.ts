export interface ChartSerie {
  name: string;
  type: "column" | "line";
  data: number[];
}

export interface ChartData {
  chartOptions: string[]
  series: ChartSerie[]
}