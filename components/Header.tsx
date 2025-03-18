'use client'
import Image from 'next/image';
import React from 'react';
import Logo from '../public/assests/825208_file.svg'
import Link from 'next/link';
import Button from './ui/button'
import { navItems } from '@/constants/data';
import { AlignJustify, X } from 'lucide-react';
const Header = () => {
    const [toggle,setToggle] = React.useState(false)

    const handleToggle = () => {
        setToggle(!toggle)
    }
    return (
        <header >
            <div className='md:container mx-auto'>
                <nav className='flex justify-between items-center py-4 relative '>
                    <Link href='/' >
                        <Image src={Logo} alt='logo' className='w-full h-full' />
                    </Link>

                    <div className={`md:static absolute top-16 left-0 right-0 bg-opacity-90 z-10  bg-secondary md:bg-transparent ${toggle ? 'block' : 'hidden'} md:block  md:w-auto md:bg-transparent animate-scroll-down md:animate-none`}>
                        <ul className='flex items-center flex-col md:flex-row md:gap-4 w-full '>
                            {navItems.map((item, i) => {
                                return <Link key={i} href={item.url} className='capitalize font-semibold text-base text-text-color w-full md:w-fit text-center py-2 md:hover:bg-transparent md:hover:text-primary hover:bg-primary '>{item.title}</Link>
                            })}
                            <div className='hidden md:flex'>
                                <Button text='Sign In' variant='secondary' rounded={false} size='md' className='mr-3' />
                                <Button text='Register' variant='primary' rounded={false} size='md' />
                            </div>
                        </ul>
                    </div>
                    <div className='md:hidden'>
                        
                        {toggle ? <X onClick={handleToggle} className='transition-transform transform rotate-180 ease-linear duration-500' /> : <AlignJustify onClick={handleToggle} className='transition-transform transform rotate-0 ease-linear duration-500' />}
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;