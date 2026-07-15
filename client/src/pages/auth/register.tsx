import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { registerUser } from "../../services/authservice";

export default function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setLoading(true);

      await registerUser(
  name,
  email,
  password
);

      alert("Registration Successful!");

      navigate("/login");
    } catch (err: any) {
      alert(err.response?.data?.message || "Registration Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 flex justify-center items-center">
      <form
        onSubmit={handleRegister}
        className="bg-slate-900 p-8 rounded-xl w-[400px] space-y-5"
      >
        <h1 className="text-3xl text-white font-bold text-center">
          Create Account
        </h1>

        <input
          className="w-full p-3 rounded bg-slate-800 text-white"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          className="w-full p-3 rounded bg-slate-800 text-white"
          placeholder="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="w-full p-3 rounded bg-slate-800 text-white"
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          disabled={loading}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded"
        >
          {loading ? "Creating..." : "Register"}
        </button>

        <p className="text-gray-400 text-center">
          Already have an account?{" "}
          <Link className="text-blue-500" to="/login">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}