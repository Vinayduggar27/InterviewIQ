import { useNavigate } from "react-router-dom";

export default function QuickActions() {
  const navigate = useNavigate();

  return (
    <div className="bg-[#151B22] border border-[#2F3D4B] rounded-xl p-6 h-[380px]">

      <h2 className="text-xl font-semibold text-white mb-6">
        Quick Actions
      </h2>

      <div className="flex flex-col gap-4">

        <button
          onClick={() => navigate("/create-interview")}
          className="
            w-full
            bg-[#4F7CAC]
            hover:bg-[#3F6790]
            text-white
            font-semibold
            py-4
            rounded-xl
            transition
          "
        >
          Start AI Interview
        </button>

        <button
          onClick={() => navigate("/resume")}
          className="
            w-full
            bg-transparent
            border border-[#2F3D4B]
            hover:bg-[#181E25]
            text-white
            font-medium
            py-4
            rounded-xl
            transition
          "
        >
          Analyze Resume
        </button>

        <button
          onClick={() => navigate("/dashboard")}
          className="
            w-full
            bg-transparent
            border border-[#2F3D4B]
            hover:bg-[#181E25]
            text-white
            font-medium
            py-4
            rounded-xl
            transition
          "
        >
          View Reports
        </button>

      </div>
    </div>
  );
}