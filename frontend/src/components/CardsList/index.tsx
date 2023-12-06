import { useEffect, useRef } from "react"
import { ModalHandler } from "../Modal/Modal.interface"
import styles from "./CardsList.module.scss"
import { LoadingContainer } from "../LoadingContainer"
import { useAppDispatch, useAppSelector } from "../../lib/hooks"
import { fetchForCards } from "../../lib/features/card/services/fetchForCards"
import { fetchForSeries } from "../../lib/features/card/services/fetchForSeries"
import { List } from "./components/List"
import { CardsListModal } from "./components/CardsListModal"

export const CardsList = () => {
  const modalRef = useRef<ModalHandler>(null)
  const dispatch = useAppDispatch()
  const { isLoading, goals, series } = useAppSelector(state => state.card)

  useEffect(() => {
    dispatch(fetchForSeries())
    dispatch(fetchForCards())
  }, [])

  if(!goals || !series || series?.length === 0) return null;

  return (
    <LoadingContainer isLoading={isLoading}>
      <section aria-labelledby="title" className={styles.container}>
        <List modalRef={modalRef} />
        <CardsListModal modalRef={modalRef} />
      </section>
    </LoadingContainer>
  )
}