import { useAppDispatch, useAppSelector } from "../../../../lib/hooks"
import styles from "./List.module.scss"
import { ListProps } from "./List.interface"
import { Modal } from "../../../Modal"
import { Button } from "../../../Button"
import { fetchUpdateSeries } from "../../../../lib/features/card/services/fetchUpdateSeries"
import { changeGoal } from "../../../../lib/features/card/cardSlice"
import { Input } from "../../../Input"

export const CardsListModal = ({ modalRef }: ListProps) => {
  const dispatch = useAppDispatch()
  const { goals, series } = useAppSelector(state => state.card)

  const handleUpdateGoals = async () => {
    dispatch(fetchUpdateSeries(goals))
    modalRef?.current?.onClose()
  }

  const handleUpdateGoalData = (text: string, newGoal: number) => {
    dispatch(changeGoal({ text, newGoal }))
  }

  return (
    <Modal ref={modalRef} title="Edit Goals" hasCloseButton>
      {series?.map((item) => (
        <Input 
          placeholder={item.text} 
          key={item.text} 
          value={String(goals[item.text])} 
          onChange={v => handleUpdateGoalData(item.text, Number(v))} 
        />
      ))}

      <div className={styles.modalButtonRown}>
        <Button variant="secondary" size="small" onClick={() => modalRef?.current?.onClose()}>Cancel</Button>
        <Button variant="primary" size="small" onClick={handleUpdateGoals}>Save</Button>
      </div>
    </Modal>
  )
}