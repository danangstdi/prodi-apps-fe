import { getMoU } from '@/app/services/getMoU'
import Link from 'next/link'

export default async function NavbarLists({active}) {
  const MoU = await getMoU()
  
  const listMenu = [
    {page: 'Beranda', link: '/'},
    {page: 'Tentang Kami', link: '/tentang-kami'},
    {page: 'Berita', link: '/semua-berita'},
    {page: 'Jurnal', link: '/semua-jurnal'},
    {page: 'Fasilitas', link: '/fasilitas'},
  ]
  return (
    <>
          {listMenu.map((menu) => (
            <li key={menu.page} className={`${active == menu.page ? 'border-2 border-indigo-800 md:border-none' : ''} w-full mt-2 px-4 py-3 rounded-xl md:w-fit md:mt-0 md:px-0 md:py-0 md:rounded-none`}>
              <Link href={menu.link} className={`${active == menu.page ? 'text-blue-800' : 'text-slate-500'} text-sm hover:text-blue-800 hover:duration-150`}>
                {menu.page}
              </Link>
            </li>
          ))}
          {MoU.map((menu) => (
            <li key={menu.page} className={`${active == menu.page ? 'border-2 border-indigo-800 md:border-none' : ''} w-full mt-2 px-4 py-3 rounded-xl md:w-fit md:mt-0 md:px-0 md:py-0 md:rounded-none`}>
              <Link href={menu.link} className={`${active == menu.page ? 'text-blue-800' : 'text-slate-500'} text-sm hover:text-blue-800 hover:duration-150`}>
                {menu.page}
              </Link>
            </li>
          ))}
    </>
  )
}
