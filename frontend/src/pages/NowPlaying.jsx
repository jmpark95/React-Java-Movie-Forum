import { MovieAPI } from "../api/movieapi";
import MainContent from "../components/MainContent";

function NowPlayingMovies() {
   return <MainContent fetchFunction={MovieAPI.getNowPlaying} categoryName="nowPlayingMovies" />;
}

export default NowPlayingMovies;
