import { useState, useEffect } from "react";
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiEdit,
  FiX,
} from "react-icons/fi";

import {
  getProfile,
  updateProfile,
} from "../../services/profile.service";

export default function Profile() {
  const [showModal, setShowModal] = useState(false);

  const [user, setUser] = useState({
    name: "Vinay Duggar",
    email: "vinayduggar27@gmail.com",
    university: "BML Munjal University",
    course: "B.Tech Computer Science Engineering",
    github: "https://github.com/Vinayduggar27",
    linkedin: "https://linkedin.com/in/vinay-duggar",
    interviews: 14,
    averageScore: 0,
    atsScore: 82,
  });

  useEffect(() => {
  loadProfile();
}, []);

const loadProfile = async () => {
  try {
    const { data } = await getProfile();
    setUser((prev) => ({
      ...prev,
      ...data,
    }));
  } catch (err) {
    console.error(err);
  }
};

  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">
      <h1 className="text-4xl font-bold mb-8">👤 My Profile</h1>

      <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800 shadow-xl">

        <div className="flex items-center gap-6">

          <div className="w-28 h-28 rounded-full bg-cyan-500 flex items-center justify-center text-4xl font-bold">
            {user.name.charAt(0)}
          </div>

          <div>
            <h2 className="text-3xl font-bold">{user.name}</h2>
            <p className="text-slate-400">{user.course}</p>
            <p className="text-slate-400">{user.university}</p>
          </div>

          <button
            onClick={() => setShowModal(true)}
            className="ml-auto bg-cyan-500 hover:bg-cyan-600 px-5 py-2 rounded-xl flex items-center gap-2"
          >
            <FiEdit size={18} />
            Edit Profile
          </button>

        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-10">

          <div className="bg-slate-800 rounded-2xl p-5">
            <FiMail className="mb-2 text-cyan-400" size={22} />
            <p className="text-slate-400">Email</p>
            <p>{user.email}</p>
          </div>

          <div className="bg-slate-800 rounded-2xl p-5">
            <FiGithub className="mb-2 text-cyan-400" size={22} />
            <a
              href={user.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400"
            >
              GitHub Profile
            </a>
          </div>

          <div className="bg-slate-800 rounded-2xl p-5">
            <FiLinkedin className="mb-2 text-cyan-400" size={22} />
            <a
              href={user.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400"
            >
              LinkedIn Profile
            </a>
          </div>

          <div className="bg-slate-800 rounded-2xl p-5">
            <p>Total Interviews</p>
            <h2 className="text-3xl font-bold">{user.interviews}</h2>
          </div>

          <div className="bg-slate-800 rounded-2xl p-5">
            <p>Average Score</p>
            <h2 className="text-3xl font-bold">{user.averageScore}%</h2>
          </div>

          <div className="bg-slate-800 rounded-2xl p-5">
            <p>ATS Score</p>
            <h2 className="text-3xl font-bold">{user.atsScore}</h2>
          </div>

        </div>

      </div>

      {/* ===================== EDIT PROFILE MODAL ===================== */}

      {showModal && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">

          <div className="bg-slate-900 w-full max-w-xl rounded-3xl p-8 border border-slate-700">

            <div className="flex justify-between items-center mb-6">

              <h2 className="text-2xl font-bold">
                Edit Profile
              </h2>

              <button onClick={() => setShowModal(false)}>
                <FiX size={24} />
              </button>

            </div>

            <div className="space-y-5">

              <input
                className="w-full bg-slate-800 p-3 rounded-xl outline-none focus:ring-2 focus:ring-cyan-500"
                value={user.name}
                onChange={(e) =>
                  setUser({
                    ...user,
                    name: e.target.value,
                  })
                }
                placeholder="Name"
              />

              <input
                className="w-full bg-slate-800 p-3 rounded-xl outline-none focus:ring-2 focus:ring-cyan-500"
                value={user.email}
                onChange={(e) =>
                  setUser({
                    ...user,
                    email: e.target.value,
                  })
                }
                placeholder="Email"
              />

              <input
                className="w-full bg-slate-800 p-3 rounded-xl outline-none focus:ring-2 focus:ring-cyan-500"
                value={user.university}
                onChange={(e) =>
                  setUser({
                    ...user,
                    university: e.target.value,
                  })
                }
                placeholder="University"
              />

              <input
                className="w-full bg-slate-800 p-3 rounded-xl outline-none focus:ring-2 focus:ring-cyan-500"
                value={user.course}
                onChange={(e) =>
                  setUser({
                    ...user,
                    course: e.target.value,
                  })
                }
                placeholder="Course"
              />

            </div>

            <div className="flex justify-end gap-4 mt-8">

              <button
                onClick={() => setShowModal(false)}
                className="px-5 py-2 rounded-xl bg-slate-700 hover:bg-slate-600"
              >
                Cancel
              </button>

              <button
                onClick={async () => {
  try {
    await updateProfile(user);
    setShowModal(false);
  } catch (err) {
    console.error(err);
  }
}}
                className="px-5 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-600"
              >
                Save Changes
              </button>

            </div>

          </div>

        </div>
      )}

    </div>
  );
}