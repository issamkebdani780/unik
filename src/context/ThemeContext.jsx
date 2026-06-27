import React, { createContext, useState, useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('default');
  const location = useLocation();

  useEffect(() => {
    // When the user navigates or the URL changes, we check for a 'gamme' query parameter
    // If it exists, we update the global theme.
    const searchParams = new URLSearchParams(location.search);
    const gamme = searchParams.get('gamme');
    
    if (gamme === 'capillaire') {
      setTheme('capillaire');
    } else if (gamme === 'dermatologique') {
      setTheme('dermatologique');
    } else if (gamme === 'all' || location.pathname === '/') {
      if (gamme === 'all') {
        setTheme('default');
      }
    }
  }, [location.search, location.pathname]);

  // Apply the data-theme attribute to the root HTML element
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'default') {
      root.removeAttribute('data-theme');
    } else {
      root.setAttribute('data-theme', theme);
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
