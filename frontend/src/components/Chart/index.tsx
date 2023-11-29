"use client";
import { ChartProps } from "./Chart.interface";
import { useSidebar } from "../../contexts/SidebarContext";
import styles from "./Chart.module.scss"
import dynamic from "next/dynamic";
const ChartComponent = dynamic(() => import("react-apexcharts"), { ssr: false })

export const Chart = ({ series, categories }: ChartProps) => {
  const { isMobile } = useSidebar() 

  const options: ApexCharts.ApexOptions = {
    chart: {
      id: "basic-bar",
      toolbar: {
        show: false
      }
    },
    xaxis: {
      categories,
    },
    legend: {
      markers: {
        width: 32,
        height: 8,
        radius: 0,
      }
    },
  }

  return (
    <div className={styles.container}>
      <ChartComponent
        options={options}
        series={series}
        type="line"
        width={isMobile ? "500px" : "100%"}
        height="400px"
      />
    </div>
  )
}