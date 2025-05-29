
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
import { Calendar as CalendarIcon, Train } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const TrainSearchForm = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="from">From</Label>
          <Input id="from" placeholder="New Delhi" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="to">To</Label>
          <Input id="to" placeholder="Mumbai" />
        </div>

        <div className="space-y-2">
          <Label>Travel Date</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className="w-full justify-start text-left font-normal"
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, "PPP") : <span>Pick a date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0 z-50 pointer-events-auto">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
                className="p-3 pointer-events-auto"
              />
            </PopoverContent>
          </Popover>
        </div>

        <div className="space-y-2">
          <Label htmlFor="class">Travel Class</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="All Classes" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Classes</SelectItem>
              <SelectItem value="sl">Sleeper (SL)</SelectItem>
              <SelectItem value="ac3">AC 3 Tier (3A)</SelectItem>
              <SelectItem value="ac2">AC 2 Tier (2A)</SelectItem>
              <SelectItem value="ac1">AC First Class (1A)</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <Button className="w-full bg-mmt-orange hover:bg-orange-600 text-white">
        <Train className="mr-2 h-4 w-4" />
        Search Trains
      </Button>
    </div>
  );
};

export default TrainSearchForm;
