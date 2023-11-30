import { HiMenu, HiSearch } from "react-icons/hi"
import { Icon } from "../Icon"
import styles from "./Header.module.scss"
import { Button } from "../Button"
import { useSidebar } from "../../contexts/SidebarContext"
import { handleClassNames } from "../../utils/handleClassNames"
import { useState } from "react"
import { SelectOption } from "../Select/Select.interface"
import { useBreakpoint } from "../../hooks/useBreakpoint"
import { HeaderItems } from "./components/HeaderItems"

const OPTIONS = [
  { label: "Org1", value: "org1" }
]

export const Header = () => {
  const { isCollapsed } = useSidebar()
  const isDesktop = useBreakpoint(700, "bigger")
  const [value, setValue] = useState<SelectOption>(OPTIONS[0])
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleToggleMenu = () => {
    setIsMenuOpen(oldState => !oldState)
  }

  return (
    <header 
      className={handleClassNames([styles.container, isCollapsed ? "collapsed-margin-left" : "open-margin-left"])}
      style={{
        width: `calc(100vw - ${isCollapsed ? "5rem" : "17.75rem"})`
      }}
    >
      <Icon icon={HiSearch} color="text-secondary" />
      {isDesktop ? (
        <HeaderItems options={OPTIONS} value={value} onChange={v => setValue(v)} />
      ) : (
        <div className={styles.items}>
          <Button variant="unstyled" size="unstyled" onClick={handleToggleMenu}>
            <Icon icon={HiMenu} color="text-secondary" size="22" />
          </Button>

          {isMenuOpen && (
            <div className={styles.mobileItems}>
              <HeaderItems options={OPTIONS} value={value} onChange={v => setValue(v)} />
            </div>
          )}
        </div>
      )}
    </header>
  )
}