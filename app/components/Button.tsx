import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  children,
  className = '',
  ...props
}) => {
  const baseStyles = 'px-6 py-3 rounded-full font-medium transition-colors';
  
  const variants = {
    primary: 'bg-medium-purple hover:bg-purple-700 text-white',
    secondary: 'bg-white/10 hover:bg-white/20 text-light-steel-blue hover:text-white',
    outline: 'bg-transparent border border-medium-purple text-medium-purple hover:bg-medium-purple/10',
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
