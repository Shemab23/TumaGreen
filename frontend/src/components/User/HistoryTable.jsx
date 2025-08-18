import React from "react";
import Table from "../ui/Table";
import { FadeInUp } from "../motion/animations";
import { tableHeaders, tableData } from "../../lib/index";

export default function HistoryTable() {
  return (
    <FadeInUp>
      <div className="w-full max-w-4xl p-4">
        <Table headers={tableHeaders} data={tableData} />
      </div>
    </FadeInUp>
  );
}
