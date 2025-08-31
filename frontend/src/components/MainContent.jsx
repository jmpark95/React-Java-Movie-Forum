import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import MovieCard from "./MovieCard";

function MainContent({ fetchFunction, categoryName }) {
   const [selectedMovie, setSelectedMovie] = useState(null);

   const { data, isPending, isError } = useQuery({
      queryKey: [categoryName],
      queryFn: fetchFunction,
      staleTime: 1 * 60 * 60 * 1000, // 1 hour
      gcTime: 1 * 60 * 60 * 1000,
   });

   function handleSelectedMovie(movie) {
      setSelectedMovie(movie);
   }

   if (isPending) return <p>Loading...</p>;
   if (isError) return <p>Error</p>;

   return (
      <div className="p-4">
         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {data.map((movie) => (
               <MovieCard key={movie.id} movie={movie} handleSelectedMovie={handleSelectedMovie} />
            ))}
         </div>

         <Dialog open={!!selectedMovie} onClose={() => setSelectedMovie(null)} className="relative z-50">
            <DialogBackdrop className="fixed inset-0 bg-stone-800/70" />
            {selectedMovie && (
               <div className="fixed inset-0 flex items-center justify-center p-4">
                  <DialogPanel className="max-w-lg space-y-4 bg-gray-800 rounded shadow-lg p-4">
                     <img
                        src={`https://image.tmdb.org/t/p/w500${selectedMovie.backdrop_path}`}
                        alt={selectedMovie.title}
                        className="w-full h-64 object-cover rounded"
                     />
                     <p>{selectedMovie.title}</p>
                     <p>Synopsis: {selectedMovie.overview}</p>
                     <p>Release date: {selectedMovie.release_date}</p>
                     <p>Rating: {selectedMovie.vote_average}</p>
                     <div className="flex gap-4 justify-end">
                        <button
                           onClick={() => setSelectedMovie(null)}
                           className="px-3 py-1 bg-gray-600 rounded cursor-pointer"
                        >
                           Login or Signup to add to your watchlist or favourites
                        </button>
                     </div>
                  </DialogPanel>
               </div>
            )}
         </Dialog>
      </div>
   );
}

export default MainContent;
