import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";

const BarSpentChart = ({ data }) => (
  <div className="bg-white p-4 rounded-lg shadow-md">
    <h3 className="text-lg font-semibold mb-2 text-green-700">Spent vs Remaining</h3>
    <ResponsiveContainer width="100%" height={250}>
      <BarChart data={data}>
        <XAxis dataKey="Expense" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="Spent" fill="#0088FE" />
        <Bar dataKey="Remaining" fill="#00C49F" />
      </BarChart>
    </ResponsiveContainer>
  </div>
);

export default BarSpentChart;
