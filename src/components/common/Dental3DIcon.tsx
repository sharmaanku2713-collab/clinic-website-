import React from 'react';
import { Sparkles, ShieldCheck, Activity, Smile, Layers, Heart, Cpu } from 'lucide-react';

interface Dental3DIconProps {
  iconName: 'Sparkles' | 'ShieldCheck' | 'Activity' | 'Smile' | 'Layers' | 'Heart' | 'Cpu';
  color?: 'teal' | 'violet' | 'coral';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const Dental3DIcon: React.FC<Dental3DIconProps> = ({
  iconName,
  color = 'teal',
  size = 'md',
  className = '',
}) => {
  const sizeMap = {
    sm: { box: 'w-12 h-12 rounded-xl', icon: 'w-6 h-6' },
    md: { box: 'w-16 h-16 rounded-2xl', icon: 'w-8 h-8' },
    lg: { box: 'w-20 h-20 rounded-3xl', icon: 'w-10 h-10' },
  }[size];

  const colorStyles = {
    teal: {
      gradient: 'from-[#00BFA6] to-[#008f7c]',
      glow: 'shadow-[0_10px_25px_-5px_rgba(0,191,166,0.35)]',
      border: 'border-emerald-200/50',
      lightRing: 'bg-white/20',
      text: 'text-white',
    },
    violet: {
      gradient: 'from-[#7957FF] to-[#5a36e6]',
      glow: 'shadow-[0_10px_25px_-5px_rgba(121,87,255,0.35)]',
      border: 'border-violet-200/50',
      lightRing: 'bg-white/20',
      text: 'text-white',
    },
    coral: {
      gradient: 'from-[#FF786B] to-[#e65547]',
      glow: 'shadow-[0_10px_25px_-5px_rgba(255,120,107,0.35)]',
      border: 'border-rose-200/50',
      lightRing: 'bg-white/20',
      text: 'text-white',
    },
  }[color];

  const renderIcon = () => {
    switch (iconName) {
      case 'Sparkles':
        return <Sparkles className={`${sizeMap.icon} ${colorStyles.text}`} />;
      case 'ShieldCheck':
        return <ShieldCheck className={`${sizeMap.icon} ${colorStyles.text}`} />;
      case 'Activity':
        return <Activity className={`${sizeMap.icon} ${colorStyles.text}`} />;
      case 'Smile':
        return <Smile className={`${sizeMap.icon} ${colorStyles.text}`} />;
      case 'Layers':
        return <Layers className={`${sizeMap.icon} ${colorStyles.text}`} />;
      case 'Heart':
        return <Heart className={`${sizeMap.icon} ${colorStyles.text}`} />;
      case 'Cpu':
        return <Cpu className={`${sizeMap.icon} ${colorStyles.text}`} />;
      default:
        return <Sparkles className={`${sizeMap.icon} ${colorStyles.text}`} />;
    }
  };

  return (
    <div
      className={`relative flex items-center justify-center bg-gradient-to-br ${colorStyles.gradient} ${sizeMap.box} ${colorStyles.glow} border ${colorStyles.border} transform transition-all duration-300 group-hover:scale-105 group-hover:-translate-y-1 ${className}`}
    >
      {/* Specular 3D rim highlight */}
      <div className="absolute inset-0 rounded-[inherit] bg-gradient-to-t from-transparent via-white/10 to-white/40 pointer-events-none" />
      <div className="absolute top-1 left-2 w-3/4 h-1/3 rounded-full bg-white/20 blur-[1px] pointer-events-none" />
      
      {/* Inner Icon */}
      <div className="relative z-10 drop-shadow-md">
        {renderIcon()}
      </div>
    </div>
  );
};
