import React, { useState } from "react";
import { ZoomIn } from "../motion/animations";

export default function PaymentSection() {
  const [method, setMethod] = useState("momo");

  return (
    <ZoomIn>
      <div className="w-full max-w-lg bg-white/80 backdrop-blur-md rounded-xl p-4 shadow-md flex flex-col gap-4">
        <h3 className="text-xl font-bold text-green-700 text-center">Payment</h3>

        <div className="flex justify-evenly">
          <label
            className={method === "momo" ? "font-bold underline cursor-pointer" : "cursor-pointer"}
            onClick={() => setMethod("momo")}
          >
            MOMO
          </label>
          <label
            className={method === "bank" ? "font-bold underline cursor-pointer" : "cursor-pointer"}
            onClick={() => setMethod("bank")}
          >
            Bank Card
          </label>
        </div>

        {method === "momo" ? (
          <div className="flex flex-col gap-3">
            <input className="p-2 border rounded-lg bg-green-50" placeholder="MOMO Number" />
            <input className="p-2 border rounded-lg bg-green-50" placeholder="MOMO Name" />
            <button className="bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors">
              Submit
            </button>
          </div>
        ) : (
          <div className="flex flex-col gap-3">
            <input className="p-2 border rounded-lg bg-green-50" placeholder="Card Owner" />
            <input className="p-2 border rounded-lg bg-green-50" placeholder="Bank Issuer" />
            <button className="bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors">
              Make Payment
            </button>
          </div>
        )}
      </div>
    </ZoomIn>
  );
}
