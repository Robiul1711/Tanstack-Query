import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";

export default function LoginForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { login } = useAuth();

  const onSubmit = (data) => {
    login(data); // Simulate user login
    console.log("User logged in:", data);
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Username:</label>
          <input {...register("username", { required: "Username is required" })} />
          {errors.username && <p>{errors.username.message}</p>}
        </div>

        <div>
          <label>Password:</label>
          <input
            type="password"
            {...register("password", { required: "Password is required", minLength: { value: 6, message: "Minimum length is 6" } })}
          />
          {errors.password && <p>{errors.password.message}</p>}
        </div>

        <button type="submit">Login</button>
      </form>
    </div>
  );
}
