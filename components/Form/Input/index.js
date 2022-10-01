export const Input = ({ ...props }) => {
  return (
    <input
      {...props}
      className="lock w-full rounded-lg border border-gray-300 bg-gray-50 p-4 pl-10 text-sm text-gray-900 focus:border-rose-500 focus:ring-rose-500 dark:border-gray-600 dark:bg-zinc-900 dark:text-white dark:placeholder-gray-400 dark:focus:border-rose-500 dark:focus:bg-zinc-800 dark:focus:ring-rose-500"
    />
  );
};
