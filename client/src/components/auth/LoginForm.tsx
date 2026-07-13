import { Link } from "react-router-dom";
import Input from "../ui/Input";
import Button from "../ui/Button";
import PasswordInput from "./PasswordInput";
import SocialLogin from "./SocialLogin";

export default function LoginForm() {
  return (
    <form className="space-y-5">

      <div>
        <label className="block text-sm text-slate-300 mb-2">
          Email
        </label>

        <Input
          type="email"
          placeholder="Enter your email"
        />
      </div>

      <div>
        <label className="block text-sm text-slate-300 mb-2">
          Password
        </label>

        <PasswordInput />
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

      <Button className="w-full">
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