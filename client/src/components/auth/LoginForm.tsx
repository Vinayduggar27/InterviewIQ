import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Input from "../ui/Input";
import Button from "../ui/Button";
import PasswordInput from "./PasswordInput";
import SocialLogin from "./SocialLogin";
import { loginUser } from "../../services/authservice";

export default function LoginForm() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const data = await loginUser(email, password);

      localStorage.setItem("token", data.token);
localStorage.setItem("userName", data.user.name);

alert("Login Successful");

navigate("/dashboard");
    } catch (err) {
      console.error(err);
      alert("Login Failed");
    }
  };

  return (
    <form className="space-y-5" onSubmit={handleLogin}>
      <div>
        <label className="block text-sm text-slate-300 mb-2">
          Email
        </label>

        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e: any) => setEmail(e.target.value)}
        />
      </div>

      <div>
        <label className="block text-sm text-slate-300 mb-2">
          Password
        </label>

        <PasswordInput
          value={password}
          onChange={(e: any) => setPassword(e.target.value)}
        />
      </div>

      <div className="flex justify-between items-center text-sm">
        <label className="flex items-center gap-2 text-slate-400">
          <input
            type="checkbox"
            className="accent-cyan-500"
          />
          Remember me
        </label>

        <Link
          to="/forgot-password"
          className="text-cyan-400 hover:underline"
        >
          Forgot password?
        </Link>
      </div>

      <Button className="w-full" type="submit">
        Sign In
      </Button>

      <div className="relative py-2">
        <div className="border-t border-slate-700"></div>

        <span className="absolute left-1/2 -translate-x-1/2 -top-1 bg-slate-900 px-4 text-sm text-slate-500">
          OR
        </span>
      </div>

      <SocialLogin />

      <p className="text-center text-slate-400">
        Don't have an account?{" "}
        <Link
          to="/register"
          className="text-cyan-400 hover:underline"
        >
          Create one
        </Link>
      </p>
    </form>
  );
}