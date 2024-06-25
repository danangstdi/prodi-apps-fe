import Himatika from '@/../public/himatika.png'
import Image from 'next/image'
import Link from 'next/link'
import Undar from '@/../public/undar.png'
import UndarTV from '@/../public/undar tv2.jpg'
import MerdekaBelajar from '@/../public/merdeka-belajar.png'
import KampusMerdeka from '@/../public/kampus-merdeka.png'

export default function Footer() {
  return (
    <footer>
      <div className='bg-blue-800 px-5 p-8 xl:px-32'>
        <div className="flex justify-between flex-col xl:flex-row">
          <div className='flex items-center gap-14'>
            <Image src={Himatika} alt='' className='w-28 h-28'/>
            <ul className='flex flex-col gap-1 text-xs text-white'>
              <li>Kampus ITS Sukolilo - Surabaya</li>
              <li>Email : humas@its.ac.id</li>
              <li>Phone: 031-5994251-54, 5947274, 5945472</li>
              <li>Fax: 031-5923465, 5947845</li>
            </ul>
          </div>
          <div className='flex items-center justify-center gap-2 mt-10 bg-slate-200 px-10 lg:border-l-8 lg:border-l-indigo-900 lg:gap-10 lg:mt-0'>
            <Image src={Undar} className='w-14 h-14' alt='' />
            <Image src={UndarTV} className='w-28 h-fit' alt='' />
            <Image src={MerdekaBelajar} className='w-24 h-fit' alt='' />
            <Image src={KampusMerdeka} className='w-28 h-fit' alt='' />
          </div>
        </div>
        <div className="text-white grid lg:grid-cols-4">
          <div className='mt-14'>
            <h5 className='font-bold text-lg mb-2'>Halaman</h5>
            <ul>
              <li>
                <Link href='' className='text-sm'>
                  Beranda
                </Link>
              </li>
              <li>
                <Link href='' className='text-sm'>
                  Berita
                </Link>
              </li>
              <li>
                <Link href='' className='text-sm'>
                  Acara
                </Link>
              </li>
            </ul>
          </div>
          <div className='mt-14'>
            <h5 className='font-bold text-lg mb-2'>Campus Life</h5>
            <ul>
              <li>
                <Link href='' className='text-sm'>
                  Beranda
                </Link>
              </li>
              <li>
                <Link href='' className='text-sm'>
                  Berita
                </Link>
              </li>
              <li>
                <Link href='' className='text-sm'>
                  Acara
                </Link>
              </li>
            </ul>
          </div>
          <div className='mt-14'>
            <h5 className='font-bold text-lg mb-2'>Research</h5>
            <ul>
              <li>
                <Link href='' className='text-sm'>
                  Beranda
                </Link>
              </li>
              <li>
                <Link href='' className='text-sm'>
                  Berita
                </Link>
              </li>
              <li>
                <Link href='' className='text-sm'>
                  Acara
                </Link>
              </li>
            </ul>
          </div>
          <div className='mt-14'>
            <h5 className='font-bold text-lg mb-2'>Halaman</h5>
            <ul>
              <li>
                <Link href='' className='text-sm'>
                  Beranda
                </Link>
              </li>
              <li>
                <Link href='' className='text-sm'>
                  Berita
                </Link>
              </li>
              <li>
                <Link href='' className='text-sm'>
                  Acara
                </Link>
              </li>
            </ul>
          </div>
          <div className='mt-14'>
            <h5 className='font-bold text-lg mb-2'>Halaman</h5>
            <ul>
              <li>
                <Link href='' className='text-sm'>
                  Beranda
                </Link>
              </li>
              <li>
                <Link href='' className='text-sm'>
                  Berita
                </Link>
              </li>
              <li>
                <Link href='' className='text-sm'>
                  Acara
                </Link>
              </li>
            </ul>
          </div>
          <div className='mt-14'>
            <h5 className='font-bold text-lg mb-2'>Halaman</h5>
            <ul>
              <li>
                <Link href='' className='text-sm'>
                  Beranda
                </Link>
              </li>
              <li>
                <Link href='' className='text-sm'>
                  Berita
                </Link>
              </li>
              <li>
                <Link href='' className='text-sm'>
                  Acara
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="p-5 bg-blue-950 text-white text-center text-xs">
        Copyright © 2024, Teknik Informatika Undar Jombang
      </div>
    </footer>
  )
}
