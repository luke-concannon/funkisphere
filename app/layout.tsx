import { Bungee, Bungee_Outline, Source_Sans_3 } from 'next/font/google'
import '../styles/globals.css'

const sourceSans = Source_Sans_3({
  weight: '400',
  display: 'swap',
  variable: '--font-sourceSans3',
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
      className={`${sourceSans.variable} ${bungee.variable} ${bungeeOutline.variable}`}
    >
      <body className='w-full'>
        <main className='h-screen flex flex-col items-center'>{children}</main>
      </body>
    </html>
  )
}
