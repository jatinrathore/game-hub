import { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
}

interface FetchGamesResponse {
  count: number;
  results: Game[];
}

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, serError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    apiClient
      .get<FetchGamesResponse>("games", { signal: controller.signal })
      .then((res) => {
        console.log(res.data.results);
        setGames(res.data.results);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        serError(err.message);
      });

    return () => controller.abort();
  }, []);

  return { games, error };
};

export default useGames;
