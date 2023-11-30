import { useEffect, useRef, useState } from "react"
import { useSidebar } from "../../contexts/SidebarContext"
import { handleClassNames } from "../../utils/handleClassNames"
import { Card } from "../Card"
import colors from "@/styles/variables/colors.module.scss"
import { ModalHandler } from "../Modal/Modal.interface"
import { Modal } from "../Modal"
import styles from "./CardsList.module.scss"
import { Input } from "../Input"
import { Button } from "../Button"
import { HiChevronRight } from "react-icons/hi"
import { CardProps } from "../Card/Card.interface"

const getSeries = async () =>  {
  return [
    { text: "GSS Goal", legend: "$10M", goal: 10000, current: 4000 },
    { text: "PO Goal", legend: "1000 Offers", goal: 1000, current: 300 },
    { text: "GSS Goal 2", legend: "$10M", goal: 10000, current: 5000 },
  ]
}

const updateEditGoals = async (newGoals: Record<string, number>) => {
  return [
    { text: "GSS Goal", legend: "$10M", goal: newGoals["GSS Goal"], current: 4000 },
    { text: "PO Goal", legend: "1000 Offers", goal: newGoals["PO Goal"], current: 300 },
    { text: "GSS Goal 2", legend: "$10M", goal: newGoals["GSS Goal 2"], current: 5000 },
  ]
}

const getCardsItems = async () => {
  return [
    {
      title: "Top selling products",
      variant: {
        name: "list",
        props: {
          items: [
            {
              title: "Cloud Monitoring Platform (AWS)",
              values: [
                {
                  title: "Total GSS",
                  amount: 750000,
                  difference: 5200,
                  status: "decrease"
                },
                {
                  title: "Total GSS",
                  amount: 750000,
                  difference: 5200,
                  status: "decrease"
                },
                {
                  title: "Total GSS",
                  amount: 750000,
                  difference: 5200,
                  status: "decrease"
                },
              ]
            },
            {
              title: "Cloud Monitoring Platform (AWS)",
              values: [
                {
                  title: "Total GSS",
                  amount: 750000,
                  difference: 5200,
                  status: "decrease"
                },
                {
                  title: "Total GSS",
                  amount: 750000,
                  difference: 5200,
                  status: "decrease"
                },
                {
                  title: "Total GSS",
                  amount: 750000,
                  difference: 5200,
                  status: "decrease"
                },
              ]
            },
            {
              title: "Cloud Monitoring Platform (AWS)",
              values: [
                {
                  title: "Total GSS",
                  amount: 750000,
                  difference: 5200,
                  status: "decrease"
                },
                {
                  title: "Total GSS",
                  amount: 750000,
                  difference: 5200,
                  status: "decrease"
                },
                {
                  title: "Total GSS",
                  amount: 750000,
                  difference: 5200,
                  status: "decrease"
                },
              ]
            },
          ]
        }
      }
    },
    {
      title:"Free Trials",
      difference: 5200,
      support:{
        amount: 7,
        text: "21 from last period"
      },
      variant: {
        name: "line",
        props: {
          series: [
            {
              name: "A",
              data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10],
              color: colors["primary-main"],
            },
            {
              name: "B",
              data: [35, 41, 62, 42, 13, 18, 29, 37, 36, 51, 32, 35],
              color: colors["text-disable"],
            }
          ],
        }
      }
    },
    {
      title:"Opportunity Win Rate",
      difference: 5200,
      support:{
        amount: 7,
        text: "21 from last period"
      },
      variant: {
        name: "line",
        props: {
          series: [
            {
              name: "A",
              data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10],
              color: colors["primary-main"],
            },
            {
              name: "B",
              data: [35, 41, 62, 42, 13, 18, 29, 37, 36, 51, 32, 35],
              color: colors["text-disable"],
            }
          ],
        }
      }
    },
    {
      title:"Combined investments",
      difference: 5200,
      support:{
        amount: 7,
        text: "21 from last period"
      },
      variant: {
        name: "line",
        props: {
          series: [
            {
              name: "A",
              data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10],
              color: colors["primary-main"],
            },
            {
              name: "B",
              data: [35, 41, 62, 42, 13, 18, 29, 37, 36, 51, 32, 35],
              color: colors["text-disable"],
            }
          ],
        }
      }
    },
    {
      title: "Recent Activity",
      button:{
        text: "View more",
        onClick: () => {}
      },
      variant: {
        name: "activities",
        props: {
          items: [
            {
              date: "12 feb",
              subtitle: "CloudHealth SasS Listing on AWS",
              title: "PUBLISHED LISTING",
            },
            {
              date: "12 feb",
              subtitle: "CloudHealth SasS Listing on AWS",
              title: "PUBLISHED LISTING",
              tags: [
                {
                  value: "DP",
                  color: "info-main",
                  backgroundColor: "info-lighter"
                },
                {
                  value: "CS",
                  color: "primary-main",
                  backgroundColor: "primary-lighter"
                },
              ]
            },
          ]
        }
      }
    }
  ]
}

export const CardsList = () => {
  const modalRef = useRef<ModalHandler>(null)
  const { isCollapsed } = useSidebar()
  const [data, setData] = useState([])
  const [items, setItems] = useState<CardProps[]>([])
  const [goalsData, setGoalsData] = useState<Record<string, number>>({})

  const handleUpdateGoalData = (text: string, newGoal: number) => {
    setGoalsData(oldState => {
      return {
        ...oldState,
        [text]: newGoal
      }
    })
  }

  const handleUpdateGoals = async () => {
    const data = await updateEditGoals(goalsData)
    setData(data as any)
    modalRef?.current?.onClose()
  }

  useEffect(() => {
    (async () => {
      const [data, cardItems] = await Promise.all([getSeries(), getCardsItems()])
      setData(data as any)
      setGoalsData(() => {
        return data.reduce((acc, curr) => {
          return {
            ...acc,
            [curr.text]: curr.goal
          }
        }, {})
      })
      setItems(cardItems as any)
    })()
  }, [])

  return (
    <section aria-labelledby="title" className={handleClassNames([isCollapsed ? "collapsed-margin-left" : "open-margin-left", styles.container])}>
      <ul className={styles.list}>
        <li>
          <Card
            title="Goals"
            button={{
              onClick: () => modalRef?.current?.onOpen(),
              text: "Edit Goals",
              icon: HiChevronRight
            }}
            variant={{
              name: "bar",
              props: {
                series: data
              }
            }}
          />
        </li>
        {items?.map(item => (
          <li key={item.title}>
            <Card {...item} />
          </li>
        ))}
      </ul>

      <Modal ref={modalRef} title="Edit Goals" hasCloseButton>
          {data?.map((item: any) => (
            <Input placeholder={item.text} key={item.text} value={String(goalsData[item.text] ?? "")} onChange={v => handleUpdateGoalData(item.text, Number(v))} />
          ))}

          <div className={styles.modalButtonRown}>
            <Button variant="secondary" size="small" onClick={() => modalRef?.current?.onClose()}>Cancel</Button>
            <Button variant="primary" size="small" onClick={handleUpdateGoals}>Save</Button>
          </div>
        </Modal>
    </section>
  )
}