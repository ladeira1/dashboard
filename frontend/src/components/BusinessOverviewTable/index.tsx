import { useEffect, useState } from "react"
import { Select } from "../Select"
import styles from "./BusinessOverViewTable.module.scss"
import { Table } from "../Table"
import { LoadingContainer } from "../LoadingContainer"
import { useAppDispatch, useAppSelector } from "../../lib/hooks"
import { fetchForTableData } from "../../lib/features/table/services/fetchForTableData"

const OPTIONS = [
  { value: "YTD", label: "Year to date (YTD)" },
  { value: "T12M", label: "T12M" },
  { value: "last-year", label: "Last Year" },
]

export const BusinessOverviewTable = () => {
  const [filter, setFilter] = useState(OPTIONS[0])
  const dispatch = useAppDispatch()
  const { isLoading, columns, } = useAppSelector(state => state.table)

  useEffect(() => {
    dispatch(fetchForTableData(filter.value))
  }, [filter])

  if(!columns || columns?.length <= 0) return null;
 
  return (
    <LoadingContainer isLoading={isLoading}>
      <section 
        aria-labelledby="business-overview-table" 
        className={styles.container}
      >
        <header>
          <h6 className="medium" id="business-overview-table">Business Overview</h6>
          <Select options={OPTIONS} value={filter} onChange={v => setFilter(v)} />
        </header>

        <Table 
          headers={Object.keys(columns?.[0])}
          columns={columns?.map(column => {
            return {
              rows: Object.values(column)
            }
          })}
        />
      </section>
    </LoadingContainer>
  )
}