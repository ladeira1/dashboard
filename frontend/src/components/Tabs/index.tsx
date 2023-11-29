import { useState } from "react"
import { TabsProps } from "./Tabs.interface"
import styles from "./Tabs.module.scss"
import { Button } from "../Button"
import { handleClassNames } from "../../utils/handleClassNames"

export const Tabs = ({ options, components }: TabsProps) => {
  const [currentOption, setCurrentOption] = useState(options[0])

  return (
    <div className={styles.container}>
      <ul>
        {options?.map(item => (
          <li key={item}>
            <Button 
              variant="unstyled"
              size="unstyled"
              onClick={() => setCurrentOption(item)} 
              className={handleClassNames([styles.button, item === currentOption && styles.buttonCurrent])}
            >
              {item}
            </Button>
          </li>
        ))}
      </ul>

      {components[currentOption]}
    </div>
  )
}