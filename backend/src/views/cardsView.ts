import { defaultView } from "./defaultView";

export const cardsView = {
  ...defaultView,
  list: (charts: any[]) => {
    return charts.map(chart => {
      let data: Record<string, any> = {
        id: chart.id,
        title: chart.title,
      }

      if(!!chart.difference) {
        data = { ...data, difference: chart.difference }
      }

      if(!!chart.button) {
        data = { ...data, button: chart.button }
      }

      if(!!chart.supportText || !!chart.supportAmount) {
        data = {
          ...data,
          support: {
            amount: chart.supportAmount,
            text: chart.supportText
          }
        }
      }

      if(!!chart.items && chart.items.length > 0) {
        data = {
          ...data,
          variant: {
            name: "list",
            props: {
              items: chart.items.map((item: any) => ({
                id: item.id,
                title: item.title,
                values: item.values.map((value: any) => ({
                  id: value.id,
                  title: value.title,
                  amount: value.amount,
                  difference: value.difference,
                  status: value.status
                }))
              }))
            }
          }
        }
      }

      if(!!chart.series && chart.series.length > 0) {
        data = {
          ...data,
          variant: {
            name: "line",
            props: {
              series: chart.series.map((s: any) => ({
                id: s.id,
                name: s.name,
                color: s.color,
                data: s.data.map((d: any) => d.value)
              }))
            }
          }
        }
      }

      if(!!chart.activities && chart.activities.length > 0) {
        data = {
          ...data,
          variant: {
            name: "activities",
            props: {
              items: chart.activities.map((activity: any) => ({
                id: activity.id,
                date: activity.date,
                subtitle: activity.subtitle,
                title: activity.title,
                tags: activity.tags.map((tag: any) => ({
                  value: tag.value,
                  color: tag.color,
                  backgroundColor: tag.backgroundColor,
                }))
              }))
            }
          }
        }
      }

      return data
    })
  },
}