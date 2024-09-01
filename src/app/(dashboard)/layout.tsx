import '@/app/globals.css';
import { Header } from '@/components/app/header';
import { Inter } from "next/font/google";
import { ReactNode } from "react";

const interFont = Inter({ subsets: ["latin"] });

export default function Layout({children}: {children: ReactNode}){
   return (
      <html lang="pt-BR" className="dark">
         <body className={interFont.className}>
            <Header/>
            {children}
         </body>
      </html>
   )
}