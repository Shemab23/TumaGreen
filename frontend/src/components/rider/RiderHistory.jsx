import React from "react";
import HistoryTable from "../ui/Table"; // use the shared Table component

export default function RiderHistory() {
  const tableHeaders = ["Package", "Status", "Date"];
  const tableData = [
    {
      group: "Recent Packages",
      rows: [
        ["Package 1", "Delivered", "2025-08-18"],
        ["Package 2", "In Transit", "2025-08-17"],
      ],
    },
    {
      group: "Older Packages",
      rows: [
        ["Package 3", "Delivered", "2025-08-15"],
      ],
    },
  ];

  return (
    <div className="bg-white/80 p-4 rounded-lg shadow-md w-full max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold text-green-700 mb-4">History</h2>
      <HistoryTable headers={tableHeaders} data={tableData} />
    </div>
  );
}
