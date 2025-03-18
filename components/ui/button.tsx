'use client'
import React from 'react'
interface Props {
    onClick?: () => void;
    text: string;
    className?: string; 
    variant?: 'primary' | 'secondary';
    size?: 'sm' | 'md' | 'lg';  
    rounded?: boolean;
    disabled?: boolean;
}

const Button = ({ onClick,text,className,variant,size,rounded,disabled} : Props) => {
    
  return (
    <button onClick={onClick} className={`px-8 py-3 ${className} ${variant === 'primary' ? 'bg-primary text-white' : 'bg-secondary text-text-color'} font-bold hover:shadow-lg hover:bg-opacity-90 ${size === 'sm' ? 'text-sm' : size === 'md' ? 'text-md' : 'text-lg'} ${rounded ? 'rounded-full' : 'rounded-sm'} ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'}`} disabled={disabled}>
        {text}
    </button>
  )
}





export default Button