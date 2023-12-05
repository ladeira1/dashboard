import { HiChevronRight } from "react-icons/hi"
import { useAppSelector } from "../../../../lib/hooks"
import { Card } from "../../../Card"
import styles from "./List.module.scss"
import { ListProps } from "./List.interface"

export const List = ({ modalRef }: ListProps) => {
  const { cards, series } = useAppSelector(state => state.card)

  return (
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
              series
            }
          }}
        />
      </li>
      {cards?.map(item => (
        <li key={item.title}>
          <Card {...item} />
        </li>
      ))}
    </ul>
  )
}