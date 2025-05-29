
import React, { useState } from 'react';
import { Plane, Hotel, Train, Bus } from 'lucide-react';
import { cn } from '@/lib/utils';
import FlightSearchForm from './FlightSearchForm';
import HotelSearchForm from './HotelSearchForm';
import TrainSearchForm from './TrainSearchForm';
import BusSearchForm from './BusSearchForm';

type TabType = 'flights' | 'hotels' | 'trains' | 'buses';

const SearchTabs = () => {
  const [activeTab, setActiveTab] = useState<TabType>('flights');

  const tabs = [
    { id: 'flights' as TabType, label: 'Flights', icon: Plane },
    { id: 'hotels' as TabType, label: 'Hotels', icon: Hotel },
    { id: 'trains' as TabType, label: 'Trains', icon: Train },
    { id: 'buses' as TabType, label: 'Buses', icon: Bus },
  ];

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden animate-fade-in">
      {/* Tabs */}
      <div className="flex">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              "flex-1 py-4 px-2 flex flex-col items-center justify-center transition-colors duration-300",
              activeTab === tab.id 
                ? "bg-mmt-blue text-white" 
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            )}
          >
            <tab.icon className="h-5 w-5 mb-1" />
            <span className="text-sm md:text-base">{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="p-6">
        {activeTab === 'flights' && <FlightSearchForm />}
        {activeTab === 'hotels' && <HotelSearchForm />}
        {activeTab === 'trains' && <TrainSearchForm />}
        {activeTab === 'buses' && <BusSearchForm />}
      </div>
    </div>
  );
};

export default SearchTabs;
