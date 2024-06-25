import Image from "next/image"
import Banner from '@/../public/hero.jpg'
import Link from "next/link"

export default async function News() {
  return (
    <section className='bg-indigo-600 px-5 py-14 xl:px-32'>
      <div className="flex items-center justify-between">
        <h3 className='text-white font-bold text-4xl'>Berita</h3>
        <Link href='' className="border-2 border-white py-2 px-6 text-white text-sm hover:text-indigo-600 hover:bg-white hover:duration-150">
          Selengkapnya
        </Link>
      </div>
      <div className='mt-2'>
        <hr className='border-2 border-white w-1/6' />
        <hr className='border-2 border-white' />
      </div>
      <div className="grid lg:grid-cols-2 gap-4 mt-8">
        <Link href=''>
          <div className="relative group h-[20rem] rounded-2xl overflow-hidden lg:h-[24rem]">
            <Image src={Banner} className="w-full h-full object-cover group-hover:scale-110 group-hover:duration-500 group-hover:ease-in-out" />
            <div className="absolute bg-gray-900 bg-opacity-50 backdrop-blur-sm bottom-0 inset-x-0 text-white pt-5 pb-2 px-5">
              <div className="text-lg font-bold line-clamp-2">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et in, necessitatibus facilis, hic saepe neque, provident fugit autem repellat eaque accusamus nisi! Eos, iure? Exercitationem soluta excepturi minima ratione molestias.
              </div>
              <div className="text-xs mt-4">
                20 Juni 2024
              </div>
            </div>
          </div>
        </Link>
        <div className="flex flex-col justify-between h-[24rem]">
          <h5 className="text-white font-bold mt-3 lg:hidden">Berita lainnya</h5>
          <Link href='' className="flex gap-3 group">
            <div className="w-96 h-full">
              <Image src={Banner} className="h-full w-full rounded-md object-cover" />
            </div>
            <div className="text-white">
              <p className="line-clamp-3 font-bold group-hover:underline group-hover:underline-offset-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat provident sapiente veritatis alias illum nesciunt eum praesentium sequi in culpa.</p>
              <p className="text-xs mt-2 text-slate-200">20 Juni 2023</p>
            </div>
          </Link>
          <Link href='' className="flex gap-3 group">
            <div className="w-96 h-full">
              <Image src={Banner} className="h-full w-full rounded-md object-cover" />
            </div>
            <div className="text-white">
              <p className="line-clamp-3 font-bold group-hover:underline group-hover:underline-offset-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat provident sapiente veritatis alias illum nesciunt eum praesentium sequi in culpa.</p>
              <p className="text-xs mt-2 text-slate-200">20 Juni 2023</p>
            </div>
          </Link>
          <Link href='' className="flex gap-3 group">
            <div className="w-96 h-full">
              <Image src={Banner} className="h-full w-full rounded-md object-cover" />
            </div>
            <div className="text-white">
              <p className="line-clamp-3 font-bold group-hover:underline group-hover:underline-offset-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat provident sapiente veritatis alias illum nesciunt eum praesentium sequi in culpa.</p>
              <p className="text-xs mt-2 text-slate-200">20 Juni 2023</p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}
