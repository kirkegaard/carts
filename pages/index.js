import { useDebounce } from "@react-hook/debounce";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import useSWR from "swr";

import { Layout } from "../components/UI/Layout";
import { Pagination } from "../components/UI/Pagination";
import { Search } from "../components/Form/Search";
import { Game, List as GameList } from "../components/Game";

const Home = () => {
  const router = useRouter();
  const [page, setPage] = useState(1);
  const [query, setQuery] = useDebounce("", 200);
  const { data, error } = useSWR(`/api/search?q=${query}&page=${page}`);

  const handleSubmit = (event) => {
    event.preventDefault();
    const target = event.target.q;
    handleInput({ target });
  };

  const handleInput = ({ target }) => {
    router.push({ query: { q: target.value } });
    setPage(1);
    setQuery(target.value);
  };

  useEffect(() => {
    if (router.query.q) {
      setQuery(router.query.q);
    }
    if (router.query.page) {
      setPage(router.query.page);
    }
  }, [router, setQuery]);

  return (
    <Layout>
      <div className="mx-auto w-full max-w-screen-md p-4">
        <form className="mb-2 text-right" onSubmit={handleSubmit}>
          <Search name="q" onInput={handleInput} />
          <button
            onClick={() => {
              setPage(1);
              setQuery("");
            }}
            className="my-2 rounded-lg bg-zinc-800 py-1 px-2 text-xs hover:bg-rose-500"
          >
            Reset
          </button>
        </form>

        <div className="grid gap-2">{!error && <GameList {...data} />}</div>

        {data?.pagination && (
          <Pagination setPage={setPage} {...data.pagination} />
        )}
      </div>
    </Layout>
  );
};

export default Home;
