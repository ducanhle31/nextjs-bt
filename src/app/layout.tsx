 import './globals.css';
import { Inter } from 'next/font/google'
import Link from 'next/link'
import Provider from './provider';
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className='header'>
            <Link href="/"><div className='h1'>HOME</div> </Link>
        <Link href="/about"><div className='h1'>About</div> </Link>
        <Link href="/contact"> <div className='h1'>Contact</div></Link> 
        <Link href="/products"><div className='h1'>Products</div></Link>
        <Link href="/post"><div className='h1'>Post</div></Link></header>
        <Provider> {children}</Provider>
    
        <footer className='footer'> Footer</footer>
        </body>
    </html>
  )
}
