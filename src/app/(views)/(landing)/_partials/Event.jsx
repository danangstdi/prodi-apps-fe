import Link from "next/link"

export default function Event() {
  return (
    <section className='mt-10 lg:mt-0 lg:col-span-1'>
      <h3 className='font-bold text-4xl'>Acara</h3>
      <div className='mt-3 mb-5'>
        <hr className='border-2 border-blue-800 w-1/3' />
        <hr className='border-2 border-blue-800' />
      </div>
      <Link href='' className="flex mt-1">
        <span className="bg-indigo-900 px-1"></span>
        <div className="text-center bg-gray-300 p-5">
          <p className="font-bold text-4xl">25</p>
          <p className="font-bold text-lg">DEC</p>
        </div>
        <div className="bg-gray-200 flex flex-col justify-center gap-1 pl-4 pr-1">
          <h2 className="line-clamp-1 font-bold">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, iste?</h2>
          <p className="text-xs text-gray-700">08:00 - 11:00</p>
          <p className="text-xs text-gray-700">Aula Undar</p>
        </div>
      </Link>
      <Link href='' className="flex mt-1">
        <span className="bg-indigo-900 px-1"></span>
        <div className="text-center bg-gray-300 p-5">
          <p className="font-bold text-4xl">08</p>
          <p className="font-bold text-lg">JUN</p>
        </div>
        <div className="bg-gray-200 flex flex-col justify-center gap-1 pl-4 pr-1">
          <h2 className="line-clamp-1 font-bold">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, iste?</h2>
          <p className="text-xs text-gray-700">08:00 - 11:00</p>
          <p className="text-xs text-gray-700">Aula Undar</p>
        </div>
      </Link>
    </section>
  )
}
