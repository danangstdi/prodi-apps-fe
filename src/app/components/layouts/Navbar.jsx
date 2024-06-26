"use client"

import { useEffect, useState } from 'react';
import Himatika from '@/../public/himatika.png'
import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  const listMenu = [
    {page: 'Tentang Kami', link: '/biografi'},
    {page: 'Berita', link: '/'},
    {page: 'Event', link: '/'},
    {page: 'Jurnal', link: '/'},
    {page: 'Kontak Kami', link: '/'},
  ]

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header>
      <div className={`${isScrolled && 'mb-20'} bg-blue-800 flex justify-between px-5 py-2 xl:px-32`}>
        <a href="" className='flex items-center gap-1 text-xs text-white hover:underline hover:underline-offset-2'> 
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16"><path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/></svg>
          informatika.undar@gmail.com
        </a>
        <Link href='' className='text-xs text-white border-2 py-2 px-6 rounded-sm'>
          Masuk
        </Link>
      </div>
      <nav className={`${isScrolled && 'fixed top-0 inset-x-0 z-20 bg-opacity-80 backdrop-blur-md shadow-lg'} flex items-center justify-between bg-slate-100 px-5 py-2 xl:px-32`}>
        <Image src={Himatika} alt='' className='w-16 h-16' />
        <button className='lg:hidden'>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/></svg>
        </button>
        <ul className='hidden py-4 text-slate-500 lg:flex lg:items-center lg:gap-10'>
            <li>
              <Link href='/' className='text-sm hover:text-blue-800 hover:duration-150 text-blue-800'>
                Beranda
              </Link>
            </li>
          {listMenu.map((menu) => (
            <li key={menu.page}>
              <Link href={menu.link} className='text-sm hover:text-blue-800 hover:duration-150'>
                {menu.page}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
