import { IoMdNotifications } from "react-icons/io";
import { Button } from "../../../Button"
import { HiChat } from "react-icons/hi";
import { Select } from "../../../Select";
import styles from "../../Header.module.scss"
import { Icon } from "../../../Icon";
import Image from "next/image";
import { HeaderItemProps } from "./HeaderItems.interface";

export const HeaderItems = ({ options, value, onChange }: HeaderItemProps) => {
  return (
    <div className={styles.items}>
        <Button variant="primary" size="extra-small">Environment: Development</Button>
        <Select options={options} value={value} onChange={onChange} />

      <div className={styles.row}>
        <div className={styles.notificationContainer}>
          <div className={styles.notification}>8</div>
          <Icon icon={IoMdNotifications} color="text-secondary" size="22" />
        </div>

        <div className={styles.notificationContainer}>
          <div className={styles.notification}>5</div>
          <Icon icon={HiChat} color="text-secondary" size="22" />
        </div>

        <div className={styles.imageContainer}>
          <Image src="/avatar.png" alt="User" width="40" height="40" />
        </div>
      </div>
    </div>
  )
}