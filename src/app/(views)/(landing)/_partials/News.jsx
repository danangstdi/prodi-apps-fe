import Link from "next/link"
import { getArticle } from "@/app/services/getArticle"

export default async function News() {
  const articles = await getArticle('?limit=4');
  const latestArticle = articles.data.data[0]
  const moreArticle = articles.data.data.slice(1)

  return (
    <section className='bg-indigo-600 px-5 py-14 xl:px-32'>
      <div className="flex items-center justify-between">
        <h3 className='text-white font-bold text-4xl'>Berita</h3>
        <Link href='/berita' className="border-2 border-white py-2 px-6 text-white text-sm hover:text-indigo-600 hover:bg-white hover:duration-150">
          Selengkapnya
        </Link>
      </div>
      <div className='mt-2'>
        <hr className='border-2 border-white w-1/6' />
        <hr className='border-2 border-white' />
      </div>
      <div className="grid lg:grid-cols-2 gap-4 mt-8">
        <Link href={`/berita/${latestArticle.url}`} className="relative group h-[20rem] rounded-2xl overflow-hidden lg:h-[24rem]">
          <img src={latestArticle.thumbnail} className="w-full h-full object-cover group-hover:scale-110 group-hover:duration-500 group-hover:ease-in-out" />
          <div className="absolute bg-gray-900 bg-opacity-50 backdrop-blur-sm bottom-0 inset-x-0 text-white pt-5 pb-2 px-5">
            <div className="text-lg font-bold line-clamp-2">
              {latestArticle.title}
            </div>
            <div className="text-sm text-slate-200 line-clamp-2">
              {latestArticle.content.short}
            </div>
            <div className="text-xs mt-1">
              {latestArticle.created_at.full.split(',')[0]}
            </div>
          </div>
        </Link>
        <section>
          <h5 className="text-white text-xl font-bold my-3 lg:hidden">Berita lainnya</h5>
          {moreArticle.map((article) => (
            <Link key={article.hash} href={`/berita/${article.url}`} className="grid grid-cols-3 gap-3 mb-3 group">
              <div className="col-span-1 h-24 sm:h-36 md:h-48 lg:h-[7.5rem]">
                <img src={article.thumbnail} className="w-full h-full rounded-md object-cover"/>
              </div>
              <div className="text-white col-span-2">
                <p className="line-clamp-2 font-bold group-hover:underline group-hover:underline-offset-2">
                  {article.title}
                </p>
                <p className="line-clamp-2 text-xs mt-2 text-slate-200">
                  {article.content.short}
                </p>
                <p className="text-xs mt-2 text-slate-200">
                  {article.created_at.full.split(',')[0]}
                </p>
              </div>
            </Link>
          ))}
        </section>
      </div>
    </section>
  )
}
