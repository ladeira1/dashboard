import { Request, Response } from "express";
import { prisma } from "../services/prisma";
import { tableView } from "../views/tableView";

const tableController = {
  list: async (req: Request, res: Response) => {
    try {
      const data = await prisma.table.findFirst({
        orderBy: { id: "asc" },
        select: {
          columns: {
            select: {
              id: true,
              amount: true,
              depositDate: true,
              endDate: true,
              startDate: true,
            }
          }        
        }
      })

      res.status(200).json(tableView.list(data as any))
    } catch (err) {
      res.status(400).json(tableView.manyErrors(err as string[]))
    }
  },
}

export { tableController }