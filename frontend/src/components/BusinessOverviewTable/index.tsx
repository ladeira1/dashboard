import { useEffect, useState } from "react"
import { Select } from "../Select"
import styles from "./BusinessOverViewTable.module.scss"
import { Tabs } from "../Tabs"
import { TableData } from "./BusinessOverviewTable.interface"
import { Table } from "../Table"
import { useFetch } from "../../hooks/useFetch"
import { LoadingContainer } from "../LoadingContainer"

const OPTIONS = [
  { value: "YTD", label: "Year to date (YTD)" },
  { value: "T12M", label: "T12M" },
  { value: "last-year", label: "Last Year" },
]

export const BusinessOverviewTable = () => {
  const [filter, setFilter] = useState(OPTIONS[0])
  const fetchTableData = useFetch<TableData>({ method: "GET", url: "/table" })

  useEffect(() => {
    fetchTableData.makeRequest({
      params: {
        filter: filter.value
      }
    })
  }, [filter])

  const tables = fetchTableData?.data?.tableOptions?.reduce((acc, curr) => {
    if(!fetchTableData?.data) return {}

    const props = {
      headers: Object.keys(fetchTableData?.data?.columns?.[0]),
      columns: fetchTableData?.data?.columns?.map(column => {
        return {
          rows: Object.values(column)
        }
      })
    }

    return { ...acc, [curr]: <Table {...props} /> }
  }, {}) ?? {}
  
  return (
    <LoadingContainer isLoading={fetchTableData?.isLoading}>
      <section 
        aria-labelledby="business-overview-table" 
        className={styles.container}
      >
        <header>
          <h6 className="medium" id="business-overview-table">Business Overview</h6>
          <Select options={OPTIONS} value={filter} onChange={v => setFilter(v)} />
        </header>

        {fetchTableData?.data && <Tabs options={fetchTableData?.data?.tableOptions}  components={tables} />}
      </section>
    </LoadingContainer>
  )
}