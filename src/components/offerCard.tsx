
import React from 'react';
import { cn } from '@/lib/utils';

interface OfferCardProps {
  title: string;
  code: string;
  description: string;
  imageUrl: string;
  discount: string;
  expires?: string;
  onClick?: () => void;
  className?: string;
}

const OfferCard = ({
  title,
  code,
  description,
  imageUrl,
  discount,
  expires,
  onClick,
  className,
}: OfferCardProps) => {
  return (
    <div
      className={cn(
        "flex flex-col bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full",
        className
      )}
      onClick={onClick}
    >
      <div className="relative">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-40 object-cover"
        />
        <div className="absolute top-0 right-0 bg-mmt-blue text-white py-1 px-3 rounded-bl-lg">
          {discount}
        </div>
      </div>
      
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="font-bold text-lg text-mmt-blue">{title}</h3>
        <p className="text-gray-600 text-sm my-2">{description}</p>
        
        <div className="mt-auto">
          <div className="bg-gray-100 p-2 rounded flex justify-between items-center">
            <span className="text-sm font-medium text-mmt-darkGray">Code: {code}</span>
            {expires && (
              <span className="text-xs text-gray-500">Expires: {expires}</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferCard;
