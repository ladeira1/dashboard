import { Widget, WidgetValueItem } from "@prisma/client";
import { defaultView } from "./defaultView";
import { WidgetResponse, WidgetsData } from "../models/widgetModel";

export const widgetView = {
  ...defaultView,
  list: (title: string, widgets: Widget[]): WidgetsData => {
    return {
      title,
      widgets: widgets.map(item => {
        let obj: Partial<WidgetResponse> = {
          id: item.id,
          title: item.title,
          icon: item.icon,
        }

        if((item as any)["widgetValueVariant"] !== null) {
          obj.variant = {
            name: "value",
            props: {
              items: (item as any).widgetValueVariant.items.map((i: WidgetValueItem) => ({
                id: i.id,
                text: i.text,
                amount: i.amount,
                color: i.color ?? undefined,
              }))
            }
          }
        }

        if((item as any)["widgetGrowthVariant"] !== null) {
          const data = (item as any)["widgetGrowthVariant"]
          obj.variant = {
            name: "growth",
            props: {
              amount: data.amount,
              status: data.status,
              difference: data.difference,
              percentage: data.percentage,
              button: {
                text: data.button.text,
                icon: data.button.icon
              }
            }
          }
        }

        return obj as WidgetResponse
      })
    } 
  },
  listFilters: (filters: Pick<Widget, "id" | "title">[]) => {
    return filters.map(i => i.title)
  }
}