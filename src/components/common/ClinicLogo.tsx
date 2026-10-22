import React from 'react';
import { Link } from 'react-router-dom';
import { clinicConfig } from '../../config/clinicConfig';

interface ClinicLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  isFooter?: boolean;
}

export const ClinicLogo: React.FC<ClinicLogoProps> = ({
  className = '',
  size = 'md',
  isFooter = false,
}) => {
  const iconSize = {
    sm: 'w-7 h-7',
    md: 'w-8 h-8 sm:w-9 sm:h-9 shrink-0',
    lg: 'w-10 h-10 sm:w-11 sm:h-11 shrink-0',
  }[size];

  const textSize = {
    sm: 'text-sm sm:text-base',
    md: 'text-base sm:text-lg md:text-xl',
    lg: 'text-xl sm:text-2xl',
  }[size];

  return (
    <Link to="/" className={`inline-flex items-center gap-2 sm:gap-3 group select-none min-w-0 ${className}`}>
      {/* Dimensional 3D Gem-Tooth Emblem */}
      <div
        className={`${iconSize} rounded-2xl bg-gradient-to-tr from-electric-teal via-electric-violet to-pearl-50 p-0.5 shadow-md group-hover:shadow-3d-teal transition-all duration-300 group-hover:scale-105`}
      >
        <div className="w-full h-full bg-navy rounded-[14px] flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tr from-electric-teal/30 to-electric-violet/30 opacity-70" />
          <svg viewBox="0 0 24 24" className="w-4 h-4 sm:w-5 sm:h-5 text-white relative z-10" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2C8 2 5 5 5 9c0 4 2 7 3 11 1 2 2 2 4 2s3 0 4-2c1-4 3-7 3-11 0-4-3-7-7-7z" />
            <path d="M9 9h6" opacity="0.6" />
          </svg>
        </div>
      </div>

      <div className="flex flex-col min-w-0">
        <span className={`font-heading font-extrabold tracking-tight ${textSize} ${isFooter ? 'text-white' : 'text-navy'} group-hover:text-electric-teal transition-colors truncate max-w-[160px] xs:max-w-[210px] sm:max-w-none`}>
          {clinicConfig.name}
        </span>
        <span className={`text-[9px] sm:text-[10px] uppercase font-bold tracking-widest ${isFooter ? 'text-pearl/60' : 'text-navy/50'} truncate`}>
          Dental Studio & Implants
        </span>
      </div>
    </Link>
  );
};
