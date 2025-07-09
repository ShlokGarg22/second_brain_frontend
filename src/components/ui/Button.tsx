
import React, { type ReactElement } from 'react';

type Vairants = 'primary' | 'secondary' | 'tertiary';
export interface ButtonProps {
  variant: Vairants;
  size: 'sm' | 'md' | 'lg';
  text: string;
  startIcon?: ReactElement | string;
  endIcon?: ReactElement | string;
  onClick: () => void;
}

const variantStyles= {
  "primary": "bg-purple-600 text-white hover:bg-blue-600",
  "secondary": "bg-purple-400 text-purple-600 hover:bg-blue-300",
  "tertiary": "bg-gray-200 text-gray-800" // Add your desired styles for tertiary
}

const sizeStyles = {
  "sm": "py-1 px-2",
  "md": "py-2 px-4",
  "lg": "py-4 px-6",
}

const defaultStyles= "rounded-md p-4 flex"

export const Button = (props: ButtonProps) => {
return <button className={`${variantStyles[props.variant]} ${sizeStyles[props.size]} ${defaultStyles}`}>{props.startIcon ? <div className='pr-2'>{props.startIcon}</div>: null}{props.text}</button>;
};

// Example usage (remove or move to a story/demo file):
<Button variant="primary" size="md" onClick={() => {}} text="Click Me" />

