'use client'

import Drawer from '@/components/section/drawer'
import Menu from '@/components/ui/menu'
import { cn } from '@/lib/utils'
import { useEffect, useState } from 'react'
import DarkModeToggle from '../functional/DarkModeToggle'

export default function Header() {
   const [addBorder, setAddBorder] = useState(false)

   useEffect(() => {
      const handleScroll = () => {
         if (window.scrollY > 20) {
            setAddBorder(true)
         }
         else {
            setAddBorder(false)
         }
      }

      window.addEventListener('scroll', handleScroll)

      return () => {
         window.removeEventListener('scroll', handleScroll)
      }
   }, [])

   return (
      <header
         className="sticky top-0 z-50 bg-background/60 py-2 backdrop-blur"
      >
         <div className="container flex items-center justify-between">
            <a
               href="https://dfrnt.com"
               title="dfrnt.com"
               className="relative mr-6 flex items-center space-x-2"
            >
              <span className='text-3xl pt-2'>🚀</span>
               {/* <Icons.logo className="h-[40px] w-auto" /> */}
               {/* <span className="text-xl font-bold">{siteConfig.name}</span> */}
            </a>

            <div className="hidden lg:block">
               <div className="flex items-center ">
                  <nav className="mr-10">
                     <Menu />
                  </nav>

                  <div className="flex gap-2">
                  <DarkModeToggle />
                  </div>
               </div>
            </div>
            <div className="mt-2 block cursor-pointer lg:hidden">
               <Drawer />
            </div>
         </div>
         <hr
            className={cn(
               'absolute bottom-0 w-full transition-opacity duration-300 ease-in-out',
               addBorder ? 'opacity-100' : 'opacity-0',
            )}
         />
      </header>
   )
}
