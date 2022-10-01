import { useState } from "react";
import { Spinner } from "../UI/Spinner";

export const List = ({ data: games }) => {
  if (!games) return <Spinner />;

  if (games.length <= 0) return <div>Princess must go by another name :(</div>;

  return games.map((item) => <Game key={item.name} {...item} />);
};

const Card = ({ children, onClick }) => (
  <a
    href="#"
    onClick={onClick}
    className="rounded-lg border border-gray-200 bg-white p-4 shadow-md hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
  >
    {children}
  </a>
);

const Title = ({ children }) => (
  <h5 className="font-bold tracking-tight text-gray-900 dark:text-white">
    {children}
  </h5>
);

export const Game = (prop) => {
  const [expand, setExpand] = useState(false);

  return (
    <Card onClick={() => setExpand(!expand)}>
      <Title>{prop.description}</Title>
      <small>{prop.name}</small>
      {expand && (
        <p className="font-normal text-gray-700 dark:text-gray-400">...</p>
      )}
    </Card>
  );
};
