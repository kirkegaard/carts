import { useState } from "react";
import { useRouter } from "next/router";
import { Spinner } from "../UI/Spinner";

export const List = ({ data: games }) => {
  if (!games) return <Spinner />;

  if (games.length <= 0) return <div>Princess must go by another name :(</div>;

  return games.map((item) => item.name && <Game key={item.name} {...item} />);
};

const Card = ({ children, onClick }) => (
  <div
    onClick={onClick}
    className="cursor-pointer rounded-lg border border-gray-200 bg-white p-4 shadow-md hover:bg-gray-100 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-rose-500 dark:hover:bg-zinc-800"
  >
    {children}
  </div>
);

const Title = ({ children }) => (
  <h4 className="font-bold tracking-tight text-gray-900 dark:text-white">
    {children}
  </h4>
);

const SubTitle = ({ name, cloneOf, onClick }) => {
  return (
    <h5 className="font-bold tracking-tight text-gray-900 dark:text-gray-400">
      {name}{" "}
      {cloneOf && (
        <>
          (clone of:{" "}
          <a href="#" onClick={onClick}>
            {cloneOf}
          </a>
          )
        </>
      )}
    </h5>
  );
};

const Publisher = ({ children }) => (
  <small className="font-bold tracking-tight text-rose-500 dark:text-rose-500">
    {children}
  </small>
);

const Information = ({ data }) => {
  return (
    <div>
      <h5 className="text-xl font-bold text-rose-500">Information:</h5>
      <ul className="ml-2">
        {data.length ? (
          data.map((item, index) => (
            <li key={index}>
              <span className="font-bold capitalize text-gray-400">
                {item.name}:
              </span>{" "}
              {item.value}
            </li>
          ))
        ) : (
          <li>
            <span className="font-bold capitalize text-gray-400">
              {data.name}:
            </span>{" "}
            {data.value}
          </li>
        )}
      </ul>
    </div>
  );
};

const FeatureInformation = ({ data }) => {
  return (
    <div>
      <h5 className="text-xl font-bold text-rose-500">Feature:</h5>
      <ul className="ml-2">
        {data.map((item, index) => (
          <li key={index}>
            <span className="font-bold text-gray-400">{item.name}:</span>{" "}
            {item.value}
          </li>
        ))}
      </ul>
    </div>
  );
};

const RomInformation = ({ data }) => {
  return (
    <div>
      <h5 className="text-xl font-bold text-rose-500">Rom:</h5>
      <ul className="ml-2">
        <li>
          <span className="font-bold text-gray-400">Name:</span> {data.name}
        </li>
        <li>
          <span className="font-bold text-gray-400">CRC:</span> {data.crc}
        </li>
        <li>
          <span className="font-bold text-gray-400">SHA1:</span> {data.sha1}
        </li>
      </ul>
    </div>
  );
};

export const Game = (prop) => {
  const router = useRouter();
  const [expand, setExpand] = useState(false);

  const handleCloneOf = (value) => {
    router.push({ query: { q: value, page: 1 } });
  };

  return (
    <Card onClick={() => setExpand(!expand)}>
      <Title>{prop.description}</Title>
      <SubTitle
        onClick={(event) => {
          event.preventDefault();
          event.stopPropagation();
          handleCloneOf(prop.cloneof);
        }}
        name={prop.name}
        cloneOf={prop.cloneof}
      />
      <Publisher>
        {prop.publisher} ({prop.year})
      </Publisher>

      {expand && (
        <div className="mt-2 border-t-2 border-t-gray-600 pt-2">
          {prop.info && (
            <div className="my-2">
              <Information data={prop.info} />
            </div>
          )}

          {prop.part.dataarea.rom && (
            <div className="my-2">
              <RomInformation data={prop.part.dataarea.rom} />
            </div>
          )}

          {prop.part.feature?.length && (
            <div className="my-2">
              <FeatureInformation data={prop.part.feature} />
            </div>
          )}
        </div>
      )}
    </Card>
  );
};
