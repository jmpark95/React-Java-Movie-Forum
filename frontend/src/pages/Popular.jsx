import { useQuery } from "@tanstack/react-query";
import { MovieAPI } from "../api/movieapi";

function Popular() {
   const { data, isPending, isError } = useQuery({
      queryKey: ["popularMovies"],
      queryFn: MovieAPI.getPopular,
      staleTime: 1 * 60 * 60 * 1000, //1 hour
      gcTime: 1 * 60 * 60 * 1000,
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

export default Popular;
