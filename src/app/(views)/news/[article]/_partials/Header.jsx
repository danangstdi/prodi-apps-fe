import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed w-full bg-slate-50 z-10">
      <nav className="flex items-center justify-between border-b border-b-gray-400 px-4 py-4 md:px-12 md:py-6">
        <h2 className="text-xl font-semibold">Teknik Informatika</h2>
        <ul className="flex items-center">
          <li>
            <Link href='/register'>
              Login
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
