import { MovieAPI } from "../api/movieapi";
import MainContent from "../components/MainContent";

function Popular() {
   return <MainContent fetchFunction={MovieAPI.getPopular} categoryName="popularMovies" />;
}

export default Popular;
