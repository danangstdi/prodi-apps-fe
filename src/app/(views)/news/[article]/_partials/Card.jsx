import Image from "next/image";
import Link from "next/link";
import img from '@/../public/hero.jpg'

export default function Card() {
  return (
    <Link href="" className="group mt-5 md:mt-0">
      <Image
        src={img}
        alt=""
        className="w-full h-56 md:h-40 lg:h-48 xl:h-56 object-cover group-hover:brightness-75 group-hover:duration-150"
      />
      <h3 className="font-semibold text-lg my-2">
        Belajar PHP dasar untuk pemula anja sg sdfdsf
      </h3>
      <p className="text-sm text-gray-600 text-justify">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit illum
        quibusdam, nostrum cupiditate quia quae? Assumenda, totam perferendis
        iure minima explicabo eos atque earum nisi expedita ab incidunt sed vel.
      </p>
      <p className="text-xs text-gray-600 my-4">Dipublish pada 7 Jan 2024</p>
      <hr className="border" />
    </Link>
  );
}
