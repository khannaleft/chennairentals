import React, { useState, useEffect } from 'react';
import { RentalItem } from '../types';
import { generateItemDescription } from '../services/geminiService';
import { CalendarIcon, CloseIcon, UserIcon, PhoneIcon } from './IconComponents';

interface ItemDetailModalProps {
  item: RentalItem | null;
  onClose: () => void;
}

const LoadingSpinner: React.FC = () => (
    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-indigo-600"></div>
);

const ItemDetailModal: React.FC<ItemDetailModalProps> = ({ item, onClose }) => {
  const [description, setDescription] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (item) {
      const fetchDescription = async () => {
        setIsLoading(true);
        setError('');
        try {
          const desc = await generateItemDescription(item.name, item.categoryName);
          setDescription(desc);
        } catch (err) {
          setError('Failed to load description.');
          console.error(err);
        } finally {
          setIsLoading(false);
        }
      };
      fetchDescription();
    }
  }, [item]);

  if (!item) return null;

  return (
    <div
      className="fixed inset-0 bg-black/70 flex justify-center items-center z-[100] p-4 transition-opacity duration-300 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-slate-50 rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col md:flex-row overflow-hidden transform transition-all duration-300 scale-95 animate-modal-enter"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-full md:w-5/12 h-64 md:h-auto">
            <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover" />
        </div>
        <div className="w-full md:w-7/12 p-6 md:p-8 flex flex-col overflow-y-auto">
          <div className="flex justify-between items-start mb-2">
             <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900">{item.name}</h2>
             <button onClick={onClose} className="text-slate-400 hover:text-slate-700 transition-colors p-1 rounded-full hover:bg-slate-200">
                <CloseIcon className="w-7 h-7" />
             </button>
          </div>

          <p className="font-black text-indigo-600 my-4 flex items-baseline flex-wrap">
            {item.price.to ? (
              <>
                <span className="text-4xl lg:text-5xl">
                  ₹{item.price.from.toLocaleString('en-IN')}
                </span>
                <span className="text-3xl lg:text-4xl font-semibold text-slate-400 mx-2">-</span>
                <span className="text-4xl lg:text-5xl">
                  ₹{item.price.to.toLocaleString('en-IN')}
                </span>
              </>
            ) : (
              <>
                <span className="text-2xl lg:text-3xl font-medium text-slate-500 mr-2">From</span>
                <span className="text-4xl lg:text-5xl">
                  ₹{item.price.from.toLocaleString('en-IN')}
                </span>
              </>
            )}
            <span className="text-xl font-medium text-slate-500 ml-2">/day</span>
          </p>
          
          <div className="text-slate-600 mb-6 min-h-[6rem] flex items-center border-l-4 border-indigo-200 pl-4">
            {isLoading && <div className="flex items-center space-x-3"><LoadingSpinner /> <span className="text-slate-500 text-lg">Generating description...</span></div>}
            {error && <p className="text-red-500">{error}</p>}
            {!isLoading && !error && <p className="text-lg leading-relaxed">{description}</p>}
          </div>

          <form className="space-y-4 mt-auto">
            <h3 className="text-xl font-bold text-slate-800 border-b pb-2 mb-4">Book Now</h3>
            <div>
              <label htmlFor="name" className="text-sm font-semibold text-slate-700">Name</label>
              <div className="relative mt-1">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <UserIcon className="w-5 h-5 text-slate-400" />
                </div>
                <input type="text" id="name" className="w-full pl-10 pr-3 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition" placeholder="Your Name" />
              </div>
            </div>
            <div>
              <label htmlFor="phone" className="text-sm font-semibold text-slate-700">Phone</label>
              <div className="relative mt-1">
                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <PhoneIcon className="w-5 h-5 text-slate-400" />
                </div>
                <input type="tel" id="phone" className="w-full pl-10 pr-3 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition" placeholder="Contact Number" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
               <div>
                  <label htmlFor="start-date" className="text-sm font-semibold text-slate-700">From</label>
                   <div className="relative mt-1">
                     <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                       <CalendarIcon className="w-5 h-5 text-slate-400" />
                     </div>
                     <input type="date" id="start-date" className="w-full pl-10 pr-2 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"/>
                   </div>
               </div>
               <div>
                  <label htmlFor="end-date" className="text-sm font-semibold text-slate-700">To</label>
                  <div className="relative mt-1">
                     <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                       <CalendarIcon className="w-5 h-5 text-slate-400" />
                     </div>
                     <input type="date" id="end-date" className="w-full pl-10 pr-2 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"/>
                  </div>
               </div>
            </div>
            <div className="pt-4">
                <button type="submit" onClick={(e) => {e.preventDefault(); onClose();}} className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold py-3 px-4 rounded-xl hover:from-purple-700 hover:to-indigo-700 focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-indigo-500/50 transition-all duration-300 transform hover:scale-105">
                    Confirm Booking
                </button>
            </div>
          </form>
        </div>
      </div>
      <style>{`
        @keyframes modal-enter {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-modal-enter { animation: modal-enter 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
      `}</style>
    </div>
  );
};

export default ItemDetailModal;
