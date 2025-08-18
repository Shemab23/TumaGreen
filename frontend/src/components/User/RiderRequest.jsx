import React, { useState } from "react";
import { FadeInUp } from "../motion/animations";

export default function RideRequest() {
  const [service, setService] = useState("delivery");
  const [size, setSize] = useState("small");
  const [pickup, setPickup] = useState("");
  const [pickupContact, setPickupContact] = useState("");
  const [destination, setDestination] = useState("");
  const [destinationContact, setDestinationContact] = useState("");

  return (
    <FadeInUp>
      <div className="w-full max-w-lg bg-white/80 backdrop-blur-md rounded-xl p-4 flex flex-col gap-4 shadow-md">
        <h3 className="text-xl font-bold text-green-700 text-center">Request a Ride</h3>

        <div className="flex flex-col gap-2">
          <label className="font-medium text-green-800">Service</label>
          <select
            className="p-2 border rounded-lg bg-green-50"
            value={service}
            onChange={(e) => setService(e.target.value)}
          >
            <option value="delivery">Delivery</option>
            <option value="ride">Ride</option>
            <option value="delivery_ride">Delivery + Ride</option>
          </select>
        </div>

        <div className="flex flex-col gap-2">
          <label className="font-medium text-green-800">Item size</label>
          <select
            className="p-2 border rounded-lg bg-green-50"
            value={size}
            onChange={(e) => setSize(e.target.value)}
          >
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
        </div>

        <div className="flex flex-col gap-2">
          <label className="font-medium text-green-800">Pickup Location</label>
          <input
            type="text"
            className="p-2 border rounded-lg bg-green-50"
            placeholder="District - Sector"
            value={pickup}
            onChange={(e) => setPickup(e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="font-medium text-green-800">Pickup Contact</label>
          <input
            type="text"
            className="p-2 border rounded-lg bg-green-50"
            placeholder="+250 7xxxxxxx"
            value={pickupContact}
            onChange={(e) => setPickupContact(e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="font-medium text-green-800">Destination</label>
          <input
            type="text"
            className="p-2 border rounded-lg bg-green-50"
            placeholder="District - Sector"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="font-medium text-green-800">Destination Contact</label>
          <input
            type="text"
            className="p-2 border rounded-lg bg-green-50"
            placeholder="+250 7xxxxxxx"
            value={destinationContact}
            onChange={(e) => setDestinationContact(e.target.value)}
          />
        </div>

        <div className="text-right font-bold text-lg text-green-700">Total Price: #</div>
      </div>
    </FadeInUp>
  );
}
