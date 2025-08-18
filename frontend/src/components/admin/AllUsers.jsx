// components/admin/AllUsersSection.jsx
import React from "react";
import AdminTable from "./AdminTable";
import { FadeInUp } from "../motion/animations";

export default function AllUsersSection() {
  const columns = ["Name", "Email", "Role", "Status"];
  const initialData = [
    { Name: "John", Email: "john@example.com", Role: "User", Status: "Active" },
    { Name: "Mary", Email: "mary@example.com", Role: "User", Status: "Blocked" },
    { Name: "Steve", Email: "steve@example.com", Role: "User", Status: "Active" },
  ];

  return (
    <FadeInUp>
      <AdminTable columns={columns} initialData={initialData} title="All Users" />
    </FadeInUp>
  );
}
