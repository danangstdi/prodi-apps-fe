import Navbar from "@/app/components/layouts/Navbar";
import { getArticle } from "@/app/services/getArticle";
import Footer from "@/app/components/layouts/Footer";
import Card from "../berita/_partials/Card";
import Pagination from "@/app/components/partials/Pagination";

export default async function News() {
  const allArticles = await getArticle();

  return (
    <>
      <Navbar active="Berita"/>
      <main className="px-10 py-16">
        <h3 className='font-bold text-4xl'>Semua Berita</h3>
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
        <Pagination href='semua-berita' totalPages={allArticles.data.meta.last_page} currentPage={allArticles.data.meta.current_page} />
      </main>
      <Footer/>
    </>
  );
}
