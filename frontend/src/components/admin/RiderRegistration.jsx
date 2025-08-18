// components/admin/RiderRegistration.jsx
import React from "react";
import AdminTable from "./AdminTable";
import { FadeInUp } from "../motion/animations";

export default function RiderRegistration() {
  const columns = ["Rider Name", "Email", "Phone", "Status"];
  const initialData = [
    { "Rider Name": "Alice", Email: "alice@example.com", Phone: "0788 123 456", Status: "Pending" },
    { "Rider Name": "Bob", Email: "bob@example.com", Phone: "0788 987 654", Status: "Pending" },
    { "Rider Name": "Charlie", Email: "charlie@example.com", Phone: "0788 111 222", Status: "Approved" },
  ];

  return (
    <FadeInUp>
      <AdminTable columns={columns} initialData={initialData} title="Rider Registration" />
    </FadeInUp>
  );
}
