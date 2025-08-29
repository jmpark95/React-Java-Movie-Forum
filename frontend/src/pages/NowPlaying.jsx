import { useQuery } from "@tanstack/react-query";
import { MovieAPI } from "../api/movieapi";

function NowPlayingMovies() {
   const { data, isPending, isError } = useQuery({
      queryKey: ["nowPlayingMovies"],
      queryFn: MovieAPI.getNowPlaying,
      staleTime: 1 * 60 * 60 * 1000, //1 hour
   });

   if (isPending) return <p>Loading...</p>;

   if (isError) return <p>Error</p>;

   return (
      <ul>
         {data.map((movie) => (
            <li key={movie.id}>{movie.title}</li>
         ))}
      </ul>
   );
}

export default NowPlayingMovies;
