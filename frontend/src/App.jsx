import { Route, Routes } from "react-router";
import NowPlaying from "./pages/NowPlaying";
import Upcoming from "./pages/Upcoming";
import Popular from "./pages/Popular";
import TopRated from "./pages/TopRated";
import Navbar from "./components/Navbar";
import { useState } from "react";

function App() {
   const [user, setUser] = useState({ name: "Min" });

   return (
      <>
         <div className="flex items-center justify-between mb-10">
            <div className="flex items-center space-x-18">
               <h1 className="text-5xl font-bold" style={{ color: "oklch(88.5% 0.062 18.334)" }}>
                  MovieBrowser
               </h1>

               <input type="text" placeholder="Search..." className="px-2 py-1 rounded border border-gray-400 w-120" />
            </div>

            <div>{user ? <div>Hi {user.name}</div> : <button>Login</button>}</div>
         </div>

         <Navbar />

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
