import React, { useState } from "react";
import { FadeInUp } from "../motion/animations";

export default function RiderPackage() {
  const [packages, setPackages] = useState([
    { id: 1, name: "Package 1", status: "Pending", details: "Pickup from Kigali, delivery in Gasabo" },
    { id: 2, name: "Package 2", status: "Assigned", details: "Pickup from Musanze, delivery in Kigali" },
    { id: 3, name: "Package 3", status: "Pending", details: "Pickup from Huye, delivery in Kigali" },
    { id: 4, name: "Package 4", status: "Assigned", details: "Pickup from Rubavu, delivery in Gasabo" },
    { id: 5, name: "Package 5", status: "Pending", details: "Pickup from Kigali, delivery in Nyarugenge" },
    { id: 6, name: "Package 6", status: "Assigned", details: "Pickup from Musanze, delivery in Huye" },
  ]);

  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const packagesPerPage = 3;

  const updateStatus = (id, newStatus) => {
    setPackages((prev) =>
      prev.map((pkg) => (pkg.id === id ? { ...pkg, status: newStatus } : pkg))
    );
  };

  // Filter packages by search term (details)
  const filteredPackages = packages.filter((pkg) =>
    pkg.details.toLowerCase().includes(search.toLowerCase())
  );

  // Pagination calculations
  const totalPages = Math.ceil(filteredPackages.length / packagesPerPage);
  const startIndex = (currentPage - 1) * packagesPerPage;
  const currentPackages = filteredPackages.slice(startIndex, startIndex + packagesPerPage);

  return (
    <div className="bg-white/80 p-4 rounded-lg shadow-md w-full max-w-3xl mx-auto space-y-4">
      <h2 className="text-2xl font-bold text-green-700 mb-4">Available Packages</h2>

      {/* Search input */}
      <input
        type="text"
        placeholder="Search by details..."
        value={search}
        onChange={(e) => { setSearch(e.target.value); setCurrentPage(1); }}
        className="w-full p-2 border border-green-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-green-400"
      />

      {/* Packages list */}
      {currentPackages.map((pkg, index) => (
        <FadeInUp key={pkg.id} delay={0.1 * index}>
          <div className="border border-green-200 rounded-lg p-3 flex flex-col gap-2 hover:shadow-lg transition-shadow">
            <div className="flex justify-between items-center">
              <span className="font-semibold text-lg">{pkg.name}</span>
              <span
                className={`px-2 py-1 rounded-md text-sm ${
                  pkg.status === "Pending"
                    ? "bg-yellow-200 text-yellow-800"
                    : pkg.status === "Assigned"
                    ? "bg-blue-200 text-blue-800"
                    : pkg.status === "Delivered"
                    ? "bg-green-200 text-green-800"
                    : "bg-gray-200 text-gray-800"
                }`}
              >
                {pkg.status}
              </span>
            </div>
            <p className="text-gray-700">{pkg.details}</p>
            <div className="flex gap-2">
              {pkg.status !== "Delivered" && (
                <button
                  className="px-3 py-1 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                  onClick={() =>
                    updateStatus(pkg.id, pkg.status === "Pending" ? "Assigned" : "Delivered")
                  }
                >
                  {pkg.status === "Pending" ? "Assign Package" : "Mark as Delivered"}
                </button>
              )}
              <button
                className="px-3 py-1 bg-gray-300 rounded-lg hover:bg-gray-400 transition-colors"
                onClick={() => alert(`View ${pkg.name} details`)}
              >
                View Details
              </button>
            </div>
          </div>
        </FadeInUp>
      ))}

      {/* Pagination controls */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-2 mt-4">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            className="px-3 py-1 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors"
            disabled={currentPage === 1}
          >
            Prev
          </button>
          <span className="px-2">{currentPage} / {totalPages}</span>
          <button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            className="px-3 py-1 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors"
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}
