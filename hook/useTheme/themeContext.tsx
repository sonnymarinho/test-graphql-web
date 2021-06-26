import { createContext } from 'react';

import { Theme } from '@interfaces/Theme';

interface ThemeContextData {
  theme: Theme,
  changeThemeTo: (themePreference: Theme) => void;
}

export const ThemeContext = createContext({} as ThemeContextData);
