import { Inter } from "next/font/google";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata({params: { locale }}: any) {
  const t = await getTranslations({ locale, namespace: 'meta' });
  const canonical = ['', 'en'].includes(locale)
    ? process.env.NEXT_PUBLIC_SITE_URL 
    : process.env.NEXT_PUBLIC_SITE_URL + locale + '/' 
 
  return {
    title: t('title'),
    description: t('description'),
    alternates: { canonical, },
  };
}

export default async function RootLayout({
  children,
  params: { locale }
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
