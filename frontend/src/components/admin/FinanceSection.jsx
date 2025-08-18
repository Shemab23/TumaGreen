import React, { lazy, Suspense } from "react";
import AdminTable from "./AdminTable";
import { FadeInUp } from "../motion/animations";

// Lazy load charts
const PieBudgetChart = lazy(() => import("./Chart/PieBudgetChart"));
const BarSpentChart = lazy(() => import("./Chart/BarSpentChart"));

export default function FinanceSection() {
  const columns = ["Expense", "Allocated Budget", "Spent", "Remaining"];
  const initialData = [
    { Expense: "Marketing", Allocated: 5000, Spent: 2000, Remaining: 3000 },
    { Expense: "Transport", Allocated: 3000, Spent: 1500, Remaining: 1500 },
    { Expense: "Rider Salaries", Allocated: 7000, Spent: 4000, Remaining: 3000 },
    { Expense: "Misc", Allocated: 1000, Spent: 400, Remaining: 600 },
  ];

  return (
    <FadeInUp>
      <div className="grid md:grid-cols-2 gap-6">

        {/* Charts */}
        <div className="space-y-6">
          <Suspense fallback={<div>Loading Pie Chart...</div>}>
            <PieBudgetChart data={initialData} />
          </Suspense>

          <Suspense fallback={<div>Loading Bar Chart...</div>}>
            <BarSpentChart data={initialData} />
          </Suspense>
        </div>

        {/* Table */}
        <div>
          <AdminTable
            columns={columns}
            initialData={initialData.map(d => ({
              Expense: d.Expense,
              "Allocated Budget": `$${d.Allocated}`,
              Spent: `$${d.Spent}`,
              Remaining: `$${d.Remaining}`
            }))}
            title="Finance Overview"
          />
        </div>
      </div>
    </FadeInUp>
  );
}
