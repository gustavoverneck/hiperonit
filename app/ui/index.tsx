import React from 'react';
import { designSystem } from '../styles/design-system';

interface CardProps {
  readonly children: React.ReactNode;
  readonly className?: string;
  readonly hover?: boolean;
}

export function Card({ children, className = '', hover = false }: CardProps) {
  const baseClasses = designSystem.components.card.base;
  const hoverClasses = hover ? designSystem.components.card.hover : '';
  
  return (
    <div className={`${baseClasses} ${hoverClasses} ${className}`}>
      {children}
    </div>
  );
}

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  readonly label?: string;
  readonly error?: string;
  readonly className?: string;
}

export function Input({ label, error, className = '', ...props }: InputProps) {
  const baseClasses = designSystem.components.input.base;
  
  return (
    <div className="space-y-2">
      {label && (
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          {label}
        </label>
      )}
      <input className={`${baseClasses} ${className}`} {...props} />
      {error && (
        <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
      )}
    </div>
  );
}

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  readonly label?: string;
  readonly error?: string;
  readonly className?: string;
}

export function Textarea({ label, error, className = '', ...props }: TextareaProps) {
  const baseClasses = designSystem.components.input.base;
  
  return (
    <div className="space-y-2">
      {label && (
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          {label}
        </label>
      )}
      <textarea className={`${baseClasses} resize-none ${className}`} {...props} />
      {error && (
        <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
      )}
    </div>
  );
}
