import { NavLink } from "react-router";

function Navbar() {
   const linkClass = ({ isActive }) =>
      `items-center justify-center px-7 py-4 rounded ${isActive ? "bg-gray-300" : "bg-gray-400"}`;

   return (
      <div className="flex mb-6">
         <NavLink to="/" className={linkClass}>
            Now Playing
         </NavLink>
         <NavLink to="/popular" className={linkClass}>
            Popular
         </NavLink>
         <NavLink to="/top-rated" className={linkClass}>
            Top Rated
         </NavLink>
         <NavLink to="/upcoming" className={linkClass}>
            Upcoming
         </NavLink>
      </div>
   );
}

export default Navbar;
