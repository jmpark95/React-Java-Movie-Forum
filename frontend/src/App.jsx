import { useState } from "react";
import { Route, Routes } from "react-router";

import NowPlaying from "./pages/NowPlaying";
import Upcoming from "./pages/Upcoming";
import Popular from "./pages/Popular";
import TopRated from "./pages/TopRated";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import RightCornerAccountDetails from "./components/RightCornerAccountDetails";

import { UserAPI } from "./api/private/userapi";

function App() {
   const [user, setUser] = useState(null);

   async function testProtected() {
      try {
         const response = await UserAPI.getWatchList();
         console.log(response);
      } catch {
         setUser(null);
      }
   }

   return (
      <>
         <div className="flex items-center justify-between mb-10">
            <div className="flex items-center space-x-18">
               <h1 className="text-5xl font-bold" style={{ color: "oklch(88.5% 0.062 18.334)" }}>
                  MovieBrowser
               </h1>

               <input type="text" placeholder="Search..." className="px-2 py-1 rounded border border-gray-400 w-120" />
            </div>

            <RightCornerAccountDetails user={user} setUser={setUser} />
         </div>

         <Navbar />

         <button onClick={testProtected} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
            Test Protected POST
         </button>

         <Routes>
            <Route path="/" element={<NowPlaying user={user} />} />
            <Route path="/popular" element={<Popular user={user} />} />
            <Route path="/top-rated" element={<TopRated user={user} />} />
            <Route path="/upcoming" element={<Upcoming user={user} />} />
            <Route path="/login" element={<Login setUser={setUser} />} />
         </Routes>
      </>
   );
}

export default App;
