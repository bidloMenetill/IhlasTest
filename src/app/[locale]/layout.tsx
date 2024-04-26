import type { Metadata } from "next"
import { Inter } from "next/font/google"
import {Footer, Header} from '../../widgets'
import "../[locale]/styles/globals.css"
const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Ihlas Project",
  description: "Created by IncTechnology",
}
interface LocaleLayoutProps {
   children: React.ReactNode;
  params: {
    locale: string
  }
}
export default function LocaleLayout({
  children,
  params: { locale },
}: Readonly<LocaleLayoutProps>) {
  return (
    <html lang={locale}>
      <body className={inter.className}>
       <Header/>
       <main> {children}</main>
       <Footer/>
       </body>
        
    </html>
  )
}
