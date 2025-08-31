import { Link } from "react-router";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";

function Navbar() {
   return (
      <TabGroup className="flex">
         <TabList className="flex">
            <Tab
               as={Link}
               to="/"
               className="items-center justify-center px-7 py-4 rounded data-hover:bg-gray-300 data-selected:bg-gray-300 bg-gray-400 focus:outline-none "
            >
               Now Playing
            </Tab>
            <Tab
               as={Link}
               to="/popular"
               className="items-center justify-center px-7 py-4 rounded data-hover:bg-gray-300 data-selected:bg-gray-300 bg-gray-400 focus:outline-none "
            >
               Popular
            </Tab>
            <Tab
               as={Link}
               to="/top-rated"
               className="items-center justify-center px-7 py-4 rounded data-hover:bg-gray-300 data-selected:bg-gray-300 bg-gray-400 focus:outline-none "
            >
               Top Rated
            </Tab>
            <Tab
               as={Link}
               to="/upcoming"
               className="items-center justify-center px-7 py-4 rounded data-hover:bg-gray-300 data-selected:bg-gray-300 bg-gray-400 focus:outline-none "
            >
               Upcoming
            </Tab>
         </TabList>
      </TabGroup>
   );
}

export default Navbar;
