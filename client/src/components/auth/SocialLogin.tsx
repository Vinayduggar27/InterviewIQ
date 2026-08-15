import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

export default function SocialLogin() {

  return (

    <div className="space-y-3">

      <button className="w-full flex items-center justify-center gap-3 border border-[#2F3D4B] rounded-xl py-3 hover:border-cyan-400 transition">

        <FcGoogle size={22} />

        Continue with Google

      </button>

      <button className="w-full flex items-center justify-center gap-3 border border-[#2F3D4B] rounded-xl py-3 hover:border-cyan-400 transition">

        <FaGithub />

        Continue with GitHub

      </button>

    </div>

  );

}