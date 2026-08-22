import { useEffect, useState } from "react";
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

interface UserProfile {
  name: string;
  email: string;
  university: string;
  course: string;
  github: string;
  linkedin: string;
  interviews: number;
  averageScore: number;
  atsScore: number;
}

const emptyProfile: UserProfile = {
  name: "",
  email: "",
  university: "",
  course: "",
  github: "",
  linkedin: "",
  interviews: 0,
  averageScore: 0,
  atsScore: 0,
};

export default function Profile() {
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  // Popup states
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  const [user, setUser] = useState<UserProfile>(emptyProfile);

  useEffect(() => {
    loadProfile();
  }, []);

  const loadProfile = async () => {
    try {
      setLoading(true);

      const { data } = await getProfile();

      setUser({
        name: data.name ?? "",
        email: data.email ?? "",
        university: data.university ?? "",
        course: data.course ?? "",
        github: data.github ?? "",
        linkedin: data.linkedin ?? "",
        interviews: data.interviews ?? 0,
        averageScore: data.averageScore ?? 0,
        atsScore: data.atsScore ?? 0,
      });
    } catch (err) {
      console.error("Failed to load profile:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    try {
      setSaving(true);

      // Hide old notifications
      setShowSuccess(false);
      setShowError(false);

      await updateProfile({
        name: user.name,
        email: user.email,
        university: user.university,
        course: user.course,
        github: user.github,
        linkedin: user.linkedin,
      });

      // Close modal
      setShowModal(false);

      // Show success popup
      setShowSuccess(true);

      // Reload latest profile data
      await loadProfile();

      // Hide popup after 2.5 seconds
      setTimeout(() => {
        setShowSuccess(false);
      }, 2500);

    } catch (err) {
      console.error("Failed to update profile:", err);

      // Show error popup
      setShowError(true);

      setTimeout(() => {
        setShowError(false);
      }, 3000);

    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#12181F] text-white">
        <div className="text-[#9AA3AD]">
          Loading profile...
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#12181F] px-6 py-8 text-white lg:px-10">

      {/* ================= SUCCESS POPUP ================= */}

      {showSuccess && (
        <div className="fixed right-6 top-6 z-[9999]">
          <div className="flex items-center gap-4 rounded-2xl border border-green-500/20 bg-[#151B22] px-5 py-4 shadow-2xl shadow-black/40">

            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-500/15">
              <span className="text-xl text-green-400">
                ✓
              </span>
            </div>

            <div>
              <p className="font-semibold text-white">
                Profile Updated
              </p>

              <p className="mt-1 text-sm text-[#9AA3AD]">
                Your profile has been updated successfully.
              </p>
            </div>

          </div>
        </div>
      )}

      {/* ================= ERROR POPUP ================= */}

      {showError && (
        <div className="fixed right-6 top-6 z-[9999]">
          <div className="flex items-center gap-4 rounded-2xl border border-red-500/20 bg-[#151B22] px-5 py-4 shadow-2xl shadow-black/40">

            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-red-500/15">
              <span className="text-xl text-red-400">
                !
              </span>
            </div>

            <div>
              <p className="font-semibold text-white">
                Update Failed
              </p>

              <p className="mt-1 text-sm text-[#9AA3AD]">
                We couldn't update your profile.
              </p>
            </div>

          </div>
        </div>
      )}

      <div className="mx-auto max-w-6xl">

        {/* ================= HEADER ================= */}

        <div className="mb-8">

          <p className="text-sm font-medium text-[#6B8FB8]">
            InterviewIQ
          </p>

          <h1 className="mt-1 text-3xl font-bold">
            My Profile
          </h1>

          <p className="mt-2 text-[#9AA3AD]">
            Manage your profile and view your interview performance.
          </p>

        </div>

        {/* ================= PROFILE CARD ================= */}

        <div className="rounded-2xl border border-[#2F3D4B] bg-[#151B22] p-6 shadow-xl lg:p-8">

          <div className="flex flex-col gap-6 md:flex-row md:items-center">

            {/* AVATAR */}

            <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-full bg-[#4F7CAC] text-4xl font-bold text-white">
              {user.name
                ? user.name.charAt(0).toUpperCase()
                : "U"}
            </div>

            {/* USER INFO */}

            <div className="flex-1">

              <h2 className="text-3xl font-bold">
                {user.name || "User"}
              </h2>

              <p className="mt-2 text-[#C7CDD4]">
                {user.course || "Course not added"}
              </p>

              <p className="mt-1 text-[#9AA3AD]">
                {user.university || "University not added"}
              </p>

            </div>

            {/* EDIT BUTTON */}

            <button
              onClick={() => setShowModal(true)}
              className="flex items-center justify-center gap-2 rounded-xl bg-[#4F7CAC] px-5 py-3 font-semibold text-white transition hover:bg-[#3F6790]"
            >
              <FiEdit size={18} />
              Edit Profile
            </button>

          </div>

        </div>

        {/* ================= INFORMATION ================= */}

        <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2">

          {/* EMAIL */}

          <div className="rounded-xl border border-[#2F3D4B] bg-[#151B22] p-6">

            <FiMail
              size={22}
              className="mb-4 text-[#6B8FB8]"
            />

            <p className="text-sm text-[#9AA3AD]">
              Email
            </p>

            <p className="mt-1 break-all text-white">
              {user.email || "Email not available"}
            </p>

          </div>

          {/* GITHUB */}

          <div className="rounded-xl border border-[#2F3D4B] bg-[#151B22] p-6">

            <FiGithub
              size={22}
              className="mb-4 text-[#6B8FB8]"
            />

            <p className="text-sm text-[#9AA3AD]">
              GitHub
            </p>

            {user.github ? (
              <a
                href={user.github}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 block text-white transition hover:text-[#6B8FB8]"
              >
                GitHub Profile →
              </a>
            ) : (
              <p className="mt-1 text-[#6F7A86]">
                Not added
              </p>
            )}

          </div>

          {/* LINKEDIN */}

          <div className="rounded-xl border border-[#2F3D4B] bg-[#151B22] p-6">

            <FiLinkedin
              size={22}
              className="mb-4 text-[#6B8FB8]"
            />

            <p className="text-sm text-[#9AA3AD]">
              LinkedIn
            </p>

            {user.linkedin ? (
              <a
                href={user.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 block text-white transition hover:text-[#6B8FB8]"
              >
                LinkedIn Profile →
              </a>
            ) : (
              <p className="mt-1 text-[#6F7A86]">
                Not added
              </p>
            )}

          </div>

          {/* EDUCATION */}

          <div className="rounded-xl border border-[#2F3D4B] bg-[#151B22] p-6">

            <p className="text-sm text-[#9AA3AD]">
              Education
            </p>

            <p className="mt-2 font-semibold text-white">
              {user.course || "Course not added"}
            </p>

            <p className="mt-1 text-sm text-[#9AA3AD]">
              {user.university || "University not added"}
            </p>

          </div>

        </div>

        {/* ================= PERFORMANCE ================= */}

        <div className="mt-8">

          <h2 className="mb-4 text-2xl font-bold">
            Performance Overview
          </h2>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">

            {/* TOTAL INTERVIEWS */}

            <div className="rounded-xl border border-[#2F3D4B] bg-[#151B22] p-6">

              <p className="text-sm text-[#9AA3AD]">
                Total Interviews
              </p>

              <h3 className="mt-3 text-4xl font-bold text-[#6B8FB8]">
                {user.interviews}
              </h3>

            </div>

            {/* AVERAGE SCORE */}

            <div className="rounded-xl border border-[#2F3D4B] bg-[#151B22] p-6">

              <p className="text-sm text-[#9AA3AD]">
                Average Score
              </p>

              <h3 className="mt-3 text-4xl font-bold text-[#6B8FB8]">
                {user.averageScore}%
              </h3>

            </div>

            {/* ATS SCORE */}

            <div className="rounded-xl border border-[#2F3D4B] bg-[#151B22] p-6">

              <p className="text-sm text-[#9AA3AD]">
                ATS Score
              </p>

              <h3 className="mt-3 text-4xl font-bold text-[#6B8FB8]">
                {user.atsScore}
              </h3>

            </div>

          </div>

        </div>

      </div>

      {/* ================= EDIT PROFILE MODAL ================= */}

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4">

          <div className="w-full max-w-xl rounded-2xl border border-[#2F3D4B] bg-[#151B22] p-6 shadow-2xl lg:p-8">

            {/* MODAL HEADER */}

            <div className="mb-6 flex items-center justify-between">

              <div>

                <h2 className="text-2xl font-bold">
                  Edit Profile
                </h2>

                <p className="mt-1 text-sm text-[#9AA3AD]">
                  Update your personal information.
                </p>

              </div>

              <button
                onClick={() => setShowModal(false)}
                className="rounded-lg p-2 text-[#9AA3AD] transition hover:bg-[#1D2126] hover:text-white"
              >
                <FiX size={22} />
              </button>

            </div>

            {/* ================= INPUTS ================= */}

            <div className="space-y-5">

              {/* NAME */}

              <div>

                <label className="mb-2 block text-sm text-[#9AA3AD]">
                  Name
                </label>

                <input
                  className="w-full rounded-xl border border-[#2F3D4B] bg-[#12181F] px-4 py-3 text-white outline-none focus:border-[#4F7CAC]"
                  value={user.name}
                  onChange={(e) =>
                    setUser({
                      ...user,
                      name: e.target.value,
                    })
                  }
                  placeholder="Name"
                />

              </div>

              {/* EMAIL */}

              <div>

                <label className="mb-2 block text-sm text-[#9AA3AD]">
                  Email
                </label>

                <input
                  type="email"
                  className="w-full rounded-xl border border-[#2F3D4B] bg-[#12181F] px-4 py-3 text-white outline-none focus:border-[#4F7CAC]"
                  value={user.email}
                  onChange={(e) =>
                    setUser({
                      ...user,
                      email: e.target.value,
                    })
                  }
                  placeholder="Email"
                />

              </div>

              {/* UNIVERSITY */}

              <div>

                <label className="mb-2 block text-sm text-[#9AA3AD]">
                  University
                </label>

                <input
                  className="w-full rounded-xl border border-[#2F3D4B] bg-[#12181F] px-4 py-3 text-white outline-none focus:border-[#4F7CAC]"
                  value={user.university}
                  onChange={(e) =>
                    setUser({
                      ...user,
                      university: e.target.value,
                    })
                  }
                  placeholder="University"
                />

              </div>

              {/* COURSE */}

              <div>

                <label className="mb-2 block text-sm text-[#9AA3AD]">
                  Course
                </label>

                <input
                  className="w-full rounded-xl border border-[#2F3D4B] bg-[#12181F] px-4 py-3 text-white outline-none focus:border-[#4F7CAC]"
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

              {/* GITHUB */}

              <div>

                <label className="mb-2 block text-sm text-[#9AA3AD]">
                  GitHub
                </label>

                <input
                  className="w-full rounded-xl border border-[#2F3D4B] bg-[#12181F] px-4 py-3 text-white outline-none focus:border-[#4F7CAC]"
                  value={user.github}
                  onChange={(e) =>
                    setUser({
                      ...user,
                      github: e.target.value,
                    })
                  }
                  placeholder="GitHub URL"
                />

              </div>

              {/* LINKEDIN */}

              <div>

                <label className="mb-2 block text-sm text-[#9AA3AD]">
                  LinkedIn
                </label>

                <input
                  className="w-full rounded-xl border border-[#2F3D4B] bg-[#12181F] px-4 py-3 text-white outline-none focus:border-[#4F7CAC]"
                  value={user.linkedin}
                  onChange={(e) =>
                    setUser({
                      ...user,
                      linkedin: e.target.value,
                    })
                  }
                  placeholder="LinkedIn URL"
                />

              </div>

            </div>

            {/* ================= ACTIONS ================= */}

            <div className="mt-8 flex justify-end gap-3">

              <button
                type="button"
                onClick={() => setShowModal(false)}
                className="rounded-xl border border-[#2F3D4B] bg-[#12181F] px-5 py-3 font-medium text-[#C7CDD4] transition hover:bg-[#1D2126]"
              >
                Cancel
              </button>

              <button
                type="button"
                onClick={handleSave}
                disabled={saving}
                className="rounded-xl bg-[#4F7CAC] px-5 py-3 font-semibold text-white transition hover:bg-[#3F6790] disabled:cursor-not-allowed disabled:opacity-50"
              >
                {saving ? "Saving..." : "Save Changes"}
              </button>

            </div>

          </div>

        </div>
      )}

    </div>
  );
}