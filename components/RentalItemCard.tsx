import React from 'react';
import { RentalItem } from '../types';

interface RentalItemCardProps {
  item: RentalItem;
  onViewDetails: (item: RentalItem) => void;
}

const RentalItemCard: React.FC<RentalItemCardProps> = ({ item, onViewDetails }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col group border-transparent hover:border-purple-500 border-2 transition-all duration-300">
      <div className="h-52 overflow-hidden">
        <img
          src={item.imageUrl}
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-5 flex flex-col flex-grow bg-white">
        <h3 className="text-lg font-bold text-slate-900 truncate">{item.name}</h3>
        <div className="my-2 h-10 flex items-center">
          <p className="flex items-baseline flex-wrap">
            {item.price.to ? (
              <>
                <span className="text-3xl font-black text-indigo-600">
                  ₹{item.price.from.toLocaleString('en-IN')}
                </span>
                <span className="text-2xl font-semibold text-slate-400 mx-1">-</span>
                <span className="text-3xl font-black text-indigo-600">
                  ₹{item.price.to.toLocaleString('en-IN')}
                </span>
              </>
            ) : (
              <>
                <span className="text-xl font-medium text-slate-500 mr-2">From</span>
                <span className="text-3xl font-black text-indigo-600">
                  ₹{item.price.from.toLocaleString('en-IN')}
                </span>
              </>
            )}
            <span className="text-base font-medium text-slate-500 ml-1.5">/day</span>
          </p>
        </div>
        <div className="mt-auto pt-4">
          <button
            onClick={() => onViewDetails(item)}
            className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold py-3 px-4 rounded-lg hover:from-purple-700 hover:to-indigo-700 focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-indigo-500/50 transition-all duration-300 transform group-hover:scale-105"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default RentalItemCard;
