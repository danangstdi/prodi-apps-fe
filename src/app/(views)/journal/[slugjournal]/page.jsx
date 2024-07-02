import Footer from "@/app/components/layouts/Footer"
import Navbar from "@/app/components/layouts/Navbar"
import { getSingleJournal } from "@/app/services/getSingleJournal"
import Link from "next/link";

export default async function page({params: {slugjournal}}) {
  const journal = await getSingleJournal(slugjournal);
  return (
    <>
      <Navbar activity="Jurnal"/>
      <main className="py-14 px-4 md:mx-20 lg:mx-36 xl:mx-80">
          <div className="flex gap-2">
            <div className="border-2 border-indigo-500 bg-indigo-500 w-fit py-1 text-white px-4 text-sm">
              Journal
            </div>
            <div className="border-2 border-indigo-500 w-fit py-1 text-indigo-500 px-4 text-sm">
              PDF Available
            </div>
          </div>
          <p className="text-3xl font-semibold mt-3">
            {journal.data.title}
          </p>
          <p className="text-gray-600 text-sm mt-3">
            Diterbitkan pada : {journal.data.created_at.full.split(',')[0]}
          </p>
          <p className="text-gray-600 text-sm">
            Author : {journal.data.author.name}
          </p>
          <div className="w-fit mt-5">
            <div className="p-6 bg-slate-50 shadow-md">
              <div className="grid grid-cols-6 gap-2">
                <div className="col-span-2 h-44 w-32 rounded-lg overflow-hidden">
                  <img src={journal.data.thumbnail} alt="" className="h-full w-full object-cover" />
                </div>
                <div className="col-span-4 flex flex-col gap-2">
                  <Link href={journal.data.file} download className="w-full text-center bg-indigo-600 border-2 border-indigo-600 py-2 px-6 text-white text-sm hover:text-indigo-600 hover:bg-white hover:duration-150 lg:mr-10">
                    Download PDF
                  </Link>
                  <Link href={journal.data.file} target="_blank" className="w-full text-center border-2 border-indigo-600 py-2 px-6 text-indigo-600 text-sm hover:text-white hover:bg-indigo-600 hover:duration-150 lg:mr-10">
                    Read PDF
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-slate-50 text-gray-600 mt-5 p-6 shadow-lg rounded-lg">
            <p className="text-xl py-2">
              Deskripsi :
            </p>
            <hr className="border-1 border-slate-400 pb-2" />
            <div className="text-justify" dangerouslySetInnerHTML={{ __html:journal.data.content.full }}></div>
          </div>
      </main>
      <Footer/>
    </>
  )
}
