import React from 'react';
import { MessageCircle } from 'lucide-react';
import { buildWhatsAppLink } from '../../config/clinicConfig';

interface WhatsAppButtonProps {
  serviceName?: string;
  customMessage?: string;
  variant?: 'teal' | 'violet' | 'coral' | 'outline' | 'floating';
  size?: 'sm' | 'md' | 'lg';
  label?: string;
  className?: string;
  showIcon?: boolean;
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  serviceName,
  customMessage,
  variant = 'teal',
  size = 'md',
  label,
  className = '',
  showIcon = true,
}) => {
  const url = buildWhatsAppLink(serviceName, customMessage);
  const defaultLabel = serviceName ? `Enquire about ${serviceName}` : 'Book Appointment';
  const displayLabel = label || defaultLabel;

  // Size styling
  const sizeClasses = {
    sm: 'px-4 py-2 text-xs rounded-xl font-medium',
    md: 'px-6 py-3.5 text-sm md:text-base rounded-2xl font-semibold',
    lg: 'px-8 py-4 text-base md:text-lg rounded-2xl font-bold',
  }[size];

  // Variant classes utilizing tactile 3D styling
  const variantClasses = {
    teal: 'btn-3d-teal',
    violet: 'btn-3d-violet',
    coral: 'btn-3d-coral',
    outline: 'btn-3d-outline',
    floating: 'bg-emerald-500 hover:bg-emerald-600 text-white rounded-full p-3 sm:p-4 shadow-[0_8px_25px_rgba(16,185,129,0.4)] hover:scale-105 active:scale-95 transition-all duration-200 border-2 border-white min-w-[48px] min-h-[48px]',
  }[variant];

  if (variant === 'floating') {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Book appointment directly on WhatsApp"
        className={`fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex items-center justify-center ${variantClasses} ${className}`}
        title="Chat on WhatsApp (+91 9352089550)"
      >
        <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 text-white fill-current" />
        <span className="sr-only">Chat on WhatsApp to book an appointment</span>
      </a>
    );
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`WhatsApp: ${displayLabel}`}
      className={`${variantClasses} ${sizeClasses} gap-2 sm:gap-2.5 text-center ${className}`}
    >
      {showIcon && <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />}
      <span className="break-words leading-tight">{displayLabel}</span>
    </a>
  );
};
