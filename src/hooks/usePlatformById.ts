import usePlatform from "./usePlatform";

const usePlatformById = (id?: number) => {
  const { data } = usePlatform();

  return data.results.find((p) => p.id === id);
};

export default usePlatformById;
