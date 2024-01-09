import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'
import couch from "@/assets/couch.svg"
import Image from 'next/image'
import { ClerkProvider } from '@clerk/nextjs'

import UserInf from '@/components/UserInf'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'RoomGPT',
  description: 'Ai Room design generation, written by abdeldjawad bourouina.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={inter.className +  "bg-white flex flex-col min-h-screen container mx-auto "}>
        <header className='w-full'>
          <div className='container border-b p-5 mx-auto flex items-center justify-between'>
            <Link href={"/"} className='flex items-center gap-3'>
              <Image src={couch} alt='couch' width={50} height={50} />
              <h3 className='text-black md:text-3xl text-2xl font-bold '>Room GPT</h3>
            </Link>
            <UserInf/>
          </div>
        </header>
        {children}
      </body>
    </html>
    </ClerkProvider>
  );
}
