'use client'
import Image from 'next/image';
import React from 'react';
import Logo from '../public/assets/825208_file.svg'
import Link from 'next/link';
import Button from './ui/button'
import { navItems } from '@/constants/data';
import { AlignJustify, X } from 'lucide-react';
import { usePathname } from 'next/navigation';
const Header = () => {
    const [toggle,setToggle] = React.useState(false)
    const pathName  = usePathname()
    
    // Determine if we're on the homepage
    const isHomePage = pathName === '/';
    
    // Set the SVG color based on the current path
    
    // For SVGs, we can use a filter to change the color
    const svgFilter = isHomePage ? 'brightness(0) invert(1)' : ''; // This makes the SVG white on homepage

    
    const handleToggle = () => {
        setToggle(!toggle)
    }
    return (
        <header className=" absolute top-0 left-0 right-0 z-50  bg-transparent px-3">
            <div className='md:container mx-auto'>
                <nav className='flex justify-between items-center py-4 relative '>
                    <Link href='/' >
                        <Image src={Logo} alt='logo' className='w-full h-full ' style={{filter:svgFilter}} />
                    </Link>

                    <div className={`md:static absolute top-16 left-0 right-0 bg-opacity-90 z-10  bg-secondary md:bg-transparent ${toggle ? 'block' : 'hidden'} md:block  md:w-auto md:bg-transparent animate-scroll-down md:animate-none`}>
                        <ul className='flex items-center flex-col md:flex-row md:gap-4 w-full '>
                            {navItems.map((item, i) => {
                                const isActive = pathName === item.url;
                                return (
                                    
                                    <Link 
                                        key={i} 
                                        href={item.url} 
                                        className={`capitalize font-semibold text-base w-full md:w-fit text-center py-2 md:hover:bg-transparent md:hover:text-primary hover:bg-primary
                                            ${isHomePage ? 'text-white' : 'text-text-color'}
                                            ${isActive ? 'text-primary' : ''}
                                        `}
                                    >
                                        {item.title}
                                    </Link>
                                );
                            })}
                            <div className='hidden md:flex'>
                                <Button text='Sign In' variant='secondary' rounded={false} size='md' className='mr-3' />
                                <Button text='Register' variant='primary' rounded={false} size='md' />
                            </div>
                        </ul>
                    </div>
                    <div className='md:hidden'>
                        
                        {toggle ? <X onClick={handleToggle} className='transition-transform transform rotate-180 ease-linear duration-500 '/> : <AlignJustify onClick={handleToggle} className='transition-transform transform rotate-0 ease-linear duration-500' />}
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;