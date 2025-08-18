import React, { useState } from "react";
import { FadeInUp } from "../motion/animations";

const stepsData = [
  {
    title: "Request Received",
    status: "Done",
    description: "Your request has been successfully received by our system and is waiting to be assigned to a rider.",
  },
  {
    title: "Rider Found",
    status: "Pending",
    description: "We are searching for the best rider available to fulfill your request.",
  },
  {
    title: "Collecting Package",
    status: "Not Started",
    description: "The rider is on the way to collect the package from the pickup location.",
  },
  {
    title: "Package Delivered",
    status: "Not Started",
    description: "The package is being delivered to the destination and will be marked as complete once received.",
  },
];

export default function ProgressSteps() {
  const [expandedSteps, setExpandedSteps] = useState([]);

  const toggleStep = (index) => {
    if (expandedSteps.includes(index)) {
      setExpandedSteps(expandedSteps.filter((i) => i !== index));
    } else {
      setExpandedSteps([...expandedSteps, index]);
    }
  };

  const statusColors = {
    "Done": "bg-green-200 text-green-800",
    "Pending": "bg-yellow-200 text-yellow-800",
    "Canceled": "bg-red-200 text-red-800",
    "Not Started": "bg-gray-200 text-gray-800",
  };

  return (
    <div className="flex flex-col gap-4">
      {stepsData.map((step, index) => (
        <FadeInUp key={index}>
          <div className="bg-white/80 rounded-lg p-4 shadow-md flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <div className="font-bold text-lg">{step.title}</div>
              <div className={`px-2 py-1 rounded-lg font-semibold ${statusColors[step.status]}`}>
                {step.status}
              </div>
            </div>

            {expandedSteps.includes(index) && (
              <div className="text-gray-700 mt-2">{step.description}</div>
            )}

            <div
              className="text-blue-600 font-medium cursor-pointer mt-1 select-none"
              onClick={() => toggleStep(index)}
            >
              {expandedSteps.includes(index) ? "less" : "more..."}
            </div>
          </div>
        </FadeInUp>
      ))}
    </div>
  );
}
