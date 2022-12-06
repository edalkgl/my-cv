import './../styles/app.scss';

import type { AppProps } from 'next/app';
import LocalizationProvider from '@/Localization';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LocalizationProvider>
      <Component {...pageProps} />;
    </LocalizationProvider>
  );
}
