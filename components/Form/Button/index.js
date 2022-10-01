export const Button = ({ children, ...props }) => {
  return (
    <button
      {...props}
      className="absolute right-2.5 bottom-2.5 rounded-lg bg-rose-700 px-4 py-2 text-sm font-medium text-white hover:bg-rose-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-rose-600 dark:hover:bg-rose-700 dark:focus:ring-blue-800"
    >
      {children}
    </button>
  );
};
