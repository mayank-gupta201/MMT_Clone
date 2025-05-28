
import React from 'react';
import { cn } from '@/lib/utils';

interface DestinationCardProps {
  title: string;
  imageUrl: string;
  description: string;
  price: string;
  onClick?: () => void;
  className?: string;
  style?: React.CSSProperties;
}

const DestinationCard = ({
  title,
  imageUrl,
  description,
  price,
  onClick,
  className,
  style,
}: DestinationCardProps) => {
  return (
    <div
      className={cn(
        "destination-card group relative overflow-hidden rounded-lg transition-all duration-300 hover:shadow-xl cursor-pointer",
        className
      )}
      onClick={onClick}
      style={style}
    >
      <div className="aspect-[4/3] w-full">
        <img
          src={imageUrl}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      
      <div className="destination-card-overlay absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-80 transition-opacity duration-300"></div>

      <div className="destination-card-content absolute bottom-0 left-0 right-0 p-4 transition-transform duration-300">
        <h3 className="text-xl font-bold text-white">{title}</h3>
        <p className="text-sm text-white/80">{description}</p>
        <div className="mt-2">
          <span className="inline-block bg-mmt-orange px-2 py-1 rounded text-white text-sm font-medium">
            Starting from {price}
          </span>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;
