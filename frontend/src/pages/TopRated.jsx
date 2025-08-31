import { MovieAPI } from "../api/movieapi";
import MainContent from "../components/MainContent";

function TopRated() {
   return <MainContent fetchFunction={MovieAPI.getTopRated} categoryName="topRatedMovies" />;
}

export default TopRated;
