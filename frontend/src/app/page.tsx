"use client";
import { WidgetList } from "../components/WidgetList";
import styles from "@/styles/pages/Home.module.scss"
import { SidebarContextProvider, useSidebar } from "../contexts/SidebarContext";
import { Sidebar } from "../components/Sidebar";
import { BusinessOverviewCharts } from "../components/BusinessOverviewCharts";
import { CardsList } from "../components/CardsList";

export default function Home() {
  return (
    <div className="row">
      <SidebarContextProvider>
        <Sidebar />
        <main className={styles.container}>
          <WidgetList />
          <BusinessOverviewCharts />
          <CardsList />
        </main>
      </SidebarContextProvider>
    </div>
  )
}
