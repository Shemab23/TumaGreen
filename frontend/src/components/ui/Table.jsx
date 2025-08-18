import React, { useState, useEffect } from "react";
import { FadeInUp } from "../motion/animations";

export default function HistoryTable({ headers, data }) {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState(new Set());

  // Initialize collapsed: all groups start collapsed
  const [collapsed, setCollapsed] = useState({});

  useEffect(() => {
    const initialCollapsed = {};
    data.forEach((group) => {
      initialCollapsed[group.group] = true; // true = collapsed
    });
    setCollapsed(initialCollapsed);
  }, [data]);

  const [activeTab, setActiveTab] = useState(data.length > 4 ? data[4].group : null);

  const filterRows = (rows) =>
    rows.filter((row) =>
      row.some((cell) => String(cell).toLowerCase().includes(search.toLowerCase()))
    );

  const toggleSelect = (id) => {
    const newSet = new Set(selected);
    newSet.has(id) ? newSet.delete(id) : newSet.add(id);
    setSelected(newSet);
  };

  const deleteSelected = () => {
    alert("Delete IDs: " + Array.from(selected).join(", "));
    setSelected(new Set());
  };

  const renderGroup = (groupObj) => {
    if (!groupObj) return null;
    const key = groupObj.group;
    const rows = filterRows(groupObj.rows);
    if (!rows.length) return null;

    return (
      <FadeInUp key={key}>
        <div className="mb-4">
          <div
            onClick={() => setCollapsed((c) => ({ ...c, [key]: !c[key] }))}
            className="cursor-pointer font-bold bg-green-100 p-3 rounded-md flex justify-between items-center"
          >
            <span>{key} ({rows.length})</span>
            <span>{collapsed[key] ? "▶" : "▼"}</span>
          </div>

          {!collapsed[key] && (
            <div className="overflow-x-auto mt-2">
              <table className="min-w-full border border-gray-200 rounded-md">
                <thead className="bg-green-200">
                  <tr>
                    <th className="p-2 border-b"></th>
                    {headers.map((h, i) => (
                      <th key={i} className="p-2 border-b text-left">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row, idx) => {
                    const id = key + "-" + idx;
                    return (
                      <tr key={id} className="hover:bg-green-50">
                        <td className="p-2 border-b">
                          <input
                            type="checkbox"
                            checked={selected.has(id)}
                            onChange={() => toggleSelect(id)}
                          />
                        </td>
                        {row.map((cell, j) => (
                          <td key={j} className="p-2 border-b">{cell}</td>
                        ))}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </FadeInUp>
    );
  };

  const mainGroups = data.slice(0, 4);
  const tabGroups = data.slice(4);

  return (
    <div className="w-full">
      <div className="flex flex-col md:flex-row justify-between mb-4 gap-2">
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
        />
        <button
          onClick={deleteSelected}
          disabled={selected.size === 0}
          className={`p-2 rounded-md text-white ${selected.size ? "bg-red-500 hover:bg-red-600" : "bg-gray-300 cursor-not-allowed"}`}
        >
          Delete
        </button>
      </div>

      {mainGroups.map(renderGroup)}

      {tabGroups.length > 0 && (
        <div>
          <div className="flex flex-wrap gap-2 mb-2">
            {tabGroups.map((g) => (
              <div
                key={g.group}
                onClick={() => setActiveTab(g.group)}
                className={`px-3 py-1 rounded-md cursor-pointer ${activeTab === g.group ? "bg-green-500 text-white font-bold" : "bg-green-100 text-green-800"}`}
              >
                {g.group}
              </div>
            ))}
          </div>
          {activeTab && renderGroup(data.find((d) => d.group === activeTab))}
        </div>
      )}
    </div>
  );
}
