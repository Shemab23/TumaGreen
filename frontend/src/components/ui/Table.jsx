import React, { useState } from "react";

export default function HistoryTable({ headers, data }) {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState(new Set());
  const [collapsed, setCollapsed] = useState({});
  const [activeTab, setActiveTab] = useState(null);

  // Filter rows by search
  const filterRows = (rows) => {
    return rows.filter((row) =>
      row.some((cell) => String(cell).toLowerCase().includes(search.toLowerCase()))
    );
  };

  const toggleSelect = (id) => {
    const newSet = new Set(selected);
    if (newSet.has(id)) newSet.delete(id);
    else newSet.add(id);
    setSelected(newSet);
  };

  const deleteSelected = () => {
    alert("Delete IDs: " + Array.from(selected).join(", "));
    setSelected(new Set());
  };

  const renderGroup = (groupObj) => {
    const key = groupObj.group;
    const rows = filterRows(groupObj.rows);
    if (!rows.length) return null;

    return (
      <div key={key} style={{ marginBottom: "1rem" }}>
        <div
          onClick={() => setCollapsed((c) => ({ ...c, [key]: !c[key] }))}
          style={{
            cursor: "pointer",
            fontWeight: "bold",
            background: "#f4f4f4",
            padding: "8px 12px",
            borderRadius: "6px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <span>{key} ({rows.length})</span>
          <span>{collapsed[key] ? "▶" : "▼"}</span>
        </div>

        {!collapsed[key] && (
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "5px" }}>
              <thead>
                <tr>
                  <th />
                  {headers.map((h, i) => (
                    <th key={i} style={{ borderBottom: "2px solid #ccc", textAlign: "left", padding: "6px" }}>
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((row, idx) => {
                  const id = key + "-" + idx;
                  return (
                    <tr key={id}>
                      <td>
                        <input
                          type="checkbox"
                          checked={selected.has(id)}
                          onChange={() => toggleSelect(id)}
                        />
                      </td>
                      {row.map((cell, j) => (
                        <td key={j} style={{ borderBottom: "1px solid #eee", padding: "6px" }}>
                          {cell}
                        </td>
                      ))}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    );
  };

  // Split main groups (first 4) and tabs (rest)
  const mainGroups = data.slice(0, 4);
  const tabGroups = data.slice(4);

  return (
    <div style={{ width: "100%", maxWidth: "100%" }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ flex: 1, marginRight: "10px", padding: "8px", borderRadius: "4px", border: "1px solid #ccc" }}
        />
        <button
          onClick={deleteSelected}
          disabled={selected.size === 0}
          style={{
            padding: "8px 14px",
            background: selected.size ? "red" : "#ccc",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            cursor: selected.size ? "pointer" : "not-allowed",
          }}
        >
          Delete
        </button>
      </div>

      {/* Main groups */}
      {mainGroups.map((g) => renderGroup(g))}

      {/* Tab groups */}
      {tabGroups.length > 0 && (
        <div>
          <div style={{ display: "flex", marginBottom: "8px" }}>
            {tabGroups.map((g) => (
              <div
                key={g.group}
                onClick={() => setActiveTab(g.group)}
                style={{
                  padding: "6px 12px",
                  marginRight: "6px",
                  cursor: "pointer",
                  borderBottom: activeTab === g.group ? "2px solid blue" : "1px solid #ddd",
                  fontWeight: activeTab === g.group ? "bold" : "normal",
                }}
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
