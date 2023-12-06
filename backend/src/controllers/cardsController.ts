import { Request, Response } from "express";
import { prisma } from "../services/prisma";
import { cardsView } from "../views/cardsView";

const cardsController = {
  list: async (req: Request, res: Response) => {
    try {
      const data = await prisma.card.findMany({
        select: {
          title: true,
          difference: true,
          supportAmount: true,
          supportText: true,
          button: {
            select: {
              id: true,
              text: true,
              icon: true,
            }
          },
          items: {
            select: {
              id: true,
              title: true,
              values: {
                select: {
                  id: true,
                  title: true,
                  amount: true,
                  difference: true,
                  status: true
                }
              }
            }
          },
          series: {
            select: {
              id: true,
              name: true,
              color: true,
              data: {
                select: {
                  value: true,
                }
              }
            }
          },
          activities: {
            orderBy: {
              date: "desc",
            },
            select: {
              id: true,
              date: true,
              title: true,
              subtitle: true,
              tags: {
                select: {
                  id: true,
                  value: true,
                  color: true,
                  backgroundColor: true,
                }
              }
            }
          }
        }
      })

      res.status(200).json(cardsView.list(data))
    } catch (err) {
      res.status(400).json(cardsView.manyErrors(err as string[]))
    }
  },
}

export { cardsController }