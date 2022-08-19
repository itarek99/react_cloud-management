import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { useState } from 'react';
import { animateScroll as scroll, Link } from 'react-scroll';

function Navbar() {
  const [nav, setNav] = useState(false);

  const handleClick = () => setNav(!nav);

  return (
    <nav className='bg-zinc-200 fixed w-full drop-shadow-lg z-10'>
      <div className='container mx-auto px-2 sm:px-0 relative'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center'>
            <h1
              className='font-bold text-xl mr-4 sm:text-2xl py-4 select-none cursor-pointer'
              onClick={() => {
                scroll.scrollToTop();
              }}
            >
              BRAND.
            </h1>
            <ul className='hidden md:flex'>
              <li className='cursor-pointer text-gray-600 hover:text-indigo-600'>
                <Link activeClass='text-indigo-600' to='home' smooth={true} offset={-64} duration={500} spy={true}>
                  Home
                </Link>
              </li>
              <li className='cursor-pointer text-gray-600 hover:text-indigo-600'>
                <Link activeClass='text-indigo-600' to='about' smooth={true} offset={-100} duration={500} spy={true}>
                  About
                </Link>
              </li>
              <li className='cursor-pointer text-gray-600 hover:text-indigo-600'>
                <Link activeClass='text-indigo-600' to='support' smooth={true} offset={-64} duration={500} spy={true}>
                  Support
                </Link>
              </li>
              <li className='cursor-pointer text-gray-600 hover:text-indigo-600'>
                <Link
                  activeClass='text-indigo-600'
                  to='platforms'
                  smooth={true}
                  offset={-100}
                  duration={500}
                  spy={true}
                >
                  Platforms
                </Link>
              </li>
              <li className='cursor-pointer text-gray-600 hover:text-indigo-600'>
                <Link activeClass='text-indigo-600' to='pricing' smooth={true} offset={-64} duration={500} spy={true}>
                  Pricing
                </Link>
              </li>
            </ul>
          </div>
          <div className='hidden md:flex font-medium'>
            <button className='btn-outline-primary px-6 py-2 mr-4'>Sign In</button>
            <button className='btn-primary px-6 py-2'>Sign Up</button>
          </div>

          <div className='md:hidden cursor-pointer' onClick={handleClick}>
            {!nav ? <MenuIcon className='md:hidden w-8' /> : <XIcon className='md:hidden w-8' />}
          </div>
        </div>
        <div
          className={`${!nav ? 'hidden' : 'block'} absolute left-2 right-2 py-6 mt-5 bg-zinc-200 sm:left-0 sm:right-0`}
        >
          <ul className=' text-center  font-medium'>
            <li className='py-2'>
              <Link onClick={handleClick} activeClass='active' to='home' smooth={true} offset={-64}>
                Home
              </Link>
            </li>
            <li className='py-2'>
              <Link onClick={handleClick} activeClass='active' to='about' smooth={true} offset={-100}>
                About
              </Link>
            </li>
            <li className='py-2'>
              <Link onClick={handleClick} activeClass='active' to='support' smooth={true} offset={-64}>
                Support
              </Link>
            </li>
            <li className='py-2'>
              <Link onClick={handleClick} activeClass='active' to='platforms' smooth={true} offset={-100}>
                Platforms
              </Link>
            </li>
            <li className='py-2'>
              <Link onClick={handleClick} activeClass='active' to='pricing' smooth={true} offset={-64}>
                Pricing
              </Link>
            </li>
          </ul>
          <div className='text-center mt-4'>
            <button className='btn-primary py-2 px-8 mr-4'>Sign In</button>
            <button className='btn-outline-primary py-2 px-8'>Sign Up</button>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
