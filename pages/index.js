const Home = () => {};

export async function getStaticProps(context) {
  return {
    redirect: {
      destination: "/gb",
      permanent: false,
      // statusCode: 301
    },
  };
}

export default Home;
