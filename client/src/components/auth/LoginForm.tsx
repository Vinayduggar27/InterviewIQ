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

  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const data = await loginUser(email, password);

      localStorage.setItem("token", data.token);
      localStorage.setItem("userName", data.user.name);

      // Show success popup
      setShowSuccess(true);

      // Go to dashboard after popup appears
      setTimeout(() => {
        navigate("/dashboard");
      }, 1200);

    } catch (err) {
      console.error(err);

      // Show error popup
      setShowError(true);

      setTimeout(() => {
        setShowError(false);
      }, 2500);
    }
  };

  return (
    <>
      {/* SUCCESS POPUP */}
      {showSuccess && (
        <div className="fixed top-6 right-6 z-[9999] animate-[slideIn_0.3s_ease-out]">
          <div className="flex items-center gap-4 rounded-2xl border border-green-500/20 bg-[#151B22] px-5 py-4 shadow-2xl shadow-black/40">

            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-500/15">
              <span className="text-xl text-green-400">
                ✓
              </span>
            </div>

            <div>
              <p className="font-semibold text-white">
                Login Successful
              </p>

              <p className="mt-1 text-sm text-[#9AA3AD]">
                Welcome back to InterviewIQ!
              </p>
            </div>
          </div>
        </div>
      )}

      {/* ERROR POPUP */}
      {showError && (
        <div className="fixed top-6 right-6 z-[9999]">
          <div className="flex items-center gap-4 rounded-2xl border border-red-500/20 bg-[#151B22] px-5 py-4 shadow-2xl shadow-black/40">

            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-red-500/15">
              <span className="text-xl text-red-400">
                !
              </span>
            </div>

            <div>
              <p className="font-semibold text-white">
                Login Failed
              </p>

              <p className="mt-1 text-sm text-[#9AA3AD]">
                Please check your email and password.
              </p>
            </div>
          </div>
        </div>
      )}

      <form className="space-y-5" onSubmit={handleLogin}>
        <div>
          <label className="mb-2 block text-sm text-[#C7CDD4]">
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
          <label className="mb-2 block text-sm text-[#C7CDD4]">
            Password
          </label>

          <PasswordInput
            value={password}
            onChange={(e: any) => setPassword(e.target.value)}
          />
        </div>

        <div className="flex items-center justify-between text-sm">
          <label className="flex items-center gap-2 text-[#9AA3AD]">
            <input
              type="checkbox"
              className="accent-cyan-500"
            />
            Remember me
          </label>

          <Link
            to="/forgot-password"
            className="text-[#6B8FB8] hover:underline"
          >
            Forgot password?
          </Link>
        </div>

        <Button className="w-full" type="submit">
          Sign In
        </Button>

        <div className="relative py-2">
          <div className="border-t border-[#2F3D4B]"></div>

          <span className="absolute left-1/2 -top-1 -translate-x-1/2 bg-[#151B22] px-4 text-sm text-slate-500">
            OR
          </span>
        </div>

        <SocialLogin />

        <p className="text-center text-[#9AA3AD]">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="text-[#6B8FB8] hover:underline"
          >
            Create one
          </Link>
        </p>
      </form>
    </>
  );
}