import { createContext, useState, useContext, ReactNode, useEffect } from "react";
import { useBreakpoint } from "../../hooks/useBreakpoint";

interface SidebarContextProps {
  isCollapsed: boolean;
  isMobile: boolean;
  handleToggleIsCollapsed: () => void;
}

const SidebarContext = createContext({} as SidebarContextProps)

export const SidebarContextProvider = ({ children }: { children: ReactNode }) => {
  const [isCollapsed, setIsCollapsed] = useState(true)
  const isMobile = useBreakpoint(600, "smaller")

  const handleToggleIsCollapsed = () => {
    if(isMobile) return;
    setIsCollapsed(oldState => !oldState)
  }

  useEffect(() => {
    if(isMobile && !isCollapsed) setIsCollapsed(true)
  }, [isMobile])

  return (
    <SidebarContext.Provider value={{ isCollapsed, isMobile, handleToggleIsCollapsed }}>
      {children}
    </SidebarContext.Provider>
  )
}

export const useSidebar = () => useContext(SidebarContext)