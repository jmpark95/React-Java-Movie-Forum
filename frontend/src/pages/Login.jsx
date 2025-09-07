import { useForm } from "react-hook-form";
import { login } from "../api/public/authapi";

function Login({ setUser }) {
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm();

   async function onSubmit(data) {
      const response = await login(data);
      setUser(response.username);
   }

   return (
      <form onSubmit={handleSubmit(onSubmit)}>
         <label htmlFor="username">Username:</label>
         <input id="username" {...register("username", { required: true })} />

         <label htmlFor="password">Password:</label>
         <input type="password" id="password" {...register("password", { required: true })} />

         {errors.username && <span>Username is required</span>}
         {errors.password && <span>Password is required</span>}

         <input type="submit" />
      </form>
   );
}

export default Login;
