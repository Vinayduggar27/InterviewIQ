import AuthLayout from "../../components/auth/AuthLayout";
import LoginForm from "../../components/auth/LoginForm";

export default function Login() {
  return (
    <AuthLayout
      title="Welcome Back 👋"
      subtitle="Sign in to continue your AI interview journey."
    >
      <LoginForm />
    </AuthLayout>
  );
}