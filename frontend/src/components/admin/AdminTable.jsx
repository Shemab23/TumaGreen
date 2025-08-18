// components/admin/AdminTable.jsx
import React, { useState } from "react";
import { FadeInUp } from "../motion/animations";

export default function AdminTable({ columns, initialData, title }) {
  const [data, setData] = useState(initialData);
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState(new Set());
  const [activeTab, setActiveTab] = useState(0);

  const rowsPerTab = 5;
  const tabCount = Math.ceil(data.length / rowsPerTab);

  const filteredData = data.filter((row) =>
    Object.values(row).some((val) =>
      String(val).toLowerCase().includes(search.toLowerCase())
    )
  );

  const toggleSelect = (idx) => {
    const newSet = new Set(selected);
    newSet.has(idx) ? newSet.delete(idx) : newSet.add(idx);
    setSelected(newSet);
  };

  const deleteSelected = () => {
    setData(data.filter((_, idx) => !selected.has(idx)));
    setSelected(new Set());
  };

  const createNew = () => {
    const newRow = {};
    columns.forEach((col) => (newRow[col] = "New Entry"));
    setData([newRow, ...data]);
  };

  const currentTabRows = filteredData.slice(
    activeTab * rowsPerTab,
    activeTab * rowsPerTab + rowsPerTab
  );

  return (
    <FadeInUp>
      <div className="bg-white/80 p-4 rounded-lg shadow-md space-y-4">
        <h2 className="text-xl font-bold text-green-700">{title}</h2>
        <div className="flex gap-2 mb-2">
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <button
            onClick={createNew}
            className="px-3 py-1 bg-green-600 text-white rounded-md hover:bg-green-700"
          >
            Create New
          </button>
          <button
            onClick={deleteSelected}
            disabled={selected.size === 0}
            className={`px-3 py-1 rounded-md text-white ${
              selected.size ? "bg-red-500 hover:bg-red-600" : "bg-gray-300 cursor-not-allowed"
            }`}
          >
            Delete
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200 rounded-md">
            <thead className="bg-green-200">
              <tr>
                <th></th>
                {columns.map((col, i) => (
                  <th key={i} className="p-2 border-b text-left">
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {currentTabRows.map((row, idx) => {
                const globalIdx = activeTab * rowsPerTab + idx;
                return (
                  <tr key={globalIdx} className="hover:bg-green-50">
                    <td className="p-2 border-b">
                      <input
                        type="checkbox"
                        checked={selected.has(globalIdx)}
                        onChange={() => toggleSelect(globalIdx)}
                      />
                    </td>
                    {columns.map((col, j) => (
                      <td key={j} className="p-2 border-b">
                        {row[col]}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mt-2">
          {Array.from({ length: tabCount }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`px-3 py-1 rounded-md ${
                activeTab === idx ? "bg-green-500 text-white font-bold" : "bg-green-100 text-green-800"
              }`}
            >
              Tab {idx + 1}
            </button>
          ))}
        </div>
      </div>
    </FadeInUp>
  );
}
