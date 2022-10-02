import { SWRConfig } from "swr";

import "../styles/globals.css";

const App = ({ Component, pageProps, err }) => {
  return (
    <SWRConfig
      value={{
        fetcher: (resource, init) =>
          fetch(resource, init).then((res) => res.json()),
      }}
    >
      <Component {...{ ...pageProps, err }} />
    </SWRConfig>
  );
};

export default App;
