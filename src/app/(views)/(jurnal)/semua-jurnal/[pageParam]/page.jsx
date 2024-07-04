import Footer from "@/app/components/layouts/Footer"
import Navbar from "@/app/components/layouts/Navbar"
import Pagination from "@/app/components/partials/Pagination"
import { getJournal } from "@/app/services/getJournal"
import Link from "next/link"

export default async function Journal({params: {pageParam}}) {
  const getJournals = await getJournal(`?page=${pageParam}`)

  return (
    <>
      <Navbar active="Jurnal"/>
      <main className="grid gap-6 mx-10 my-10 md:grid-cols-2 xl:grid-cols-3 lg:mx-48">
        {getJournals.data.data.map((journal) => (
          <Link key={journal.hash} href={`jurnal/${journal.url}`} className="group bg-white p-10 shadow-lg lg:p-5 hover:bg-slate-200 hover:duration-200">
            <img src={journal.thumbnail} alt="" className="w-full h-[30rem] object-cover shadow-lg shadow-gray-400 sm:h-[47rem] md:h-[24.5rem] lg:h-[30rem] group-hover:brightness-75 group-hover:duration-200" />
            <h1 className="poppins-bold text-xl mt-4 line-clamp-3">
              {journal.title}
            </h1>
            <h3 className="line-clamp-2 text-sm mt-2">Oleh : <strong>{journal.author.name}</strong></h3>
            <p className="line-clamp-1 text-sm mb-auto">Published : {journal.created_at.full.split(',')[0]}</p>
          </Link>
        ))}
      </main>
      <Pagination href='semua-jurnal' totalPages={getJournals.data.meta.last_page} currentPage={getJournals.data.meta.current_page} />
      <Footer/>
    </>
  )
}