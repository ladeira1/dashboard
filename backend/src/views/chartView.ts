import { defaultView } from "./defaultView";

export const chartView = {
  ...defaultView,
  list: (chart: any) => {
    return {
      chartOptions: chart.chartOptions.map((i: any) => i.name),
      series: chart.series.map((i: any) => ({
        id: i.id,
        name: i.name,
        type: i.type,
        data: i.data.map((i: any) => i.data)
      }))
    }
  },
}