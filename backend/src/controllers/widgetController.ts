import { Request, Response } from "express";
import { widgetView } from "../views/widgetView";
import { prisma } from "../services/prisma";

const widgetController = {
  list: async (req: Request, res: Response) => {
    try {
      const { titles, period } = req.query
      let date: Date | undefined = undefined;
      if(period) {
        date = new Date()
        date.setDate(date.getDate() - Number(period ?? 0))
      }

      const title = await prisma.title.findFirst({
        select: { title: true }
      })
      const data = await prisma.widget.findMany({
        orderBy: { createdAt: "asc" },
        where: {
          title: {
            in: typeof titles === "string" ? [titles] : titles as string[]
          },
          createdAt: {
            gte: date,
          }
        },
        select: {
          id: true,
          title: true,
          icon: true,
          widgetGrowthVariant: {
            select: {
              amount: true,
              status: true,
              difference: true,
              percentage: true,
              button: {
                select: {
                  icon: true,
                  text: true,
                }
              }
            }
          },
          widgetValueVariant: {
            select: {
              id: true,
              items: true,
            }
          },
        }
      })

      res.status(200).json(widgetView.list(title?.title ?? "", data as any))
    } catch (err) {
      res.status(400).json(widgetView.manyErrors(err as string[]))
    }
  },
  listFilters: async (req: Request, res: Response) => {
    try {
      const data = await prisma.widget.findMany({
        orderBy: { id: "asc" },
        select: {
          id: true,
          title: true,
        }
      })

      res.status(200).json(widgetView.listFilters(data))
    } catch (err) {
      res.status(400).json(widgetView.manyErrors(err as string[]))
    }
  }
}

export { widgetController }