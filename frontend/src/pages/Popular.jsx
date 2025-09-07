import { MovieAPI } from "../api/public/movieapi";
import MainContent from "../components/MainContent";

function Popular({ user }) {
   return <MainContent fetchFunction={MovieAPI.getPopular} categoryName="popularMovies" user={user} />;
}

export default Popular;
