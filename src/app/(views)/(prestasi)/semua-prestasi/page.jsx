import Navbar from "@/app/components/layouts/Navbar";
import Footer from "@/app/components/layouts/Footer";
import Pagination from "@/app/components/partials/Pagination";
import { getAchievement } from "@/app/services/getAchievement";
import Card from "../prestasi/_partials/Card";

export default async function Achievement() {
  const allArticles = await getAchievement();

  return (
    <>
      <Navbar active="Berita"/>
      <main className="px-10 py-16">
        <h3 className='font-bold text-4xl'>Semua Prestasi</h3>
        <div className='mt-3 mb-5'>
          <hr className='border-2 border-blue-800 w-1/5' />
          <hr className='border-2 border-blue-800' />
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 md:gap-4">
          {allArticles.data.data.map((article) => (
            <Card
              href={article.url}
              img={article.thumbnail}
              title={article.title}
              short={article.content.short}
              created_at={article.created_at.full.split(',')[0]}
            />
          ))}
        </div>
        <Pagination href='semua-prestasi' totalPages={allArticles.data.meta.last_page} currentPage={allArticles.data.meta.current_page} />
      </main>
      <Footer/>
    </>
  );
}
