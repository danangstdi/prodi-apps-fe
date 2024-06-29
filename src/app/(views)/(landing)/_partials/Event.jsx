import { getEvent } from "@/app/services/getEvent"
import Link from "next/link"

export default async function Event() {
  const events = await getEvent()

  return (
    <section className='mt-10 lg:mt-0 lg:col-span-1'>
      <h3 className='font-bold text-4xl'>Acara</h3>
      <div className='mt-3 mb-5'>
        <hr className='border-2 border-blue-800 w-1/3' />
        <hr className='border-2 border-blue-800' />
      </div>
      {events.data.data.map((eventData) => (
        <Link href='' className="flex mt-1 w-full">
          <span className="bg-indigo-900 px-1"></span>
          <div className="text-center bg-gray-300 p-5">
            <p className="font-bold text-4xl">
              {eventData.date.start_at.split(' ')[0]}
            </p>
            <p className="font-bold text-lg">
              {eventData.date.start_at.split(' ')[1]}
            </p>
          </div>
          <div className="bg-gray-200 w-full flex flex-col justify-center gap-1 pl-4 pr-1">
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
