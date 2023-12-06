import { Request, Response } from "express";
import { prisma } from "../services/prisma";
import { seriesView } from "../views/seriesView";
import { Series } from "@prisma/client";

const seriesController = {
  list: async (req: Request, res: Response) => {
    try {
      const data = await prisma.series.findMany({
        select: {
          id: true,
          current: true,
          goal: true,
          legend: true,
          text: true,
        }
      })

      res.status(200).json(seriesView.list(data))
    } catch (err) {
      res.status(400).json(seriesView.manyErrors(err as string[]))
    }
  },
  update: async (req: Request, res: Response) => {
    try {
      const items = req.body;
      if(!items || items?.length === 0) {
        const data = await prisma.series.findMany({
          select: {
            id: true,
            current: true,
            goal: true,
            legend: true,
            text: true,
          }
        })

        return res.status(200).json(data)
      }

      const promises = items?.map(async (item: Series) => {
        return await prisma.series.update({
          where: { 
            id: item.id,
          },
          data: {
            goal: item.goal
          }
        })
      })

      await Promise.all(promises);
      
      const data = await prisma.series.findMany({
        select: {
          id: true,
          current: true,
          goal: true,
          legend: true,
          text: true,
        }
      })

      res.status(200).json(seriesView.list(data))
    } catch (err) {
      res.status(400).json(seriesView.manyErrors(err as string[]))
    }
  }
}

export { seriesController }