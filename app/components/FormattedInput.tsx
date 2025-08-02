'use client';

import React from 'react';
import { formatCEP, formatPhone } from '../utils/formatters';

interface FormattedInputProps {
  type: 'cep' | 'phone' | 'text' | 'email';
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  label: string;
  required?: boolean;
  readOnly?: boolean;
  className?: string;
}

export default function FormattedInput({
  type,
  name,
  value,
  onChange,
  placeholder,
  label,
  required = false,
  readOnly = false,
  className = ""
}: Readonly<FormattedInputProps>) {
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let formattedValue = e.target.value;
    
    // Aplica formatação baseada no tipo
    switch (type) {
      case 'cep':
        formattedValue = formatCEP(e.target.value);
        break;
      case 'phone':
        formattedValue = formatPhone(e.target.value);
        break;
      default:
        // Para text e email, não aplica formatação
        formattedValue = e.target.value;
    }
    
    // Cria um novo evento sintético com o valor formatado
    const syntheticEvent = {
      ...e,
      target: {
        ...e.target,
        name: name,
        value: formattedValue
      }
    } as React.ChangeEvent<HTMLInputElement>;
    
    onChange(syntheticEvent);
  };

  const baseClassName = `w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-orange transition-colors ${
    readOnly 
      ? 'bg-white/5 border-white/10 text-gray-400 cursor-not-allowed'
      : 'bg-white/10 border-white/20 text-white placeholder-gray-400 hover:border-white/30'
  } ${className}`;

  return (
    <div>
      <label className="block text-sm font-medium text-gray-300 mb-2">
        {label}
        {required && <span className="text-red-400 ml-1">*</span>}
      </label>
      <input
        type={type === 'cep' || type === 'phone' ? 'text' : type}
        name={name}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        readOnly={readOnly}
        required={required}
        className={baseClassName}
        maxLength={type === 'cep' ? 9 : type === 'phone' ? 15 : undefined}
        autoComplete={type === 'email' ? 'email' : type === 'phone' ? 'tel' : 'off'}
      />
    </div>
  );
}