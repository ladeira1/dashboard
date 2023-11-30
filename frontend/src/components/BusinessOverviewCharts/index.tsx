"use client";
import { useEffect, useState } from "react"
import { Select } from "../Select"
import styles from "./BusinessOverviewCharts.module.scss"
import { Tabs } from "../Tabs";
import { components } from "react-select";
import { Chart } from "../Chart";
import colors from "@/styles/variables/colors.module.scss";
import { ChartData } from "./BusinessOverviewCharts.interface";
import { useFetch } from "../../hooks/useFetch";
import { LoadingContainer } from "../LoadingContainer";

const OPTIONS = [
  { value: "YTD", label: "Year to date (YTD)" },
  { value: "T12M", label: "T12M" },
  { value: "last-year", label: "Last Year" },
]

export const BusinessOverviewCharts = () => {
  const [filter, setFilter] = useState(OPTIONS[0])
  const fetchChartData = useFetch<ChartData>({ method: "GET", url: "/chart" })

  const charts = fetchChartData?.data?.chartOptions?.reduce((acc, curr) => {
    if(!fetchChartData?.data) return {}

    let props = {
      series: fetchChartData?.data?.series.map(i => ({
        ...i,
        color: i.type === "column" ? colors["primary-main"] : colors["warning-main"]
      }))
    }

    return { ...acc, [curr]: <Chart {...props} categories={["Jan", "Fev", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]} /> }
  }, {}) ?? {}

  useEffect(() => {
    fetchChartData.makeRequest({params: {
      filter: filter.value
    }});
  }, [filter])
  
  return (
    <LoadingContainer isLoading={fetchChartData?.isLoading}>
      <section 
        aria-labelledby="business-overview-charts" 
        className={styles.container}
      >
        <header>
          <h6 className="medium" id="business-overview-charts">Business Overview</h6>
          <Select options={OPTIONS} value={filter} onChange={v => setFilter(v)} />
        </header>

        {fetchChartData?.data && components && <Tabs options={fetchChartData?.data?.chartOptions} components={charts} />}
      </section>
    </LoadingContainer>
  )
}