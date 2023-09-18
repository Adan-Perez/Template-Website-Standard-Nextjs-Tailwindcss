import './globals.css';
import { Inter } from 'next/font/google';
import Navigation from './ui/Navigation';
import Footer from './ui/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: 'Next.js + Tailwind CSS Website',
    description: 'Next.js + Tailwind CSS Website by Adan Perez',
};

export default function RootLayout({ children }) {
    return (
        <html lang='en'>
            <body className={inter.className}>
                <Navigation />

                {children}

                <Footer />
            </body>
        </html>
    );
}
