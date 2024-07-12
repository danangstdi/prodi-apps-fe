import Footer from "@/app/components/layouts/Footer";
import Navbar from "@/app/components/layouts/Navbar";
import { getUtility } from "@/app/services/getUtility";

export default async function page() {
  const utilites = await getUtility();

  return (
    <>
      <Navbar active="Fasilitas"/>
        <main className="px-4 py-8 lg:px-32 lg:py-20">
          <h3 className='font-bold text-2xl lg:text-4xl'>Fasilitas, Saran & Prasarana</h3>
          <div className='mt-3 mb-10'>
            <hr className='border-2 border-blue-800 w-1/5' />
            <hr className='border-2 border-blue-800' />
          </div>
          {utilites.data.data.map((util) => (
            <article key={util.hash} href={`/news/${util.url}`} className="grid md:grid-cols-8 gap-3 mb-8 lg:mb-3">
              <div className="md:col-span-3 w-full h-56 md:h-40 lg:h-72">
                <img src={util.thumbnail} className="w-full h-full aspect-[3/2] object-cover"/>
              </div>
              <div className="md:col-span-5 lg:ml-8">
                <p className="line-clamp-3 text-xl lg:text-3xl font-semibold">
                  {util.title}
                </p>
                <p className="line-clamp-2 text-xs lg:text-sm mt-2 text-gray-700">
                  {util.content.short}
                </p>
              </div>
            </article>
          ))}
        </main>
      <Footer />
    </>
  );
}
