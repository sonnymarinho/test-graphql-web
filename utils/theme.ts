import { DEFAULT_THEME_VALUE } from '@config/constants';
import { Theme } from '@interfaces/Theme';

export const getInitialTheme = (): Theme => {
  const isAbleToVerifyPreferences = typeof window !== 'undefined' && !!window.localStorage;

  if (isAbleToVerifyPreferences) {
    const themePreference = window.localStorage.getItem('color-theme');
    if (typeof themePreference === 'string') {
      return themePreference as Theme;
    }

    const userMedia = window.matchMedia(`(prefers-color-scheme: ${Theme.DARK})`);
    if (userMedia.matches) {
      return Theme.DARK;
    }
  }

  return DEFAULT_THEME_VALUE;
};
