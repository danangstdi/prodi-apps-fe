import Banner from "@/../public/hero.jpg";
import { getUtility } from "@/app/services/getUtility";
import Image from "next/image";
import Link from "next/link";

export default async function Utility() {
  const utilities = await getUtility('?limit=5');


  return (
    // <section className='flex justify-center py-8 px-4'>
    //   <div className="relative aspect-[16/6] w-[calc(100vw_-_32px)] overflow-hidden rounded-xl lg:aspect-auto lg:h-[300px] lg:w-[800px] xl:h-[460px] xl:w-[1250px]">
    //     <Image className="object-cover object-center absolute h-full w-full inset-0" src={Banner}/>
    //   </div>
    // </section>
    <section className="bg-indigo-600 px-5 py-14 xl:px-32 mt-14">
      <div className="flex items-center justify-between">
        <h3 className='text-white font-bold text-4xl'>Fasilitas</h3>
        <Link href='/fasilitas' className="border-2 border-white py-2 px-6 text-white text-sm hover:text-indigo-600 hover:bg-white hover:duration-150">
          Selengkapnya
        </Link>
      </div>
      <div className='mt-2'>
        <hr className='border-2 border-white w-1/6' />
        <hr className='border-2 border-white' />
      </div>
      <div class="w-full rounded-md flex gap-1 my-14 h-[200px] md:h-[254px] lg:h-[400px]">
        {utilities.data.data.map((util) => (
          <div key={util.hash} className="group relative flex-[1] hover:flex-[4] transition-all duration-500 w-full overflow-hidden cursor-pointer rounded-sm bg-gray-500 flex justify-center items-center">
            <img src={util.thumbnail} className="w-full h-full object-cover" />
            <div className="utility-card-shade opacity-0 absolute bottom-0 inset-x-0 py-4 px-6 group-hover:opacity-100 duration-500">
              <p className="text-white font-semibold text-xl">
                {util.title}
              </p>
              <p className="text-gray-400 text-sm mt-1 line-clamp-3">
                {util.content.short}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
