import { designSystem } from '../styles/design-system';

export function useDesignSystem() {
  return designSystem;
}

// Hook para criar classes CSS dinamicamente baseadas no design system
export function useStyles() {
  const createButtonStyles = (
    variant: keyof typeof designSystem.components.button.variants = 'primary',
    size: keyof typeof designSystem.components.button.sizes = 'md'
  ) => {
    return `${designSystem.components.button.base} ${designSystem.components.button.variants[variant]} ${designSystem.components.button.sizes[size]}`;
  };

  const createCardStyles = (hover = false) => {
    return `${designSystem.components.card.base} ${hover ? designSystem.components.card.hover : ''}`;
  };

  const createInputStyles = () => {
    return designSystem.components.input.base;
  };

  return {
    createButtonStyles,
    createCardStyles,
    createInputStyles,
    designSystem,
  };
}

// Utility functions para trabalhar com cores
export function getColorValue(colorPath: string) {
  const paths = colorPath.split('.');
  let value: any = designSystem.colors;
  
  for (const path of paths) {
    value = value[path];
    if (!value) return null;
  }
  
  return value;
}

// Função para criar gradientes
export function createGradient(from: string, to: string, direction = 'to right') {
  return `linear-gradient(${direction}, ${from}, ${to})`;
}

// Função para criar sombras customizadas
export function createShadow(size: keyof typeof designSystem.shadows) {
  return designSystem.shadows[size];
}
