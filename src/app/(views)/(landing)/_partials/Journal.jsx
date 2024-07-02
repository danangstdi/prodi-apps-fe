import { getJournal } from "@/app/services/getJournal";
import Link from "next/link";

export default async function Announcement() {
  const journals = await getJournal('?limit=4');
  return (
    <section className="lg:col-span-2">
      <div className="flex justify-between">
        <h3 className="font-bold text-4xl">Jurnal</h3>
        <Link href='/news' className="border-2 border-indigo-600 py-2 px-6 text-indigo-600 text-sm hover:text-white hover:bg-indigo-600 hover:duration-150 lg:mr-10">
          Selengkapnya
        </Link>
      </div>
      <div className="mt-3 mb-5">
        <hr className="border-2 border-blue-800 w-1/3 lg:mr-10" />
        <hr className="border-2 border-blue-800 lg:mr-10" />
      </div>
      {journals.data.data.map((journal) => (
        <Link href={`/journal/${journal.url}`} key={journal.hash}>
          <article className="py-2 lg:pr-10 group">
            <h1 className="font-semibold text-sm line-clamp-1 group-hover:text-slate-700 group-hover:duration-150">
              {journal.title}
            </h1>
            <div className="flex items-center gap-1 mt-1 text-gray-500 group-hover:text-gray-400 group-hover:duration-150">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16"><path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/></svg>
              <p className="text-xs font-bold">
                {journal.author.name}
              </p>
            </div>
            <div className="flex items-center gap-1 mt-1 text-gray-500 group-hover:text-gray-400 group-hover:duration-150">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16"><path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5m9.954 3H2.545c-.3 0-.545.224-.545.5v1c0 .276.244.5.545.5h10.91c.3 0 .545-.224.545-.5v-1c0-.276-.244-.5-.546-.5M8.5 7a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm3 0a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zM3 10.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5m3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5z" /></svg>
              <p className="text-xs font-bold">
                {journal.updated_at.full.split(',')[0]}
              </p>
            </div>
          </article>
        </Link>
      ))}
    </section>
  );
}
