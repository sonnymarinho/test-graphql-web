import { Theme } from 'interfaces/Theme';

const { APP_NAME } = process.env;

export const DEFAULT_THEME_VALUE : Theme = Theme.DARK;

export const THEME_STORAGE_NAME = `@${APP_NAME}:color-theme`;
