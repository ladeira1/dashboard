import { defaultView } from "./defaultView";

export const tableView = {
  ...defaultView,
  list: (table: any) => {
    return {
      columns: table.columns,
    }
  },
}