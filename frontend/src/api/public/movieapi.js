const MOVIE_BASE_URL = `${import.meta.env.VITE_BACKEND}/api/movies`;

async function request(endpoint) {
   try {
      const response = await fetch(`${MOVIE_BASE_URL}${endpoint}`);

      if (!response.ok) {
         throw new Error("Error");
      }

      return await response.json();
   } catch (error) {
      console.error("API request failed:", error);
      throw error;
   }
}

export const MovieAPI = {
   getNowPlaying: () => request("/nowplaying"),
   getPopular: () => request("/popular"),
   getTopRated: () => request("/toprated"),
   getUpcoming: () => request("/upcoming"),
};
