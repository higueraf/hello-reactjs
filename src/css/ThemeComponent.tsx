import { useTheme } from './ThemeContext';
import React from 'react';

export default function ThemedComponent() {
  const { theme, toggleTheme } = useTheme();

  const style: React.CSSProperties = {
    backgroundColor: theme === 'light' ? '#fff' : '#333',
    color: theme === 'light' ? '#000' : '#fff',
    padding: '1rem',
    textAlign: 'center',
  };

  return (
    <div style={style}>
      <p>El tema actual es: {theme}</p>
      <button onClick={toggleTheme}>Cambiar tema</button>
    </div>
  );
}
