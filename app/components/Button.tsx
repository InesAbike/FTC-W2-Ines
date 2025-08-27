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
    primary: 'bg-primary-default-500 hover:bg-primary-dark-700 text-white',
    secondary: 'bg-white/10 hover:bg-secondary-light-200/20 text-secondary-light-200 hover:text-white',
    outline: 'bg-transparent border border-primary-default-500 text-primary-default-500 hover:bg-primary-default-500/10',
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
