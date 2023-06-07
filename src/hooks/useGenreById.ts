import React from "react";
import useGenre from "./useGenre";

const useGenreById = (id?: number) => {
  const { data: genres } = useGenre();

  return genres.results.find((g) => g.id === id);
};

export default useGenreById;
