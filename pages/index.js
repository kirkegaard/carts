import { useState, useEffect } from "react";
import useSWR from "swr";

import { Layout } from "../components/UI/Layout";
import { Search } from "../components/Form/Search";
import { Game, List as GameList } from "../components/Game";

const Home = () => {
  const [query, setQuery] = useState("");
  const { data, error } = useSWR(`/api/search?q=${query}`);

  const handleSubmit = (event) => {
    event.preventDefault();
    handleInput({ target: event.target.q });
  };

  const handleInput = ({ target }) => {
    setQuery(target.value);
  };

  return (
    <Layout>
      <div className="mx-auto w-full max-w-screen-xl p-4">
        <form className="mb-2" onSubmit={handleSubmit}>
          <Search name="q" onInput={handleInput} />
        </form>

        <div className="grid gap-2">{!error && <GameList {...data} />}</div>
      </div>
    </Layout>
  );
};

export default Home;
