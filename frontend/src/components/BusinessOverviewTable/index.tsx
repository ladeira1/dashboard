import { useEffect, useState } from "react"
import { Select } from "../Select"
import styles from "./BusinessOverViewTable.module.scss"
import { Tabs } from "../Tabs"
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
  const { isLoading, columns, tableOptions } = useAppSelector(state => state.table)

  useEffect(() => {
    dispatch(fetchForTableData(filter.value))
  }, [filter])

  const tables = tableOptions?.reduce((acc, curr) => {
    const props = {
      headers: Object.keys(columns?.[0]),
      columns: columns?.map(column => {
        return {
          rows: Object.values(column)
        }
      })
    }

    return { ...acc, [curr]: <Table {...props} /> }
  }, {}) ?? {}
  
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

        {tableOptions && <Tabs options={tableOptions} components={tables} />}
      </section>
    </LoadingContainer>
  )
}