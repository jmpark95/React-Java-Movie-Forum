import "./App.css";
import { Route, Routes } from "react-router";
import NowPlaying from "./pages/NowPlaying";
import Upcoming from "./pages/Upcoming";
import Popular from "./pages/Popular";
import TopRated from "./pages/TopRated";

function App() {
   return (
      <Routes>
         <Route path="/" element={<NowPlaying />} />
         <Route path="/popular" element={<Popular />} />
         <Route path="/top-rated" element={<TopRated />} />
         <Route path="/upcoming" element={<Upcoming />} />
      </Routes>
   );
}

export default App;
