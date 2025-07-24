import React from 'react';
import { CONTACT_INFO } from '../constants';
import { MapPinIcon, PhoneIcon } from './IconComponents';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-10 mt-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-8">
          <div className="flex flex-col gap-3">
             <h3 className="font-bold text-lg text-white mb-2">Contact Us</h3>
            <div className="flex items-center justify-center md:justify-start gap-3">
              <MapPinIcon className="w-5 h-5 text-indigo-400 flex-shrink-0" />
              <span>{CONTACT_INFO.address}</span>
            </div>
            <div className="flex flex-col items-center md:items-start gap-2">
                {CONTACT_INFO.phone.map((number, index) => (
                  <div key={index} className="flex items-center justify-center md:justify-start gap-3">
                    <PhoneIcon className="w-5 h-5 text-indigo-400 flex-shrink-0" />
                    <a href={`tel:${number}`} className="hover:text-white transition-colors">{number}</a>
                  </div>
                ))}
            </div>
          </div>
          <div className="text-center">
             <h2 className="text-xl font-bold text-white">Chennai Rentals</h2>
            <p className="mt-2">&copy; {new Date().getFullYear()}. All Rights Reserved.</p>
            <p className="text-sm text-slate-500 mt-1">Your one-stop shop for all rental needs in Chennai.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;