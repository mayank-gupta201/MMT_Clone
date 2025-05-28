
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { format } from 'date-fns';
import { Calendar as CalendarIcon, Plane } from 'lucide-react';
import { cn } from '@/lib/utils';

const FlightSearchForm = () => {
  const [tripType, setTripType] = useState('roundtrip');
  const [fromDate, setFromDate] = useState<Date | undefined>(new Date());
  const [toDate, setToDate] = useState<Date | undefined>(
    new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-4">
        <RadioGroup
          defaultValue="roundtrip"
          className="flex flex-wrap gap-4"
          onValueChange={setTripType}
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="roundtrip" id="roundtrip" />
            <Label htmlFor="roundtrip">Round Trip</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="oneway" id="oneway" />
            <Label htmlFor="oneway">One Way</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="multicity" id="multicity" />
            <Label htmlFor="multicity">Multi City</Label>
          </div>
        </RadioGroup>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="from">From</Label>
          <Input id="from" placeholder="Delhi" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="to">To</Label>
          <Input id="to" placeholder="Mumbai" />
        </div>

        <div className="space-y-2">
          <Label>Departure</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className="w-full justify-start text-left font-normal"
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {fromDate ? format(fromDate, "PPP") : <span>Pick a date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0 z-50 pointer-events-auto">
              <Calendar
                mode="single"
                selected={fromDate}
                onSelect={setFromDate}
                initialFocus
                className="p-3 pointer-events-auto"
              />
            </PopoverContent>
          </Popover>
        </div>

        {tripType === 'roundtrip' && (
          <div className="space-y-2">
            <Label>Return</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className="w-full justify-start text-left font-normal"
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {toDate ? format(toDate, "PPP") : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0 z-50 pointer-events-auto">
                <Calendar
                  mode="single"
                  selected={toDate}
                  onSelect={setToDate}
                  initialFocus
                  className="p-3 pointer-events-auto"
                  disabled={(date) => {
                    return fromDate ? date < fromDate : false;
                  }}
                />
              </PopoverContent>
            </Popover>
          </div>
        )}

        <div className="space-y-2">
          <Label htmlFor="travelers">Travelers & Class</Label>
          <Input id="travelers" placeholder="1 Adult, Economy" />
        </div>
      </div>

      <Button className="w-full bg-mmt-orange hover:bg-orange-600 text-white">
        <Plane className="mr-2 h-4 w-4" />
        Search Flights
      </Button>
    </div>
  );
};

export default FlightSearchForm;
