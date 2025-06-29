import React, { type ReactNode, type ButtonHTMLAttributes } from 'react';

type ButtonVariants = 'primary' | 'secondary' | 'success' | 'danger' | 'outline';
type ButtonSizes = 'small' | 'medium' | 'large' | 'cont';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  variant?: ButtonVariants;
  size?: ButtonSizes;
  className?: string;
  disabled?: boolean;
  fullWidth?: boolean;
  whatsapp?: boolean;
  phone?: string;
  message?: string;
  
}


const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  type = 'button',
  variant = 'primary',
  size = 'medium',
  className = '',
  disabled = false,
  fullWidth = false,
  whatsapp = false,
  phone,
  message = "",
  ...props
}) => {
  const variantClasses: Record<ButtonVariants, string> = {
    primary: "bg-teal-600 hover:bg-teal-700 text-white rounded-3xl shadow-2xl",
    secondary: "bg-black text-white rounded-lg",
    success: "bg-green-500 rounded-3xl hover:bg-green-700 text-white",
    danger: "bg-red-600 hover:bg-red-700 text-white",
    outline: "bg-transparent border-1 rounded-3xl border-green-600 text-green-600 hover:bg-green-600 hover:border-white"
  };

  const sizeClasses: Record<ButtonSizes, string> = {
    small: "py-1 px-3 text-sm",
    medium: "py-2 px-4 text-base",
    large: "py-3 px-6 text-lg",
    cont: "w-full h-12 text-lg"
  };

  const handleClick = () => {
    if (whatsapp && phone) {
      const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
      window.open(url, "_blank");
    } else if (onClick) {
      onClick();
    }
  };

  const baseClasses = "font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500";
  const widthClass = fullWidth ? "w-full" : "";
  const disabledClass = disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer";

  return (
    <button
      type={type}
      onClick={handleClick}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${widthClass} ${disabledClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
