import { MovieAPI } from "../api/movieapi";
import MainContent from "../components/MainContent";

function Upcoming() {
   return <MainContent fetchFunction={MovieAPI.getUpcoming} categoryName="upcomingMovies" />;
}

export default Upcoming;
