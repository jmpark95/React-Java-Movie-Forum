import "./App.css";
import { Link, Route, Routes } from "react-router";
import NowPlaying from "./pages/NowPlaying";
import Upcoming from "./pages/Upcoming";
import Popular from "./pages/Popular";
import TopRated from "./pages/TopRated";

function App() {
   return (
      <>
         <Link to="/">
            <button>Go to main</button>
         </Link>
         <Link to="/popular">
            <button>Go to Popular</button>
         </Link>
         <Link to="/top-rated">
            <button>Go to toprated</button>
         </Link>
         <Link to="/upcoming">
            <button>Go to upcoming</button>
         </Link>

         <Routes>
            <Route path="/" element={<NowPlaying />} />
            <Route path="/popular" element={<Popular />} />
            <Route path="/top-rated" element={<TopRated />} />
            <Route path="/upcoming" element={<Upcoming />} />
         </Routes>
      </>
   );
}

export default App;
