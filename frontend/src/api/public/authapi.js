const AUTH_BASE_URL = `${import.meta.env.VITE_BACKEND}/api/auth`;

export async function login(data) {
   try {
      const response = await fetch(`${AUTH_BASE_URL}/login`, {
         method: "POST",
         headers: { "Content-Type": "application/json" },
         credentials: "include",
         body: JSON.stringify(data),
      });

      return await response.json();
   } catch (error) {
      console.error("API request failed:", error);
      throw error;
   }
}

export async function logout() {
   try {
      const response = await fetch(`${AUTH_BASE_URL}/logout`, {
         method: "POST",
         headers: { "Content-Type": "application/json" },
         credentials: "include",
      });

      return await response.json();
   } catch (error) {
      console.error("API request failed:", error);
      throw error;
   }
}
