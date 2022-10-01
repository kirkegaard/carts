export const Label = ({ children, htmlFor }) => {
  return (
    <label
      htmlFor={htmlFor}
      className="sr-only mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
    >
      {children}
    </label>
  );
};
