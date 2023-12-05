"use client";
import { useEffect, useState } from "react"
import { Select } from "../Select"
import styles from "./BusinessOverviewCharts.module.scss"
import { Tabs } from "../Tabs";
import { components } from "react-select";
import { Chart } from "../Chart";
import colors from "@/styles/variables/colors.module.scss";
import { LoadingContainer } from "../LoadingContainer";
import { useAppDispatch, useAppSelector } from "../../lib/hooks";
import { fetchForChartData } from "../../lib/features/chart/services/fetchForChartData";

const OPTIONS = [
  { value: "YTD", label: "Year to date (YTD)" },
  { value: "T12M", label: "T12M" },
  { value: "last-year", label: "Last Year" },
]

export const BusinessOverviewCharts = () => {
  const [filter, setFilter] = useState(OPTIONS[0])
  const { chartOptions, series, isLoading } = useAppSelector(state => state.chart)
  const dispatch = useAppDispatch()

  const charts = chartOptions?.reduce((acc, curr) => {
    let props = {
      series: series.map(i => ({
        ...i,
        color: i.type === "column" ? colors["primary-main"] : colors["warning-main"]
      }))
    }

    return { ...acc, [curr]: <Chart {...props} categories={["Jan", "Fev", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]} /> }
  }, {}) ?? {}

  useEffect(() => {
    dispatch(fetchForChartData(filter.value))
  }, [filter])
  
  return (
    <LoadingContainer isLoading={isLoading}>
      <section 
        aria-labelledby="business-overview-charts" 
        className={styles.container}
      >
        <header>
          <h6 className="medium" id="business-overview-charts">Business Overview</h6>
          <Select options={OPTIONS} value={filter} onChange={v => setFilter(v)} />
        </header>

        {chartOptions && components && <Tabs options={chartOptions} components={charts} />}
      </section>
    </LoadingContainer>
  )
}