"use client"

import { useEffect, useState } from 'react';
import Himatika from '@/../public/himatika.png'
import Image from 'next/image'
import Link from 'next/link'

export default function Navbar({active, imgServer}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpenNav, setIsOpenNav] = useState(false);
  const [isOpenMore, setIsOpenMore] = useState(false);
  const [data, setData] = useState([]);

  const ShowMoU = data.slice(0, 2)
  const MoreMoU = data.slice(2)

  useEffect(() => {
    fetch('http://prodi-apps.test/api/v2/achievement')
      .then((res) => res.json())
      .then((data) => {
        if (data.data) {
          setData(data.data.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const listMenu = [
    {page: 'Beranda', link: '/'},
    {page: 'Tentang Kami', link: '/tentang-kami'},
    {page: 'Berita', link: '/semua-berita'},
    {page: 'Jurnal', link: '/semua-jurnal'},
    {page: 'Fasilitas', link: '/fasilitas'},
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
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16"><path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/></svg>
          informatika@undar.ac.id
        </a>
        <a href='http://prodi-apps.test/login' target='_blank' className='text-xs text-white border-2 py-2 px-6 rounded-sm hover:bg-white hover:text-blue-800 hover:duration-150'>
          Masuk
        </a>
      </div>
      {
        isOpenNav && <div onClick={() => setIsOpenNav(!isOpenNav)} className='md:hidden fixed inset-0 bg-gray-600 bg-opacity-50 z-40'></div>
      }
      <nav className={`${isScrolled && 'fixed top-0 inset-x-0 z-50 bg-opacity-80 md:backdrop-blur-md shadow-lg'} flex items-center justify-between bg-slate-100 px-5 py-2 xl:px-32`}>
        {imgServer
        ? <img src={imgServer} alt='' className='w-16 h-16' />
        : <Image src={Himatika} alt='' className='w-16 h-16' />
        }
        <button onClick={() => setIsOpenNav(!isOpenNav)} className='md:hidden'>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16"><path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/></svg>
        </button>
        {/* <ul className={`hidden py-4 lg:flex lg:items-center lg:gap-10`}> */}
        <ul className={`${!isOpenNav ? 'hidden' : 'fixed md:static bg-slate-100 inset-y-0 right-0 w-2/3 text-white z-50 px-8 md:bg-transparent md:z-auto md:w-auto'} md:px-0 py-4 md:flex md:items-center md:gap-10`}>
          <Image src={Himatika} alt='' className='md:hidden w-16 h-16 mb-6' />
          {listMenu.map((menu) => (
            <li key={menu.page} className={`${active == menu.page ? 'border-2 border-indigo-800 md:border-none' : ''} w-full mt-2 px-4 py-3 rounded-xl md:w-fit md:mt-0 md:px-0 md:py-0 md:rounded-none`}>
              <Link href={menu.link} className={`${active == menu.page ? 'text-blue-800' : 'text-slate-500'} text-sm hover:text-blue-800 hover:duration-150`}>
                {menu.page}
              </Link>
            </li>
          ))}
          {ShowMoU.map((mou) => (
            <li key={mou.hash} className={`${active == mou.url ? 'border-2 border-indigo-800 md:border-none' : ''} w-full mt-2 px-4 py-3 rounded-xl md:w-fit md:mt-0 md:px-0 md:py-0 md:rounded-none`}>
              <Link href={`/kerjasama/${mou.url}`} className={`${active == mou.url ? 'text-blue-800' : 'text-slate-500'} text-sm hover:text-blue-800 hover:duration-150`}>
                {mou.title}
              </Link>
            </li>
          ))}
          <li className={`relative w-full mt-2 px-4 py-3 rounded-xl md:w-fit md:mt-0 md:px-0 md:py-0 md:rounded-none`}>
              <button onClick={() => setIsOpenMore(!isOpenMore)} className={`text-slate-500 text-sm hover:text-blue-800 hover:duration-150`}>
                Lainnya
              </button>
              <ul className={`${isOpenMore ? '' : 'hidden'} text-slate-500 border-2 border-slate-400 rounded-lg mt-2 hover:border-indigo-800 duration-200 md:absolute md:-left-12 md:z-30 md:bg-slate-50 md:border-none md:w-44 md:text-center md:shadow-lg md:bg-opacity-75`}>
              {MoreMoU.map((mou) => (
                <li key={mou.hash} className={`${active == mou.url ? 'border-2 border-indigo-800 md:border-none' : ''} w-full my-2 px-4 rounded-xl md:w-full md:rounded-none`}>
                  <Link href={`/kerjasama/${mou.url}`} className={`${active == mou.url ? 'text-blue-800' : 'text-slate-500'} text-sm hover:text-blue-800 hover:duration-150`}>
                    {mou.title}
                  </Link>
                </li>
              ))}
              </ul>
          </li>
        </ul>
      </nav>
    </header>
  )
}
