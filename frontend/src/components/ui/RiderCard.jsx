import React from 'react';
import { motion as Motion } from 'framer-motion';
import { Star, MapPin, Zap, ShieldCheck } from 'lucide-react';

const RiderCard = ({ rider}) => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'available':
        return 'text-green-600';
      case 'in-transit':
        return 'text-yellow-600';
      default:
        return 'text-gray-500';
    }
  };

  const getStatusIndicator = (status) => {
    switch (status) {
      case 'available':
        return 'status-available';
      case 'in-transit':
        return 'status-in-transit';
      default:
        return 'status-offline';
    }
  };


  return (
    <Motion.div
      className="bg-white rounded-xl p-5 border border-green-100 shadow-green-light hover:shadow-green-medium transition-shadow duration-300"
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
            <span className="text-green-700 font-bold text-lg">
              {rider.name.split(' ').map(n => n[0]).join('')}
            </span>
          </div>
          <div>
            <h3 className="font-semibold text-green-800">{rider.name}</h3>
            <p className="text-sm text-green-600">{rider.vehicleType}</p>
          </div>
        </div>
        <div className="flex items-center space-x-1.5">
          <div className={`h-[10px] w-[10px] rounded-full bg-green-600 ${getStatusIndicator(rider.status)}`}></div>{/** a bug this green button will always show available, require a state to manage this based on user's database info */}
          <span className={`text-xs font-medium capitalize ${getStatusColor(rider.status)}`}>
            {rider.status.replace('-', ' ')}
          </span>
        </div>
      </div>

      <div className="space-y-2.5 mb-5">
        <div className="flex items-center text-sm text-green-700">
          <Star className="w-4 h-4 text-yellow-500 mr-1.5" />
          <span className="font-medium">{rider.rating}</span>
          <span className="mx-1.5 text-green-300">|</span>
          <ShieldCheck className="w-4 h-4 text-green-500 mr-1.5" />
          <span>{rider.deliveriesCompleted} deliveries</span>
        </div>
        <div className="flex items-center text-sm text-green-700">
          <MapPin className="w-4 h-4 text-green-500 mr-1.5" />
          <span>{rider.distance} away</span>
          <span className="mx-1.5 text-green-300">|</span>
          <Zap className="w-4 h-4 text-green-500 mr-1.5" />
          <span>ETA: {rider.eta}</span>
        </div>
      </div>

      <button
        className="w-full bg-green-600 h-[40px]  text-white rounded-md font-medium"
        onClick={() => alert(`feature not yet available`)}
        disabled={rider.status !== 'available'}
      >
        {rider.status === 'available' ? 'Book Green Ride' : 'Unavailable'}
      </button>
    </Motion.div>
  );
};

export default RiderCard;
