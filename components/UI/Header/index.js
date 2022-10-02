import { useRouter } from "next/router";
import Link from "next/link";
import DarkModeToggle from "../Theme/Toggle";

const Button = ({ href, children }) => (
  <Link href={href}>
    <a className="rounded-lg border border-yellow-400 px-5 py-2.5 text-center text-sm font-medium text-yellow-400 hover:bg-yellow-500 hover:text-white focus:outline-none focus:ring-4 focus:ring-yellow-300 dark:border-yellow-300 dark:text-yellow-300 dark:hover:bg-yellow-400 dark:hover:text-white dark:focus:ring-yellow-900">
      {children}
    </a>
  </Link>
);

export const Header = () => {
  const router = useRouter();
  return (
    <header className="mx-auto w-full max-w-screen-md p-4">
      <ul className="inline-flex gap-2">
        <li>
          <Button href={{ query: { ...router.query, source: "gb" } }}>
            GB
          </Button>
        </li>
        <li>
          <Button href={{ query: { ...router.query, source: "gbc" } }}>
            GBC
          </Button>
        </li>
        <li>
          <Button href={{ query: { ...router.query, source: "gba" } }}>
            GBA
          </Button>
        </li>
      </ul>
      <div className="absolute right-2.5 top-2.5">
        <DarkModeToggle />
      </div>
    </header>
  );
};
