import { FiMoon, FiLock, FiLogOut, FiUser } from "react-icons/fi";

export default function Settings() {
  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">

      <h1 className="text-4xl font-bold mb-8">
        ⚙️ Settings
      </h1>

      <div className="space-y-6">

        <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800">
          <div className="flex items-center gap-4">
            <FiUser size={24} className="text-cyan-400" />
            <div>
              <h2 className="text-xl font-semibold">
                Edit Profile
              </h2>
              <p className="text-slate-400">
                Update your personal information.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800">
          <div className="flex items-center gap-4">
            <FiLock size={24} className="text-cyan-400" />
            <div>
              <h2 className="text-xl font-semibold">
                Change Password
              </h2>
              <p className="text-slate-400">
                Secure your account.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800">
          <div className="flex items-center gap-4">
            <FiMoon size={24} className="text-cyan-400" />
            <div>
              <h2 className="text-xl font-semibold">
                Appearance
              </h2>
              <p className="text-slate-400">
                Dark mode support coming soon.
              </p>
            </div>
          </div>
        </div>

        <button className="flex items-center gap-3 bg-red-600 hover:bg-red-700 transition px-6 py-3 rounded-xl">
          <FiLogOut />
          Logout
        </button>

      </div>

    </div>
  );
}