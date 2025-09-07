const USER_BASE_URL = `${import.meta.env.VITE_BACKEND}/api/user`;

async function request(endpoint) {
   try {
      const response = await fetch(`${USER_BASE_URL}${endpoint}`, {
         method: "GET",
         credentials: "include",
      });

      if (!response.ok) throw new Error("Unauthorized or error");

      return await response.json();
   } catch (error) {
      console.error(error);
      alert("Request failed");
      throw error;
   }
}

export const UserAPI = {
   getWatchList: () => request("/watchlist"),
   getFavourites: () => request("/favourites"),
};
