import { Button } from "../Button";
import { Input } from "../Input";
import { Label } from "../Label";

export const Search = ({ onSubmit, onChange }) => {
  return (
    <div className="w-full">
      <Label htmlFor="search">Search</Label>
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <svg
            aria-hidden="true"
            className="h-5 w-5 text-gray-500 dark:text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </div>
        <Input
          type="search"
          name="q"
          id="default-search"
          placeholder="Search Mockups, Logos..."
          required
        />
        <Button type="submit">Search</Button>
      </div>
    </div>
  );
};