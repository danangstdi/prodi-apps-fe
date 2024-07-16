import { getAchievement } from "@/app/services/getAchievement";
import Link from "next/link"

export default async function Achievement() {
  const articles = await getAchievement('?limit=4');

  if (articles.data.data.length === 0) {
    return null;
  }

  return (
      <section className='px-5 py-14 xl:px-32'>
        <div className="flex items-center justify-between">
          <h3 className=' font-bold text-4xl'>Prestasi</h3>
          {articles.data.data.length !== 0 &&
            <Link href='/semua-prestasi' className="border-2 border-indigo-600 text-indigo-600 py-2 px-6 text-sm hover:text-white hover:bg-indigo-600 hover:duration-150">
              Selengkapnya
            </Link>
          }
        </div>
        <div className='mt-2'>
          <hr className='border-2 border-indigo-600 w-1/6' />
          <hr className='border-2 border-indigo-600' />
        </div>
        <div className="grid lg:grid-cols-4 gap-4 mt-8">
            {articles.data.data.map((article) => (
              <Link key={article.hash} href={`/prestasi/${article.url}`} className="w-full group">
                <img src={article.thumbnail} alt="" className="w-full md:h-48 object-cover rounded-xl group-hover:-translate-y-4 group-hover:duration-300 group-hover:ease-in-out" />
                <h1 className="mt-2 font-semibold line-clamp-2 group-hover:ml-2 group-hover:duration-300 group-hover:ease-in-out">
                  {article.title}
                </h1>
              </Link>
            ))}
        </div>
      </section>
  )
}
