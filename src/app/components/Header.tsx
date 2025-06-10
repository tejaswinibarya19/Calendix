import Link from "next/link";
import {CalendarDays} from "lucide-react";
export default function Header(){
    return(
        <header className="flex gap-4 justify-between py-6 text-gray-600 font-light">
            <div className="flex gap-8 items-center">
            <Link href={'/'} className="text-blue-600 font-bold text-xl flex gap-1 items-center">
            <CalendarDays size={24}/>
            Calendix</Link>
            <nav className="flex gap-4">
                <Link href={'/features'}>Features</Link>
                <Link href={'/about'}>About</Link>
                <Link href={'/pricing'}>Pricing</Link>
            </nav> 
            </div>
            
            <nav className="flex gap-3 items-center ">
            <Link href={'/'}>Sign in</Link>
            <Link href={'/'} className="bg-blue-600 text-white p-2 rounded-full py-2 px-4">Get started</Link>
            </nav>
      </header>
    );
} 