// src/contexts/ThemeContext.jsx
import React, { createContext, useState } from 'react';

// Create the context
export const ThemeContext = createContext();

// Create a provider component
export function ThemeProvider({ children }) {
  // Example state: light or dark theme
  const [theme, setTheme] = useState('light');

  // Toggle function
  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={theme}>{children}</div>
    </ThemeContext.Provider>
  );
}
