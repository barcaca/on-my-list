// eslint-disable-next-line camelcase
import { Josefin_Sans } from 'next/font/google'
import localFont from 'next/font/local'

export const monaSans = localFont({
  src: '../fonts/Mona-Sans.var.woff2',
  display: 'swap',
  weight: '200 900',
  variable: '--font-mona-sans',
})
export const josefin = Josefin_Sans({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '700'],
  variable: '--font-josefin',
})
