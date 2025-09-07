import { NavLink } from "react-router";
import { Tab, TabGroup, TabList } from "@headlessui/react";

// function Navbar() {
//    const linkClass = ({ isActive }) =>
//     `items-center justify-center px-7 py-4 rounded ${isActive ? "bg-gray-300" : "bg-gray-400"}`;

//    return (
//       <TabGroup className="flex mb-6">
//          <TabList className="flex">
//             <Tab
//                as={NavLink}
//                to="/"
//                className="items-center justify-center px-7 py-4 rounded data-hover:bg-gray-300 data-selected:bg-gray-300 bg-gray-400 focus:outline-none "
//             >
//                Now Playing
//             </Tab>
//             <Tab
//                as={NavLink}
//                to="/popular"
//                className="items-center justify-center px-7 py-4 rounded data-hover:bg-gray-300 data-selected:bg-gray-300 bg-gray-400 focus:outline-none "
//             >
//                Popular
//             </Tab>
//             <Tab
//                as={NavLink}
//                to="/top-rated"
//                className="items-center justify-center px-7 py-4 rounded data-hover:bg-gray-300 data-selected:bg-gray-300 bg-gray-400 focus:outline-none "
//             >
//                Top Rated
//             </Tab>
//             <Tab
//                as={NavLink}
//                to="/upcoming"
//                className="items-center justify-center px-7 py-4 rounded data-hover:bg-gray-300 data-selected:bg-gray-300 bg-gray-400 focus:outline-none "
//             >
//                Upcoming
//             </Tab>
//          </TabList>
//       </TabGroup>
//    );
// }

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
