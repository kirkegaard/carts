import { useDebounce } from "@react-hook/debounce";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import useSWR from "swr";

import { Layout } from "../components/UI/Layout";
import { Pagination } from "../components/UI/Pagination";
import { Search } from "../components/Form/Search";
import { Game, List as GameList } from "../components/Game";

const List = ({ source }) => {
  const router = useRouter();
  const [page, setPage] = useState(1);
  const [query, setQuery] = useDebounce("", 300);
  const { data, error } = useSWR(`/api/${source}?q=${query}&page=${page}`);

  const handleSubmit = (event) => {
    event.preventDefault();
    const target = event.target.q;
    handleInput({ target });
  };

  const handleInput = ({ target }) => {
    setPage(1);
    setQuery(target.value);
  };

  const handleReset = () => {
    setPage(1);
    setQuery("");
  };

  useEffect(() => {
    if (query !== router.query.q) {
      router.replace({ query: { source, q: query } });
    }
  }, [router, source, query]);

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
        <form onSubmit={handleSubmit}>
          <Search name="q" onInput={handleInput} />
        </form>
        <div className="text-right">
          <button
            onClick={handleReset}
            className="my-2 rounded-lg bg-zinc-800 py-1 px-2 text-xs hover:bg-rose-500"
          >
            Reset
          </button>
        </div>

        <div className="grid gap-2">{!error && <GameList {...data} />}</div>

        {data?.pagination && (
          <Pagination setPage={setPage} {...data.pagination} />
        )}
      </div>
    </Layout>
  );
};

export async function getServerSideProps(context) {
  const { source } = context.query;
  return {
    props: { source },
  };
}

export default List;
