import React from 'react';

import { useMemo } from 'react';
import { useRouter } from 'next/router';
import { IntlProvider } from 'react-intl';

import EnglishLang from './locales/en.json';
import TurkishLang from './locales/tr.json';

interface IProps {
  children: React.ReactNode;
}

const LocalizationProvider = ({ children }: IProps) => {
  const { locale, defaultLocale } = useRouter();
  const [shortLocale] = locale ? locale?.split('-') : ['en'];

  const messages: any = useMemo(() => {
    switch (shortLocale) {
      case 'en':
        return EnglishLang;
      case 'tr':
        return TurkishLang;
      default:
        return EnglishLang;
    }
  }, [shortLocale]);

  return (
    <IntlProvider
      messages={messages}
      locale={shortLocale}
      defaultLocale={defaultLocale}>
      {children}
    </IntlProvider>
  );
};

export default LocalizationProvider;
