import { useSidebar } from "../../contexts/SidebarContext";
import { handleClassNames } from "../../utils/handleClassNames";
import { Spinner } from "../Spinner";
import { LoadingContainerProps } from "./LoadingContainer.interface";

export const LoadingContainer = ({ isLoading, children }: LoadingContainerProps) => {
  const { isCollapsed } = useSidebar()
  let Component = isLoading ? <Spinner isLoading={isLoading} /> : children;

  return (
    <div className={handleClassNames([isCollapsed ? "collapsed-margin-left" : "open-margin-left"])}>
      {Component}
    </div>
  )
}