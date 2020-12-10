import React, { useEffect, useState } from "react";
import Joke from "./Joke";

const App = () => {
  const [joke, setJoke] = useState({});
  const [loading, setLoading] = useState(false);

  const getNewJoke = () => {
    setLoading(true);
    setTimeout(() => {
      fetch("https://api.chucknorris.io/jokes/random")
        .then((r) => r.json())
        .then((data) => {
          const { icon_url, id, value } = data;
          setJoke({ icon_url, id, value });
          setLoading(false);
        });
    }, 3000);
  };

  useEffect(() => {
    getNewJoke();
  }, []);

  return (
    <div>
      <Joke joke={joke} loading={loading} getNewJoke={getNewJoke} />
    </div>
  );
};
export default App;
