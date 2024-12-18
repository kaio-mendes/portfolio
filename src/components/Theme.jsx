import { createContext, useState } from 'react';

export const Theme = createContext();

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const tema = { backgroundColor: darkMode ? 'black' : 'white', color: darkMode ? 'white' : '#141c3a' };

  return <Theme.Provider value={{ tema, setDarkMode }}>{children}</Theme.Provider>;
};
