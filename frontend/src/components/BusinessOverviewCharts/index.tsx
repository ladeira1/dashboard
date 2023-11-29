"use client";
import { useEffect, useState } from "react"
import { Select } from "../Select"
import styles from "./BusinessOverviewCharts.module.scss"
import { handleClassNames } from "../../utils/handleClassNames"
import { useSidebar } from "../../contexts/SidebarContext"
import { Tabs } from "../Tabs";
import { components } from "react-select";
import { Chart } from "../Chart";
import colors from "@/styles/variables/colors.module.scss";
import { ChartData } from "./BusinessOverviewCharts.interface";

const OPTIONS = [
  { value: "YTD", label: "Year to date (YTD)" },
  { value: "T12M", label: "T12M" },
  { value: "last-year", label: "Last Year" },
]

const getChartData = async (filter: string): Promise<ChartData> => {
  // fetch for API
  return {
    chartOptions: ["Opportunities", "GSS", "Private Offers", "Active Subscribers"],
    series: [
      {
        name: "Total Count (AO + PO)",
        type: "column",
        data: [80.5, 40, 45, 50, 49, 60, 70, 91, 110.44, 96, 44, 32],
      },
      {
        name: "AWS Originated Opportunities Tab",
        type: "line",
        data: [23, 42, 35, 27, 12, 22, 10, 22, 22, 20, 12, 16],
      },
    ]
  }
}

export const BusinessOverviewCharts = () => {
  const [filter, setFilter] = useState(OPTIONS[0])
  const [data, setData] = useState<ChartData>()
  const { isCollapsed } = useSidebar()

  const charts = data?.chartOptions?.reduce((acc, curr) => {
    let props = {
      series: data?.series.map(i => ({
        ...i,
        color: i.type === "column" ? colors["primary-main"] : colors["warning-main"]
      }))
    }

    return { ...acc, [curr]: <Chart {...props} categories={["Jan", "Fev", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]} /> }
  }, {}) ?? {}

  useEffect(() => {
    (async () => {
      const data = await getChartData(filter.value)
      setData(data)
    })()
  }, [filter])
  
  return (
    <section 
      aria-labelledby="business-overview-charts" 
      className={handleClassNames([styles.container, isCollapsed ? "collapsed-margin-left" : "open-margin-left"])}
    >
      <header>
        <h6 className="medium" id="business-overview-charts">Business Overview</h6>
        <Select options={OPTIONS} value={filter} onChange={v => setFilter(v)} />
      </header>

      {data && components && <Tabs options={data?.chartOptions}  components={charts} />}
    </section>
  )
}