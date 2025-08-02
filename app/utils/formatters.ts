// Formatador de CEP
export const formatCEP = (value: string): string => {
  const cleanValue = value.replace(/\D/g, ''); // Remove tudo que não é dígito
  
  if (cleanValue.length <= 5) {
    return cleanValue;
  }
  
  return cleanValue.replace(/(\d{5})(\d{0,3})/, '$1-$2');
};

// Formatador de Telefone
export const formatPhone = (value: string): string => {
  const cleanValue = value.replace(/\D/g, '');
  
  if (cleanValue.length <= 2) {
    return cleanValue;
  } else if (cleanValue.length <= 7) {
    return cleanValue.replace(/(\d{2})(\d{0,5})/, '($1) $2');
  } else if (cleanValue.length <= 10) {
    return cleanValue.replace(/(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3');
  } else {
    return cleanValue.replace(/(\d{2})(\d{5})(\d{0,4})/, '($1) $2-$3');
  }
};

// Validador de Email
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Validador de CEP
export const isValidCEP = (cep: string): boolean => {
  const cleanCEP = cep.replace(/\D/g, '');
  return cleanCEP.length === 8;
};

// Remove formatação do CEP para envio
export const cleanCEP = (cep: string): string => {
  return cep.replace(/\D/g, '');
};

// Remove formatação do telefone para envio
export const cleanPhone = (phone: string): string => {
  return phone.replace(/\D/g, '');
};