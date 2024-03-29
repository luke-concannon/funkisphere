import {
  Bungee,
  Bungee_Outline,
  Source_Sans_3,
  Open_Sans,
} from 'next/font/google'
import '../styles/globals.css'

const openSans = Open_Sans({
  display: 'swap',
  variable: '--font-openSans',
  subsets: ['latin'],
})

const bungee = Bungee({
  weight: '400',
  display: 'swap',
  variable: '--font-bungee',
  subsets: ['latin'],
})

const bungeeOutline = Bungee_Outline({
  weight: '400',
  display: 'swap',
  variable: '--font-bungeeOutline',
  subsets: ['latin'],
})

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : 'http://localhost:3000'

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: 'The Funkisphere',
  description: 'Keeping things funky for kids in the Bay.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang='en'
      className={`${openSans.variable} ${bungee.variable} ${bungeeOutline.variable}`}
    >
      <body className='w-screen'>
        <main className='h-[100dvh] w-full flex flex-col items-center '>
          {children}
        </main>
      </body>
    </html>
  )
}
