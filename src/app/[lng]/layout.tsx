import { dir } from 'i18next';
import { languages } from '../i18n/settings';
import { FC, ReactNode } from 'react';
import './globals.css';

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }))
}

type Props = {
  children: ReactNode,
  params: {
    lng: string,
  }
}

const LocaleLayout: FC<Props> = ({ children, params: { lng } }) => {

  return (
  <html lang={lng} dir={dir(lng)}>
    <body>
      {children}
    </body>
  </html>
  );
}

export default LocaleLayout;
