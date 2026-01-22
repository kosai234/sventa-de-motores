
import React from 'react';
import { Car } from '../types';

interface CarCardProps {
  car: Car;
}

const CarCard: React.FC<CarCardProps> = ({ car }) => {
  return (
    <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full">
      <div className="relative h-64 overflow-hidden">
        <img 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
          src={car.imageUrl} 
          alt={`${car.brand} ${car.model}`}
        />
        {car.tag && (
          <div className={`absolute top-4 left-4 ${car.tagColor} text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm`}>
            {car.tag}
          </div>
        )}
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-[#111418]">{car.brand} {car.model}</h3>
          <span className="text-primary text-xl font-black">
            ${car.price.toLocaleString('en-US')}
          </span>
        </div>
        <p className="text-gray-500 text-sm mb-6">{car.year} • {car.specs}</p>
        
        <div className="mt-auto grid grid-cols-3 gap-2 border-t border-gray-100 pt-4">
          <div className="flex flex-col items-center gap-1 text-center">
            <span className="material-symbols-outlined text-gray-400 text-lg">speed</span>
            <span className="text-[10px] font-bold text-gray-500 uppercase">{car.mileage}</span>
          </div>
          <div className="flex flex-col items-center gap-1 text-center">
            <span className="material-symbols-outlined text-gray-400 text-lg">settings_input_component</span>
            <span className="text-[10px] font-bold text-gray-500 uppercase truncate w-full px-1">{car.transmission}</span>
          </div>
          <div className="flex flex-col items-center gap-1 text-center">
            <span className="material-symbols-outlined text-gray-400 text-lg">local_gas_station</span>
            <span className="text-[10px] font-bold text-gray-500 uppercase">{car.fuelType}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
