import { TableProps } from "./Table.interface"
import styles from "./Table.module.scss"

export const Table = ({ headers, columns }: TableProps) => {
  return (
    <div className={styles.wrapper}>
      <table className={styles.container}>
        <thead>
          <tr className={styles.header}>
            {headers?.map(header => (
              <th key={header}>
                <span>
                  {header?.split(/(?=[A-Z])/).join(" ")}
                </span>
              </th>
            ))}
          </tr>
        </thead>
        
        <tbody>
          {columns?.map((column, index) => (
            <tr key={index}>
              {column?.rows?.map(row => (
                <td key={row}>
                  <span>
                    {row}
                  </span>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}