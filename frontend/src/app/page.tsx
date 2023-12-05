"use client";
import { WidgetList } from "../components/WidgetList";
import styles from "@/styles/pages/Home.module.scss"
import { SidebarContextProvider, useSidebar } from "../contexts/SidebarContext";
import { Sidebar } from "../components/Sidebar";
import { BusinessOverviewCharts } from "../components/BusinessOverviewCharts";
import { CardsList } from "../components/CardsList";
import { BusinessOverviewTable } from "../components/BusinessOverviewTable";
import { Header } from "../components/Header";
import StoreProvider from "./StoreProvider";

export default function Home() {
  return (
    <div className="row">
      <StoreProvider>
        <SidebarContextProvider>
          <Sidebar />
            <Header />
            <main className={styles.container}>
              <WidgetList />
              <BusinessOverviewCharts />
              <CardsList />
              <BusinessOverviewTable />
            </main>
        </SidebarContextProvider>
      </StoreProvider>
    </div>
  )
}
