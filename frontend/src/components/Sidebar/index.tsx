"use client"
import Image from "next/image"
import { HiOutlineHome, HiOutlineInbox, HiOutlineGift, HiOutlineLightBulb, HiOutlineUserGroup, HiOutlineChartSquareBar, HiOutlineTag, HiChevronDown, HiOutlineCog, HiChevronRight, HiChevronLeft } from "react-icons/hi"
import { HiSparkles } from "react-icons/hi2"
import { BsSpeedometer2 } from "react-icons/bs"
import { Icon } from "../Icon"
import styles from "./Sidebar.module.scss"
import { handleClassNames } from "../../utils/handleClassNames"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { Button } from "../Button"
import { SidebarItem } from "./components/SidebarItem"
import { useEffect, useState } from "react"
import { SubItemsProps } from "./components/SubItems/SubItems.interface"
import { SubItems } from "./components/SubItems"
import { useBreakpoint } from "../../hooks/useBreakpoint"

const STORE = {
  icon: "/logo.png",
  title: "Demo Seller",
  subtitle: "AWS",
}

const ITEMS = [
  {
    icon: HiOutlineHome,
    text: "Home",
    pathname: "/"
  },
  {
    icon: HiOutlineInbox,
    text: "Products",
  },
  {
    icon: BsSpeedometer2,
    text: "Metering",
  },
  {
    icon: HiOutlineGift,
    text: "Offers",
  },
  {
    icon: HiOutlineLightBulb,
    text: "Opportunities",
  },
  {
    icon: HiOutlineUserGroup,
    text: "Customers",
  },
  {
    icon: HiOutlineChartSquareBar,
    text: "Reports",
    subItems: [
      "Home",
      "Products",
      "Metering",
      "Offers",
      "Opportunites",
      "Customers",
      "Reports"
    ]
  },
  {
    icon: HiSparkles,
    text: "Copilot",
  },
  {
    icon: HiOutlineTag,
    text: "Co-Selling",
  },
]

const FOOTER_ITEM = {
  icon: HiOutlineCog,
  text: "Account",
}

export const Sidebar = () => {
  const pathname = usePathname()
  const isMobile = useBreakpoint(600, "smaller")

  const [subItemsProps, setSubItemsProps] = useState<SubItemsProps>()
  const [isCollapsed, setIsCollapsed] = useState(true)

  const collapseIcon = isCollapsed ? HiChevronRight : HiChevronLeft;

  const handleToggleIsCollapsed = () => {
    if(isMobile) return;
    setIsCollapsed(oldState => !oldState)
  }

  const handleClickSubItems = (name: string) => {
    if(subItemsProps?.name === name) {
      setSubItemsProps(undefined)
      return
    }

    const item = ITEMS.find(i => i.text === name)
    if(!item?.subItems) return;

    setSubItemsProps({
      name: item.text,
      items: item.subItems
    })
  }

  useEffect(() => {
    if(isMobile && !isCollapsed) setIsCollapsed(true)
  }, [isMobile])

  return (
    <>
      <aside className={handleClassNames([styles.container, isCollapsed && styles.collapsed])}>
        <header className={styles.header}>
          <Image src={STORE.icon} alt="logo" width={"32"} height={"42"} />

          {!isCollapsed && (
            <>
              <div className="column">
                <h6 className="semibold">{STORE.title}</h6>
                <p className="sm medium">{STORE.subtitle}</p>
              </div>

              <Button variant="unstyled" size="unstyled">
                <Icon icon={HiChevronDown} color="text-disable" size="24" />
              </Button>
            </>
          )}

          {!isMobile && (
            <Button variant="unstyled" size="unstyled" className={styles.collapseButton} onClick={handleToggleIsCollapsed}>
              <Icon icon={collapseIcon} color="text-disable" size="16" />
            </Button>
          )}
        </header>
        <nav>
          <ul className={styles.list}>
            {ITEMS.map(item => (
              <li key={item.text}>
                {item.pathname ? (
                  <Link href={item.pathname ?? "/"}>
                    <SidebarItem 
                      icon={item.icon} 
                      text={item.text} 
                      isCurrent={pathname === item?.pathname} 
                      isCollapsed={isCollapsed}
                      onClickSubItems={item.subItems && handleClickSubItems}
                    />
                  </Link>
                ) : (
                  <SidebarItem 
                    icon={item.icon} 
                    text={item.text} 
                    isCurrent={pathname === item?.pathname} 
                    isCollapsed={isCollapsed}
                    onClickSubItems={item.subItems && handleClickSubItems}
                  />
                )}
              </li>
            ))}
          </ul>
        </nav>

        <footer className={styles.footer}>
          <Button variant="unstyled" size="unstyled">
            <SidebarItem icon={FOOTER_ITEM.icon} text={FOOTER_ITEM.text} isCollapsed={isCollapsed} />
          </Button>
        </footer>
      </aside>

      {subItemsProps && <SubItems name={subItemsProps?.name} items={subItemsProps?.items} isCollapsed={isCollapsed} />}
    </>
  )
}