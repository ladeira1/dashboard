import { useEffect, useRef, useState } from "react"
import { Card } from "../Card"
import { ModalHandler } from "../Modal/Modal.interface"
import { Modal } from "../Modal"
import styles from "./CardsList.module.scss"
import { Input } from "../Input"
import { Button } from "../Button"
import { HiChevronRight } from "react-icons/hi"
import { CardProps } from "../Card/Card.interface"
import { useFetch } from "../../hooks/useFetch"
import { SeriesData } from "./CardsList.interface"
import { LoadingContainer } from "../LoadingContainer"

export const CardsList = () => {
  const modalRef = useRef<ModalHandler>(null)
  const [goalsData, setGoalsData] = useState<Record<string, number>>({})
  const [data, setData] = useState<SeriesData[]>([])

  const fetchSeriesData = useFetch<SeriesData[]>({ method: "GET", url: "/series" })
  const fetchPostSeriesData = useFetch<SeriesData[]>({ method: "POST", url: "/updateSeries" })
  const fetchCardItemsData = useFetch<CardProps[]>({ method: "GET", url: "/cardItems" })

  const handleUpdateGoalData = (text: string, newGoal: number) => {
    setGoalsData(oldState => {
      return {
        ...oldState,
        [text]: newGoal
      }
    })
  }

  const handleUpdateGoals = async () => {
    fetchPostSeriesData.makeRequest({
      data: goalsData,
      onSuccess: data => {
        setData(data.data)
      }
    })
    modalRef?.current?.onClose()
  }

  useEffect(() => {
    fetchSeriesData.makeRequest({
      onSuccess: data => {
        setData(data.data)
        setGoalsData(
          data.data.reduce((acc, curr) => {
            return {
              ...acc,
              [curr.text]: curr.goal
            }
          }, {})
        )
      }
    });
    fetchCardItemsData.makeRequest();
  }, [])

  return (
    <LoadingContainer isLoading={fetchCardItemsData?.isLoading || fetchSeriesData?.isLoading}>
      <section aria-labelledby="title" className={styles.container}>
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
          {fetchCardItemsData?.data?.map(item => (
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
    </LoadingContainer>
  )
}