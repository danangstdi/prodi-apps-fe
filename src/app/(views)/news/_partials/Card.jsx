import Link from "next/link";

export default function Card(props) {
  return (
    <Link href={`/news/${props.href}`} className="group mt-5 md:mt-0">
      <img
        src={props.img}
        alt=""
        className="w-full h-56 md:h-40 lg:h-48 xl:h-56 object-cover group-hover:brightness-75 group-hover:duration-150"
      />
      <h3 className="font-semibold text-lg my-2 line-clamp-2 group-hover:underline group-hover:underline-offset-2">
        {props.title}
      </h3>
      <p className="text-sm text-gray-600 text-justify line-clamp-5">
        {props.short}
      </p>
      <p className="text-xs text-gray-600 my-4">
        Dipublish pada {props.created_at}
      </p>
      <hr className="border" />
    </Link>
  );
}
