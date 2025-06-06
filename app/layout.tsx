// app/layout.tsx
import { ReactNode } from 'react';
import { ThemeProvider } from '@/app/context/ThemeContext';
import './globals.css';

// ✅ FIXED: Corrected default imports (no curly braces)
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';

export const metadata = {
  title: 'Harsh Chalwadi | Portfolio',
  description: 'Personal portfolio of Harsh Chalwadi, tech enthusiast and developer',
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <div className="max-w-4xl min-h-screen mx-auto p-8 flex flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
