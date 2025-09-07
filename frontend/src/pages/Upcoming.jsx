import { MovieAPI } from "../api/public/movieapi";
import MainContent from "../components/MainContent";

function Upcoming({ user }) {
   return <MainContent fetchFunction={MovieAPI.getUpcoming} categoryName="upcomingMovies" user={user} />;
}

export default Upcoming;
