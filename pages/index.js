import { useState, useEffect } from "react";

import { Layout } from "../components/UI/Layout";
import { Search } from "../components/Form/Search";

const Home = () => {
  const handler = (event) => {
    event.preventDefault();
    console.log(event.target.q.value);
  };

  return (
    <Layout>
      <div className="p-4">
        <Search onChange={handler} onSubmit={handler} />
      </div>
    </Layout>
  );
};

export default Home;
