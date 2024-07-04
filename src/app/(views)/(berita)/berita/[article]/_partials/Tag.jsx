import Link from "next/link";

export default function Tag() {
  return (
    <section id="tag" className="mt-12 flex items-center flex-wrap gap-2">
      <Link href="/" className="bg-gray-200 px-5 py-2 rounded-full text-sm text-gray-700 hover:text-gray-950">
        Nextjs
      </Link>
      <Link href="/" className="bg-gray-200 px-5 py-2 rounded-full text-sm text-gray-700 hover:text-gray-950">
        Nextjs
      </Link>
      <Link href="/" className="bg-gray-200 px-5 py-2 rounded-full text-sm text-gray-700 hover:text-gray-950">
        Javascript
      </Link>
      <Link href="/" className="bg-gray-200 px-5 py-2 rounded-full text-sm text-gray-700 hover:text-gray-950">
        Web Developer
      </Link>
      <Link href="/" className="bg-gray-200 px-5 py-2 rounded-full text-sm text-gray-700 hover:text-gray-950">
        PHP
      </Link>
    </section>
  );
}
