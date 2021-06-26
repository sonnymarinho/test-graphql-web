import React, { useEffect, useState } from 'react';

import { THEME_STORAGE_NAME } from '@config/constants';
import { Theme } from '@interfaces/Theme';
import { getInitialTheme } from '@utils/theme';

import { ThemeContext } from './themeContext';

export const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState(getInitialTheme());

  const changeThemeTo = (themeParam: Theme) => {
    const root = window.document.documentElement;
    const isDark = themeParam === Theme.DARK;

    root.classList.remove(isDark ? Theme.LIGHT : Theme.DARK);
    root.classList.add(themeParam);
    localStorage.setItem(THEME_STORAGE_NAME, themeParam);

    setTheme(themeParam);
  };

  useEffect(() => {
    const storagePreferenceTheme = localStorage.getItem(THEME_STORAGE_NAME) as Theme;

    changeThemeTo(storagePreferenceTheme || theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, changeThemeTo }}>
      {children}
    </ThemeContext.Provider>
  );
};
