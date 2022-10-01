import DarkModeToggle from "../Theme/Toggle";

export const Header = () => {
  return (
    <header className="flex justify-end p-4">
      <DarkModeToggle />
    </header>
  );
};
