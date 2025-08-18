// components/admin/HistorySection.jsx
import React from "react";
import AdminTable from "./AdminTable";
import { FadeInUp } from "../motion/animations";

export default function HistorySection() {
  const columns = ["Package", "Rider", "Status", "Date"];
  const initialData = [
    { Package: "Package 1", Rider: "Alice", Status: "Delivered", Date: "2025-08-18" },
    { Package: "Package 2", Rider: "Bob", Status: "In Transit", Date: "2025-08-17" },
    { Package: "Package 3", Rider: "Charlie", Status: "Pending", Date: "2025-08-16" },
  ];

  return (
    <FadeInUp>
      <AdminTable columns={columns} initialData={initialData} title="Delivery History" />
    </FadeInUp>
  );
}
