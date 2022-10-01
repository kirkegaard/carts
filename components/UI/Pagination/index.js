export const Pagination = ({ setPage, current, pages }) => {
  return (
    <div className="my-2 flex justify-center">
      <button
        onClick={() => current > 1 && setPage(current - 1)}
        className="inline-flex cursor-pointer items-center rounded-lg border border-zinc-800 bg-white py-2 px-4 text-sm font-medium text-gray-500 hover:bg-zinc-800 hover:text-gray-700 dark:border-zinc-800 dark:bg-zinc-800 dark:text-gray-400 dark:hover:bg-rose-800 dark:hover:text-white"
      >
        Previous
      </button>
      <span className="mx-3 inline-flex items-center rounded-lg border border-zinc-800 bg-white py-2 px-4 text-sm font-medium text-gray-500 dark:border-zinc-800 dark:bg-zinc-800 dark:text-gray-400">
        {current} / {pages}
      </span>
      <button
        onClick={() => current < pages && setPage(current + 1)}
        className="inline-flex cursor-pointer items-center rounded-lg border border-zinc-800 bg-white py-2 px-4 text-sm font-medium text-gray-500 hover:bg-zinc-800 hover:text-gray-700 dark:border-zinc-800 dark:bg-zinc-800 dark:text-gray-400 dark:hover:bg-rose-800 dark:hover:text-white"
      >
        Next
      </button>
    </div>
  );
};
