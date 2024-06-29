"use client"
import { useRouter } from "next/navigation";

export default function Pagination({ totalPages, currentPage }) {
  const router = useRouter();
  const pages = [];
  const maxVisiblePages = 4;

  pages.push(1);

  let from = currentPage - Math.floor((maxVisiblePages - 1) / 2);
  let to = currentPage + Math.floor((maxVisiblePages - 1) / 2);

  if (from < 2) {
    from = 2;
    to = from + maxVisiblePages - 1;
  }
  if (to >= totalPages) {
    to = totalPages - 1;
    from = to - maxVisiblePages + 1;
  }

  from = Math.max(from, 2);
  to = Math.min(to, totalPages - 1);

  for (let i = from; i <= to; i++) {
    pages.push(i);
  }

  if (totalPages > 1 && !pages.includes(totalPages)) {
    pages.push(totalPages);
  }

  while (pages.length > 6) {
    if (pages[1] - 1 > 1) {
      pages.splice(1, 1);
    } else {
      pages.splice(-2, 1);
    }
  }

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    router.push(`/news/page/${page}`);
  };

  return (
    <div className="col-span-2 lg:col-span-4 flex justify-end gap-2">
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`${
          currentPage === 1 ? 'border-slate-400 text-slate-400' : 'border-blue-800 text-blue-800'
        } border-2 rounded-full h-8 px-3 flex justify-center items-center text-sm md:text-base md:h-10`}
      >
        Previous
      </button>
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => handlePageChange(page)}
          className={`${
            page == currentPage ? 'bg-blue-800 text-slate-400' : 'text-blue-800'
          } border-2 border-blue-800 rounded-full h-8 w-8 flex justify-center items-center text-sm md:text-base md:h-10 md:w-10`}
        >
          {page}
        </button>
      ))}
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`${
          currentPage === totalPages ? 'border-slate-400 text-slate-400' : 'border-blue-800 text-blue-800'
        } border-2 rounded-full h-8 px-3 flex justify-center items-center text-sm md:text-base md:h-10`}
      >
        Next
      </button>
    </div>
  );
}
