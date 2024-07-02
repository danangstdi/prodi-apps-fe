import { getEvent } from "@/app/services/getEvent"
import Link from "next/link"

export default async function Event() {
  const events = await getEvent('?limit=3')

  return (
    <section className='mt-10 lg:mt-0 lg:col-span-1'>
      <div className="flex justify-between">
        <h3 className='font-bold text-4xl'>Acara</h3>
        <Link href='/news' className="border-2 border-indigo-600 py-2 px-6 text-indigo-600 text-sm hover:text-white hover:bg-indigo-600 hover:duration-150">
          Selengkapnya
        </Link>
      </div>
      <div className='mt-3 mb-5'>
        <hr className='border-2 border-blue-800 w-1/3' />
        <hr className='border-2 border-blue-800' />
      </div>
      {events.data.data.map((eventData) => (
        <Link href='' className="grid grid-cols-8 mt-1 w-full">
          <div className="col-span-2 text-center bg-gray-300 p-5 border-l-8 border-l-indigo-900">
            <p className="font-bold text-4xl">
              {eventData.date.start_at.split(' ')[0]}
            </p>
            <p className="font-bold text-lg">
              {eventData.date.start_at.split(' ')[1]}
            </p>
          </div>
          <div className="col-span-6 bg-gray-200 w-full flex flex-col justify-center gap-1 pl-4 pr-1">
            <h2 className="line-clamp-1 font-bold">
              {eventData.title}
            </h2>
            <p className="text-xs text-gray-700">08:00 - 11:00</p>
            <p className="text-xs text-gray-700">
              {eventData.location}
            </p>
          </div>
        </Link>
      ))}
    </section>
  )
}
