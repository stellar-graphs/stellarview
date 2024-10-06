import { Icons } from '@/components/ui/icons'
import { buttonVariants } from '@/components/ui/button'
import {
   Drawer,
   DrawerContent,
   DrawerFooter,
   DrawerHeader,
   DrawerTrigger,
} from '@/components/ui/drawer'
import { siteConfig } from '@/lib/config'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { IoMenuSharp } from 'react-icons/io5'
import DarkModeToggle from '../functional/DarkModeToggle'

export default function drawerDemo() {
   return (
      <Drawer>
         <DrawerTrigger>
            <IoMenuSharp className="text-2xl" />
         </DrawerTrigger>
         <DrawerContent>
            <DrawerHeader className="px-6">
               {/* <div className="">
                  <Link
                     href="/"
                     title="brand-logo"
                     className="relative mr-6 flex items-center space-x-2"
                  >
                     <Icons.logo className="h-[40px] w-auto" />
                     <span className="text-xl font-bold">{siteConfig.name}</span>
                  </Link>
               </div> */}
               <nav>
                  <ul className="mt-7 text-left">
                     {siteConfig.header.map((item, index) => (
                        <li key={index} className="my-3">
                           {"trigger" in item && item.trigger
                              ? (
                                    <span className="font-semibold">{"trigger" in item && typeof item.trigger === "string" && item.trigger || ""}</span>
                                 )
                              : (
                                    <Link href={item.href || ''} className="font-semibold">
                                       {item.label}
                                    </Link>
                                 )}
                        </li>
                     ))}
                  </ul>
               </nav>
            </DrawerHeader>
            <DrawerFooter>
              <DarkModeToggle/>
               {/* <Link
                  href="/login"
                  className={buttonVariants({ variant: 'outline' })}
               >
                  Login
               </Link>
               <Link
                  href="/signup"
                  className={cn(
                     buttonVariants({ variant: 'default' }),
                     'flex w-full gap-2 text-background sm:w-auto',
                  )}
               >
                  <Icons.logo className="size-6" />
                  Get Started for Free
               </Link> */}
            </DrawerFooter>
         </DrawerContent>
      </Drawer>
   )
}
