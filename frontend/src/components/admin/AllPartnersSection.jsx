// components/admin/AllPartnersSection.jsx
import React from "react";
import AdminTable from "./AdminTable";
import { FadeInUp } from "../motion/animations";

export default function AllPartnersSection() {
  const columns = ["Partner Name", "Email", "Service Type", "Status"];
  const initialData = [
    { "Partner Name": "EcoTrans", Email: "eco@partners.com", "Service Type": "Transport", Status: "Active" },
    { "Partner Name": "GreenShop", Email: "shop@partners.com", "Service Type": "Delivery", Status: "Active" },
    { "Partner Name": "FastMove", Email: "fast@partners.com", "Service Type": "Logistics", Status: "Inactive" },
  ];

  return (
    <FadeInUp>
      <AdminTable columns={columns} initialData={initialData} title="All Partners" />
    </FadeInUp>
  );
}
