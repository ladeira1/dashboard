"use client"
import { useEffect, useRef, useState } from "react"
import { Button } from "../Button";
import { Icon } from "../Icon";
import { HiChevronRight, HiCurrencyDollar, HiDocumentText, HiOutlineCalendar, HiOutlineColorSwatch, HiOutlineFire, HiOutlineStar, HiOutlineThumbUp, HiOutlineUsers, HiViewGrid } from "react-icons/hi";
import styles from "./WidgetList.module.scss"
import { Select } from "../Select";
import { Filters, WidgetsData } from "./WidgetList.interface";
import { SelectOption } from "../Select/Select.interface";
import { Widget } from "../Widget";
import { useSidebar } from "../../contexts/SidebarContext";
import { handleClassNames } from "../../utils/handleClassNames";
import { Modal } from "../Modal";
import { ModalHandler } from "../Modal/Modal.interface";
import { Checkbox } from "../Checkbox";
import { WidgetProps } from "../Widget/Widget.interface";

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

const getWidgets = (shownItems: string[], filters?: Filters): WidgetsData => {
  // fetch for API
  const data = {
    title: "Sleek Sky",
    widgets: [
      {
        icon: HiOutlineFire,
        title: "ACE Opportunities",
        variant: {
          name: "value",
          props: {
            items: [
              { text: "Total", amount: 1234 },
              { text: "AWS", amount: 1000 },
              { text: "Partners", amount: 234 },
            ]
          }
        }
      },
      {
        icon: HiCurrencyDollar,
        title: "Gross software sales",
        variant: {
          name: "growth",
          props: {
            amount: 100,
            difference: 5200,
            percentage: 23,
            status: "increase",
            button: {
              text: "View More",
              icon: HiChevronRight,
              onClick: () => {}
            }
          }
        }
      },
      {
        icon: HiDocumentText,
        title: "Private offers",
        variant: {
          name: "growth",
          props: {
            amount: 100,
            difference: 5200,
            percentage: 23,
            status: "decrease",
            button: {
              text: "View More",
              icon: HiChevronRight,
              onClick: () => {}
            }
          }
        }
      },
      {
        icon: HiOutlineUsers,
        title: "Active subscriptions",
        variant: {
          name: "growth",
          props: {
            amount: 100,
            difference: 5200,
            percentage: 23,
            status: "increase",
            button: {
              text: "View More",
              icon: HiChevronRight,
              onClick: () => {}
            }
          }
        }
      },
      {
        icon: HiOutlineThumbUp,
        title: "Reseller authorizations",
        variant: {
          name: "value",
          props: {
            items: [
              { text: "Active", amount: 100, color: "success-main" },
              { text: "Expired", amount: 254, color: "error-main" },
            ]
          }
        }
      },
      {
        icon: HiOutlineColorSwatch,
        title: "Listings",
        variant: {
          name: "value",
          props: {
            items: [
              { text: "Active", amount: 100, color: "success-main" },
              { text: "Expired", amount: 254, color: "error-main" },
            ]
          }
        }
      },
      {
        icon: HiOutlineStar,
        title: "Free trials",
        variant: {
          name: "value",
          props: {
            items: [
              { text: "Active", amount: 100, color: "success-main" },
              { text: "Expired", amount: 254, color: "error-main" },
            ]
          }
        }
      },
      {
        icon: HiOutlineCalendar,
        title: "Days sales outstanding (DSO)",
        variant: {
          name: "value",
          props: {
            items: [
              { text: "Active", amount: 100, color: "success-main" },
              { text: "Expired", amount: 254, color: "error-main" },
            ]
          }
        }
      },
    ]
  }

  if(shownItems.length > 0) {
    return {
      ...data,
      widgets: data?.widgets.filter(i => shownItems.includes(i.title)) as WidgetProps[]
    }
  }

  return data as WidgetsData
}

const getWidgetFilterOptions = () => {
  // fetch for API
  return ["ACE Opportunities", "Gross software sales", "Private offers", "Active subscriptions", "Reseller authorizations", "Listings", "Free trials", "Days sales outstanding (DSO)"]
}

export const WidgetList = () => {
  const [data, setData] = useState<WidgetsData>()
  const [filters, setFilters] = useState<Filters>()
  const [shownItems, setShownItems] = useState<string[]>([])
  const [shownItemsOptions, setShownItemsOptions] = useState<string[]>([])
  const { isCollapsed, isMobile } = useSidebar()
  const modalRef = useRef<ModalHandler>(null)

  const handleChangeFilter = (key: keyof Filters, value: SelectOption) => {
    setFilters(oldState => ({
      ...oldState,
      [key]: value,
    }))
  }

  const handleChangeShownItems = (name: string, value: boolean) => {
    setShownItems(oldState => {
      const item = oldState.find(i => i === name)
      if(item) {
        return oldState.filter(i => i !== name)
      }

      return [...oldState, name]
    })
  }

  const handleToggleWidgetModal = () => {
    modalRef?.current?.onToggle()
  }

  const handleFilterShownItems = () => {
    setData(getWidgets(shownItems, filters))
    modalRef?.current?.onClose()
  }

  useEffect(() => {
    (async () => {
      setData(getWidgets(shownItems, filters))
    })()
  }, [filters])

  useEffect(() => {
    (async () => {
      setShownItemsOptions(getWidgetFilterOptions())
    })()
  }, [])

  return (
    <section aria-labelledby="title" style={{
      marginLeft: isCollapsed ? "80px" : "17.75rem" 
    }}>
      <header className={styles.header}>
        <h4 id="title" className="semibold">{data?.title}</h4>
        <Button variant="primary" size={isMobile ? "extra-small" : "medium"} onClick={handleToggleWidgetModal}>
          <Icon icon={HiViewGrid} color="white" />
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
        {data?.widgets?.map(item => (
          <li key={item.title}>
            <Widget {...item} />
          </li>
        ))}
      </ul>

      <p className={handleClassNames(["lg regular", styles.support])}>
        * Growth / Decrease numbers are compared to last period
      </p>  

      <Modal title="Add / Remove Widgets" support={`Max ${shownItemsOptions?.length} itens`} ref={modalRef}>
        <ul className={styles.modalBody}>
          {shownItemsOptions?.map(item => (
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
  )
}