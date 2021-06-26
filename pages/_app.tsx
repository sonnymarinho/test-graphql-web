import React from 'react';

import 'tailwindcss/tailwind.css';
import { ThemeProvider } from '@hook/useTheme';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
export default MyApp;
