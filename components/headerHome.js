import React, { useState, useEffect } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import Link from 'next/link';

const Navbar = () => {
  const [isEnglish, setIsEnglish] = useState(true);
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState('transparent');
  const [textColor, setTextColor] = useState('white');
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);

  const toggleLanguage = () => {
    setIsEnglish(!isEnglish);
    setShowLanguageDropdown(false);
  };

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor('#ffffff');
        setTextColor('#000000');
      } else {
        setColor('transparent');
        setTextColor('#ffffff');
      }
    };
    window.addEventListener('scroll', changeColor);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className='fixed top-0 left-0 z-10 w-full duration-300 ease-in'
    >
      <div className='max-w-[1240px] m-auto flex justify-between items-center p-4 text-white'>
        <Link href='/'>
        <img style={{width:"90px",height:"90px"}} src="/logocompany.png" alt="logo" />
        </Link>
        <ul style={{ color: `${textColor}` }} className='hidden sm:flex'>
          <li className='p-4 hover:text-orange-300' style={{ fontFamily: 'Raleway' }}>
            <Link href='/'>Home</Link>
          </li>

          {/* <li className='p-4 hover:text-orange-300' style={{ fontFamily: 'Raleway' }}>
            <Link href={isEnglish ? '/indexar' : '/index'}>
              {isEnglish ? 'Arabic' : 'English'}
            </Link>
          </li> */}
          <li className='p-4 hover:text-orange-300' style={{ fontFamily: 'Raleway' }}>
            <Link href='/about'>About</Link>
          </li>
         
          <li className='p-4 hover:text-orange-300' style={{ fontFamily: 'Raleway' }}>
            <Link href='/project'>Project</Link>
          </li>
          <li className='p-4 hover:text-orange-300' style={{ fontFamily: 'Raleway' }}>
            <Link href='/Equipments'>Resources</Link>
          </li>
       
          <li className='p-4 hover:text-orange-300' style={{ fontFamily: 'Raleway' }}>
            <Link href='/بروفايل شركة ضخور المدينه للمقاولات.pdf'>Company Profile</Link>
          </li>
          <li className='p-4 hover:text-orange-300' style={{ fontFamily: 'Raleway' }}>
            <Link href='/contact'>Contact</Link>
          </li>
          <li className='relative p-4 group' style={{ fontFamily: 'Raleway' }}>
            <button
              onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}
              className='cursor-pointer focus:outline-none'
            >
              {isEnglish ? 'EN' : 'AR'}
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='w-4 h-4 ml-1'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M19 9l-7 7-7-7'
                />
              </svg>
            </button>
            {showLanguageDropdown && (
              <ul className='absolute hidden mt-2 -ml-4 text-black bg-white rounded-md shadow-lg group-hover:block'>
                <li>
                  <button
                    onClick={toggleLanguage}
                    className='w-full px-4 py-2 text-left hover:bg-gray-200'
                  >
                     <Link href={isEnglish ? '/indexar' : '/'}>
                    {isEnglish ? 'AR' : 'EN'}
                    </Link>
                  </button>
                </li>
              </ul>
            )}
          </li>
        </ul>
        <div onClick={handleNav} className='z-10 block sm:hidden'>
          {nav ? (
            <AiOutlineClose size={20} style={{ color: `${textColor}` }} />
          ) : (
            <AiOutlineMenu size={20} style={{ color: `${textColor}` }} />
          )}
        </div>
        <div
          className={
            nav
              ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
              : 'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
          }
        >
          <ul>
            <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
              <Link href='/'>Home</Link>
            </li>
            <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
              <Link href='/about'>About</Link>
            </li>
            <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
              <Link href='/project'>Project</Link>
            </li>
            <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
              <Link href='/Equipments'>Resources</Link>
            </li>
            <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
              <Link href='/contact'>Contact</Link>
            </li>
            <li className='relative p-4 group' style={{ fontFamily: 'Raleway' }}>
            <button
              onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}
              className='cursor-pointer focus:outline-none'
            >
              {isEnglish ? 'EN' : 'AR'}
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='w-4 h-4 ml-1'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M19 9l-7 7-7-7'
                />
              </svg>
            </button>
            {showLanguageDropdown && (
              <ul className='absolute hidden mt-2 -ml-4 text-black bg-white rounded-md shadow-lg group-hover:block'>
                <li>
                  <button
                    onClick={toggleLanguage}
                    className='w-full px-4 py-2 text-left hover:bg-gray-200'
                  >
                     <Link href={isEnglish ? '/indexar' : '/'}>
                    {isEnglish ? 'AR' : 'EN'}
                    </Link>
                  </button>
                </li>
              </ul>
            )}
          </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
