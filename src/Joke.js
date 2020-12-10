import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const Joke = ({ joke, loading, getNewJoke }) => {
  return (
    <SkeletonTheme color="#e2f3f5" highlightColor="#3d5af1">
      <div>
        <h1>{loading ? <Skeleton /> : joke.id}</h1>
        {loading ? (
          <Skeleton height={"60px"} duration={0.5} width={"60px"} />
        ) : (
          <img src={joke.icon_url} height="60px" width="60px" alt="icon" />
        )}
        <p style={{ width: "25%" }}>
          {loading ? <Skeleton count={3} /> : joke.value}
        </p>
        <button onClick={getNewJoke}>Get joke</button>
      </div>
    </SkeletonTheme>
  );
};
export default Joke;
