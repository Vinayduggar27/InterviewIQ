import { Link } from "react-router-dom";
import AuthLayout from "../../components/auth/AuthLayout";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";

export default function ForgotPassword() {
  return (
    <AuthLayout
      title="Forgot your password?"
      subtitle="Enter your email and we'll send you a password reset link."
    >
      <div className="space-y-5">

        <Input
          type="email"
          placeholder="Enter your email"
        />

        <Button className="w-full">
          Send Reset Link
        </Button>

        <p className="text-center text-[#9AA3AD]">

          Remember your password?{" "}

          <Link
            to="/login"
            className="text-[#6B8FB8] hover:underline"
          >
            Login
          </Link>

        </p>

      </div>
    </AuthLayout>
  );
}