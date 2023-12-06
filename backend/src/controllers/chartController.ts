import { Request, Response } from "express";
import { prisma } from "../services/prisma";
import { chartView } from "../views/chartView";

const chartController = {
  list: async (req: Request, res: Response) => {
    try {
      const data = await prisma.chart.findFirst({
        select: {
          series: {
            select: {
              id: true,
              name: true,
              type: true,
              data: {
                select: {
                  id: true,
                  data: true
                }
              },
            }
          },
          chartOptions: {
            select: {
              id: true,
              name: true,
            }
          }
        }
      })

      res.status(200).json(chartView.list(data as any))
    } catch (err) {
      res.status(400).json(chartView.manyErrors(err as string[]))
    }
  },
}

export { chartController }