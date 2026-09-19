import React from 'react';
import {
  Footprints,
  TrainFront,
  Car,
  Ship,
  Plane,
  Sailboat,
  Waves,
  Sparkles,
  Package,
  Wrench,
  Rocket
} from 'lucide-react';

interface VehicleIconProps {
  iconType: string;
  className?: string;
  era?: 'past' | 'present';
}

export const VehicleIcon: React.FC<VehicleIconProps> = ({ iconType, className = 'w-10 h-10', era }) => {
  switch (iconType) {
    case 'gama':
      return (
        <div className={`relative flex items-center justify-center rounded-[16px] bg-[#e5e5e0] text-[#211922] font-black text-xs ${className}`}>
          <span>가마</span>
        </div>
      );
    case 'ox-cart':
      return (
        <div className={`relative flex items-center justify-center rounded-[16px] bg-[#f6f6f3] border border-[#dadad3] text-[#262622] ${className}`}>
          <Package className="w-5 h-5" />
        </div>
      );
    case 'horse':
      return (
        <div className={`relative flex items-center justify-center rounded-[16px] bg-[#f6f6f3] border border-[#dadad3] text-[#262622] ${className}`}>
          <Sparkles className="w-5 h-5" />
        </div>
      );
    case 'raft':
      return (
        <div className={`relative flex items-center justify-center rounded-[16px] bg-[#f6f6f3] border border-[#dadad3] text-[#262622] ${className}`}>
          <Waves className="w-5 h-5" />
        </div>
      );
    case 'sailboat':
      return (
        <div className={`relative flex items-center justify-center rounded-[16px] bg-[#f6f6f3] border border-[#dadad3] text-[#262622] ${className}`}>
          <Sailboat className="w-5 h-5" />
        </div>
      );
    case 'walking':
      return (
        <div className={`relative flex items-center justify-center rounded-[16px] bg-[#f6f6f3] border border-[#dadad3] text-[#262622] ${className}`}>
          <Footprints className="w-5 h-5" />
        </div>
      );
    case 'train':
      return (
        <div className={`relative flex items-center justify-center rounded-[16px] bg-[#211922] text-[#ffffff] ${className}`}>
          <TrainFront className="w-5 h-5" />
        </div>
      );
    case 'car':
      return (
        <div className={`relative flex items-center justify-center rounded-[16px] bg-[#211922] text-[#ffffff] ${className}`}>
          <Car className="w-5 h-5" />
        </div>
      );
    case 'subway':
      return (
        <div className={`relative flex items-center justify-center rounded-[16px] bg-[#211922] text-[#ffffff] ${className}`}>
          <TrainFront className="w-5 h-5" />
        </div>
      );
    case 'ship':
      return (
        <div className={`relative flex items-center justify-center rounded-[16px] bg-[#211922] text-[#ffffff] ${className}`}>
          <Ship className="w-5 h-5" />
        </div>
      );
    case 'plane':
      return (
        <div className={`relative flex items-center justify-center rounded-[16px] bg-[#211922] text-[#ffffff] ${className}`}>
          <Plane className="w-5 h-5" />
        </div>
      );
    case 'uam':
      return (
        <div className={`relative flex items-center justify-center rounded-[16px] bg-[#e60023] text-[#ffffff] ${className}`}>
          <Rocket className="w-5 h-5" />
        </div>
      );
    default:
      return (
        <div className={`relative flex items-center justify-center rounded-[16px] bg-[#f6f6f3] border border-[#dadad3] text-[#262622] ${className}`}>
          <Wrench className="w-5 h-5" />
        </div>
      );
  }
};
