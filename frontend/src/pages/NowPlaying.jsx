import { MovieAPI } from "../api/public/movieapi";
import MainContent from "../components/MainContent";

function NowPlayingMovies({ user }) {
   return <MainContent fetchFunction={MovieAPI.getNowPlaying} categoryName="nowPlayingMovies" user={user} />;
}

export default NowPlayingMovies;
