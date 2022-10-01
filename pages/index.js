import { useDebounce } from "@react-hook/debounce";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import useSWR from "swr";

import { Layout } from "../components/UI/Layout";
import { Search } from "../components/Form/Search";
import { Game, List as GameList } from "../components/Game";

const Home = () => {
  const router = useRouter();
  const [query, setQuery] = useDebounce("", 200);
  const { data, error } = useSWR(`/api/search?q=${query}`);

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

  return (
    <Layout>
      <div className="mx-auto w-full max-w-screen-md p-4">
        <form className="mb-2" onSubmit={handleSubmit}>
          <Search name="q" onInput={handleInput} />
        </form>

        <div className="grid gap-2">{!error && <GameList {...data} />}</div>
      </div>
    </Layout>
  );
};

export default Home;
