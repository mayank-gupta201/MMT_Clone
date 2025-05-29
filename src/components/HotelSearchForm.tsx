
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { format } from 'date-fns';
import { Calendar as CalendarIcon, Search } from 'lucide-react';

const HotelSearchForm = () => {
  const [checkIn, setCheckIn] = useState<Date | undefined>(new Date());
  const [checkOut, setCheckOut] = useState<Date | undefined>(
    new Date(Date.now() + 3 * 24 * 60 * 60 * 1000)
  );

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="city">City, Area or Property</Label>
        <Input id="city" placeholder="Goa" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label>Check In</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className="w-full justify-start text-left font-normal"
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {checkIn ? format(checkIn, "PPP") : <span>Pick a date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0 z-50 pointer-events-auto">
              <Calendar
                mode="single"
                selected={checkIn}
                onSelect={setCheckIn}
                initialFocus
                className="p-3 pointer-events-auto"
                disabled={(date) => {
                  return date < new Date(new Date().setHours(0, 0, 0, 0));
                }}
              />
            </PopoverContent>
          </Popover>
        </div>

        <div className="space-y-2">
          <Label>Check Out</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className="w-full justify-start text-left font-normal"
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {checkOut ? format(checkOut, "PPP") : <span>Pick a date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0 z-50 pointer-events-auto">
              <Calendar
                mode="single"
                selected={checkOut}
                onSelect={setCheckOut}
                initialFocus
                className="p-3 pointer-events-auto"
                disabled={(date) => {
                  return checkIn ? date <= checkIn : date < new Date(new Date().setHours(0, 0, 0, 0));
                }}
              />
            </PopoverContent>
          </Popover>
        </div>

        <div className="space-y-2">
          <Label htmlFor="rooms">Rooms & Guests</Label>
          <Input id="rooms" placeholder="1 Room, 2 Adults" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="priceRange">Price Range</Label>
          <Input id="priceRange" placeholder="₹0 - ₹15000+" />
        </div>
      </div>

      <Button className="w-full bg-mmt-orange hover:bg-orange-600 text-white">
        <Search className="mr-2 h-4 w-4" />
        Search Hotels
      </Button>
    </div>
  );
};

export default HotelSearchForm;
