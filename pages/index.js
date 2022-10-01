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
    setQuery(target.value);
  };

  useEffect(() => {
    if (router.query.q) {
      setQuery(router.query.q);
    }
  }, [router]);

  console.log(page);

  return (
    <Layout>
      <div className="mx-auto w-full max-w-screen-md p-4">
        <form className="mb-2" onSubmit={handleSubmit}>
          <Search name="q" onInput={handleInput} />
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
