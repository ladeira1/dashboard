import { Series } from "@prisma/client";
import { defaultView } from "./defaultView";

export const seriesView = {
  ...defaultView,
  list: (series: any[]): Series[] => {
    return series.map(s => ({
      id: s.id,
      current: s.current,
      goal: s.goal,
      legend: s.legend,
      text: s.text,
    }))
  },
}