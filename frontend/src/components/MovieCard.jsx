function MovieCard({ movie, handleSelectedMovie }) {
   return (
      <div className="cursor-pointer" onClick={() => handleSelectedMovie(movie)}>
         <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className="w-full h-64 object-cover rounded"
         />
         <div className="p-2 text-center font-large">{movie.title}</div>
      </div>
   );
}

export default MovieCard;
