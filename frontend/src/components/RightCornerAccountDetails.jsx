import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { Link } from "react-router";
import { logout } from "../api/public/authapi";

function RightCornerAccountDetails({ user, setUser }) {
   async function handleLogout() {
      try {
         await logout();
         setUser(null);
      } catch (error) {
         setUser(null);
         console.error("Something went wrong:" + error);
      }
   }

   return (
      <Popover className="relative">
         <PopoverButton className="cursor-pointer">
            {user ? <div>Hi {user}</div> : <Link to="/login">Login</Link>}
         </PopoverButton>
         <PopoverPanel anchor="bottom" className="flex flex-col">
            <button href="/profile">Your Profile</button>
            <button onClick={handleLogout}>Logout</button>
         </PopoverPanel>
      </Popover>
   );
}

export default RightCornerAccountDetails;
