"use client"
import { useEffect, useRef, useState } from "react"
import { Button } from "../Button";
import { Icon } from "../Icon";
import * as HiIcons from "react-icons/hi";
import styles from "./WidgetList.module.scss"
import { Select } from "../Select";
import { Filters } from "./WidgetList.interface";
import { SelectOption } from "../Select/Select.interface";
import { Widget } from "../Widget";
import { useSidebar } from "../../contexts/SidebarContext";
import { handleClassNames } from "../../utils/handleClassNames";
import { Modal } from "../Modal";
import { ModalHandler } from "../Modal/Modal.interface";
import { Checkbox } from "../Checkbox";
import { LoadingContainer } from "../LoadingContainer";
import { useAppDispatch, useAppSelector } from "../../lib/hooks";
import { fetchForWidgetList } from "../../lib/features/widget/services/fetchForWidgetList";
import { updateShownItems } from "../../lib/features/widget/widgetSlice";
import { fetchForWidgetFilters } from "../../lib/features/widget/services/fetchForWidgetFilters";

const PERIOD_OPTIONS = [
  { value: "28", label: "Last 4 weeks" },
  { value: "21", label: "Last 3 weeks" },
  { value: "14", label: "Last 2 weeks" },
  { value: "7", label: "Last week" },
]

const COMPARED_TO_OPTIONS = [
  { value: "previous", label: "Previous period" }
]

const COMPARED_TO_FREQUENCY_OPTIONS = [
  { value: "daily", label: "Daily" }
]

export const WidgetList = () => {
  const [filters, setFilters] = useState<Filters>()
  const { isMobile } = useSidebar()
  const modalRef = useRef<ModalHandler>(null)

  const dispatch = useAppDispatch()
  const { widgetsData, filters: widgetFilters, shownItems, isLoading } = useAppSelector(state => state.widget)

  const handleChangeFilter = (key: keyof Filters, value: SelectOption) => {
    setFilters(oldState => ({
      ...oldState,
      [key]: value,
    }))
  }

  const handleChangeShownItems = (name: string, value: boolean) => {
    dispatch(updateShownItems(name))
  }

  const handleToggleWidgetModal = () => {
    modalRef?.current?.onToggle()
  }

  const handleFetchWidgets = async () => {
    dispatch(fetchForWidgetList())
  }

  const handleFilterShownItems = async () => {
    await handleFetchWidgets()
    modalRef?.current?.onClose()
  }

   useEffect(() => {
    handleFetchWidgets()
  }, [filters])

  useEffect(() => {
    dispatch(fetchForWidgetFilters())
  }, [])

  return (
    <LoadingContainer isLoading={isLoading}>
      <section aria-labelledby="title">
        <header className={styles.header}>
          <h4 id="title" className="semibold">{widgetsData?.title}</h4>
          <Button variant="primary" size={isMobile ? "extra-small" : "medium"} onClick={handleToggleWidgetModal}>
            <Icon icon={HiIcons.HiViewGrid} color="white" />
            Add / Remove widgets
          </Button>
        </header>

        <div className={styles.filters}>
          <Select placeholder="Select period" options={PERIOD_OPTIONS} value={filters?.period} onChange={(v) => handleChangeFilter("period", v)} />
          <p className="sm medium">Compared to</p>
          <Select placeholder="Select method" options={COMPARED_TO_OPTIONS} value={filters?.comparedTo} onChange={(v) => handleChangeFilter("comparedTo", v)} />
          <Select placeholder="Select frequency" options={COMPARED_TO_FREQUENCY_OPTIONS} value={filters?.frequency} onChange={(v) => handleChangeFilter("frequency", v)} />
        </div>

        <ul className={styles.list}>
          {widgetsData?.widgets?.map(item => (
            <li key={item.title}>
              <Widget {...item} icon={(HiIcons as any)[item.icon as any]} />
            </li>
          ))}
        </ul>

        <p className={handleClassNames(["lg regular", styles.support])}>
          * Growth / Decrease numbers are compared to last period
        </p>  

        <Modal title="Add / Remove Widgets" support={`Max ${widgetFilters?.length} itens`} ref={modalRef}>
          <ul className={styles.modalBody}>
            {widgetFilters?.map(item => (
              <li key={item}>
                <Checkbox label={item} value={shownItems.includes(item)} onChange={(e) => {
                  handleChangeShownItems(item, (e.target as any).checked)
                }} />
              </li>
            ))}
          </ul>

          <footer className={styles.modalFooter}>
            <Button variant="primary" size="small" onClick={handleFilterShownItems}>Save</Button>
          </footer>
        </Modal>
      </section>
    </LoadingContainer>
  )
}