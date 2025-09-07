import { MovieAPI } from "../api/public/movieapi";
import MainContent from "../components/MainContent";

function TopRated({ user }) {
   return <MainContent fetchFunction={MovieAPI.getTopRated} categoryName="topRatedMovies" user={user} />;
}

export default TopRated;
