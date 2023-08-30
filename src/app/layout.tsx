import './globals.css';
import type { Metadata } from 'next';
import { Providers } from './GlobalRedux/provider';

export const metadata: Metadata = {
  title: 'Desafio Adam Robo ',
  description: 'Aplicação feita para teste de vaga na empresa Adam Robo'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
