import platforms from "../data/platforms";
import useData from "./useData";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatform = () => ({ data: platforms, error: false });

export default usePlatform;

// useData<Platform>("/platforms/lists/parents")
