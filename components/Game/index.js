import { useState } from "react";
import { Spinner } from "../UI/Spinner";

export const List = ({ data: games }) => {
  if (!games) return <Spinner />;

  if (games.length <= 0) return <div>Princess must go by another name :(</div>;

  return games.map((item) => item.name && <Game key={item.name} {...item} />);
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
  <h4 className="font-bold tracking-tight text-gray-900 dark:text-white">
    {children}
  </h4>
);

const SubTitle = ({ name, cloneOf }) => {
  return (
    <h5 className="font-bold tracking-tight text-gray-900 dark:text-gray-400">
      {name} {cloneOf && `(Clone of: ${cloneOf})`}
    </h5>
  );
};

const Publisher = ({ children }) => (
  <small className="font-bold tracking-tight text-rose-500 dark:text-rose-500">
    {children}
  </small>
);

export const Game = (prop) => {
  const [expand, setExpand] = useState(false);

  console.log(prop);

  return (
    <Card onClick={() => setExpand(!expand)}>
      <Title>{prop.description}</Title>
      <SubTitle name={prop.name} cloneOf={prop.cloneof} />
      <Publisher>
        {prop.publisher} ({prop.year})
      </Publisher>
      {expand && (
        <p className="font-normal text-gray-700 dark:text-gray-400">...</p>
      )}
    </Card>
  );
};
