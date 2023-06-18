import useTrailers from "../hooks/useTrailers";

interface Props {
  gameId: number;
}

const GameTrailer = ({ gameId }: Props) => {
  const { data, isLoading, error } = useTrailers(gameId);

  if (isLoading) return null;

  if (error) return error;

  const first = data?.results[0];
  if (!first) return null;

  return first ? (
    <video src={first.data.max} poster={first.preview} controls />
  ) : null;
};

export default GameTrailer;
