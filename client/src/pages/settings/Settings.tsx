import { useState } from "react";
import toast from "react-hot-toast";
import {
  deleteAccount,
} from "../../services/settings.service";
import {
  FiSettings,
  FiUser,
  FiLock,
  FiMoon,
  FiBell,
  FiTrash2,
  FiLogOut,
  FiX,
  FiEye,
  FiEyeOff,
} from "react-icons/fi";

import { changePassword } from "../../services/settings.service";

export default function Settings() {
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [deletePassword, setDeletePassword] = useState("");

  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showDeletePassword, setShowDeletePassword] = useState(false);

  return (
    <div className="min-h-screen bg-[#12181F] text-white p-8">
      <div className="max-w-5xl mx-auto">

        <div className="flex items-center gap-4 mb-10">
          <FiSettings className="text-[#6B8FB8]" size={42} />

          <div>
            <h1 className="text-5xl font-bold">
              Settings
            </h1>

            <p className="text-[#9AA3AD] mt-2">
              Manage your InterviewIQ account.
            </p>
          </div>
        </div>

        <div className="space-y-6">

                  {/* Edit Profile */}
        <div className="bg-[#151B22] rounded-3xl p-6 border border-[#2F3D4B] hover:border-[#4F7CAC] transition cursor-pointer">
          <div className="flex items-center gap-5">
            <FiUser size={28} className="text-[#6B8FB8]" />

            <div>
              <h2 className="text-2xl font-semibold">
                Edit Profile
              </h2>

              <p className="text-[#9AA3AD]">
                Update your personal information.
              </p>
            </div>
          </div>
        </div>

        {/* Change Password */}
        <div
          onClick={() => setShowPasswordModal(true)}
          className="bg-[#151B22] rounded-3xl p-6 border border-[#2F3D4B] hover:border-[#4F7CAC] transition cursor-pointer"
        >
          <div className="flex items-center gap-5">
            <FiLock size={28} className="text-[#6B8FB8]" />

            <div>
              <h2 className="text-2xl font-semibold">
                Change Password
              </h2>

              <p className="text-[#9AA3AD]">
                Update your account password.
              </p>
            </div>
          </div>
        </div>

        {/* Appearance */}
        <div className="bg-[#151B22] rounded-3xl p-6 border border-[#2F3D4B] hover:border-[#4F7CAC] transition cursor-pointer">
          <div className="flex items-center gap-5">
            <FiMoon size={28} className="text-[#6B8FB8]" />

            <div>
              <h2 className="text-2xl font-semibold">
                Appearance
              </h2>

              <p className="text-[#9AA3AD]">
                Dark mode support coming soon.
              </p>
            </div>
          </div>
        </div>

        {/* Notifications */}
        <div className="bg-[#151B22] rounded-3xl p-6 border border-[#2F3D4B] hover:border-[#4F7CAC] transition cursor-pointer">
          <div className="flex items-center gap-5">
            <FiBell size={28} className="text-[#6B8FB8]" />

            <div>
              <h2 className="text-2xl font-semibold">
                Notifications
              </h2>

              <p className="text-[#9AA3AD]">
                Manage your notification preferences.
              </p>
            </div>
          </div>
        </div>

        {/* Delete Account */}
        <div
          onClick={() => setShowDeleteModal(true)}
          className="bg-red-950 rounded-3xl p-6 border border-red-700 hover:bg-red-900 transition cursor-pointer"
        >
          <div className="flex items-center gap-5">
            <FiTrash2 size={28} className="text-red-400" />

            <div>
              <h2 className="text-2xl font-semibold text-red-300">
                Delete Account
              </h2>

              <p className="text-red-200">
                Permanently delete your account.
              </p>
            </div>
          </div>
        </div>

        {/* Logout */}
        <button
          className="bg-red-600 hover:bg-red-700 px-8 py-4 rounded-2xl flex items-center gap-3 font-semibold transition"
        >
          <FiLogOut />
          <button
  type="button"
  onClick={() => {
    toast(
      (t) => (
        <div className="flex flex-col gap-3">
          <p className="font-medium">
            Are you sure you want to logout?
          </p>

          <div className="flex justify-end gap-2">
            <button
              onClick={() => toast.dismiss(t.id)}
              className="px-3 py-1 rounded-lg bg-slate-600 hover:bg-slate-700 text-white"
            >
              Cancel
            </button>

            <button
              onClick={() => {
                toast.dismiss(t.id);

                localStorage.removeItem("token");

                toast.success("Logged out successfully.");

                setTimeout(() => {
                  window.location.href = "/";
                }, 800);
              }}
              className="px-3 py-1 rounded-lg bg-red-600 hover:bg-red-700 text-white"
            >
              Logout
            </button>
          </div>
        </div>
      ),
      {
        duration: 10000,
      }
    );
  }}
  className="w-full bg-red-600 hover:bg-red-700 px-8 py-4 rounded-2xl flex items-center justify-center gap-3 font-semibold transition"
>
  <FiLogOut size={22} />
  Logout
</button>
        </button>

                {/* ================= Change Password Modal ================= */}
        {showPasswordModal && (
          <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
            <div className="w-full max-w-lg bg-[#151B22] rounded-3xl border border-[#2F3D4B] p-8">

              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">
                  Change Password
                </h2>

                <button onClick={() => setShowPasswordModal(false)}>
                  <FiX size={24} />
                </button>
              </div>

              <div className="space-y-5">

                {/* Current Password */}
                <div className="relative">
                  <input
                    type={showCurrentPassword ? "text" : "password"}
                    placeholder="Current Password"
                    value={passwordData.currentPassword}
                    onChange={(e) =>
                      setPasswordData({
                        ...passwordData,
                        currentPassword: e.target.value,
                      })
                    }
                    className="w-full rounded-xl bg-[#1D2126] p-3 pr-12 outline-none focus:ring-2 focus:ring-cyan-500"
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowCurrentPassword(!showCurrentPassword)
                    }
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-[#9AA3AD] hover:text-white"
                  >
                    {showCurrentPassword ? (
                      <FiEyeOff size={20} />
                    ) : (
                      <FiEye size={20} />
                    )}
                  </button>
                </div>

                {/* New Password */}
                <div className="relative">
                  <input
                    type={showNewPassword ? "text" : "password"}
                    placeholder="New Password"
                    value={passwordData.newPassword}
                    onChange={(e) =>
                      setPasswordData({
                        ...passwordData,
                        newPassword: e.target.value,
                      })
                    }
                    className="w-full rounded-xl bg-[#1D2126] p-3 pr-12 outline-none focus:ring-2 focus:ring-cyan-500"
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowNewPassword(!showNewPassword)
                    }
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-[#9AA3AD] hover:text-white"
                  >
                    {showNewPassword ? (
                      <FiEyeOff size={20} />
                    ) : (
                      <FiEye size={20} />
                    )}
                  </button>
                </div>

                {/* Confirm Password */}
                <div className="relative">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm Password"
                    value={passwordData.confirmPassword}
                    onChange={(e) =>
                      setPasswordData({
                        ...passwordData,
                        confirmPassword: e.target.value,
                      })
                    }
                    className="w-full rounded-xl bg-[#1D2126] p-3 pr-12 outline-none focus:ring-2 focus:ring-cyan-500"
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowConfirmPassword(!showConfirmPassword)
                    }
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-[#9AA3AD] hover:text-white"
                  >
                    {showConfirmPassword ? (
                      <FiEyeOff size={20} />
                    ) : (
                      <FiEye size={20} />
                    )}
                  </button>
                </div>

              </div>

              <div className="flex justify-end gap-4 mt-8">

                <button
                  onClick={() => setShowPasswordModal(false)}
                  className="px-5 py-2 rounded-xl bg-slate-700 hover:bg-slate-600"
                >
                  Cancel
                </button>

                <button
                  onClick={async () => {
                    if (
                      !passwordData.currentPassword ||
                      !passwordData.newPassword ||
                      !passwordData.confirmPassword
                    ) {
                      toast.error("Please fill all fields.");
                      return;
                    }

                    if (
                      passwordData.newPassword !==
                      passwordData.confirmPassword
                    ) {
                      toast.error("Passwords do not match.");
                      return;
                    }

                    if (passwordData.newPassword.length < 8) {
                      toast.error(
                        "Password must be at least 8 characters."
                      );
                      return;
                    }

                    const loading = toast.loading(
                      "Updating password..."
                    );

                    try {
                      await changePassword({
                        currentPassword:
                          passwordData.currentPassword,
                        newPassword:
                          passwordData.newPassword,
                      });

                      toast.dismiss(loading);
                      toast.success(
                        "Password updated successfully!"
                      );

                      setPasswordData({
                        currentPassword: "",
                        newPassword: "",
                        confirmPassword: "",
                      });

                      setShowPasswordModal(false);
                    } catch (error: any) {
                      toast.dismiss(loading);

                      toast.error(
                        error.response?.data?.message ||
                          "Unable to update password."
                      );
                    }
                  }}
                  className="px-5 py-2 rounded-xl bg-[#4F7CAC] hover:bg-[#426A91] transition"
                >
                  Update Password
                </button>

              </div>

            </div>
          </div>
        )}

                {/* ================= Delete Account Modal ================= */}
{showDeleteModal && (
  <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
    <div className="w-full max-w-md bg-[#151B22] rounded-3xl border border-red-700 p-8">

      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-red-400">
          Delete Account
        </h2>

        <button
          type="button"
          onClick={() => {
            setDeletePassword("");
            setShowDeleteModal(false);
          }}
        >
          <FiX size={24} />
        </button>
      </div>

      {/* Warning */}
      <p className="text-[#9AA3AD] mb-6">
        This action is permanent and cannot be undone.
        Please enter your password to confirm.
      </p>

      {/* Password */}
      <div className="relative">
        <input
          type={showDeletePassword ? "text" : "password"}
          placeholder="Enter your password"
          value={deletePassword}
          onChange={(e) => setDeletePassword(e.target.value)}
          className="w-full rounded-xl bg-[#1D2126] p-3 pr-12 outline-none focus:ring-2 focus:ring-red-500"
        />

        <button
          type="button"
          onClick={() =>
            setShowDeletePassword(!showDeletePassword)
          }
          className="absolute right-4 top-1/2 -translate-y-1/2 text-[#9AA3AD] hover:text-white"
        >
          {showDeletePassword ? (
            <FiEyeOff size={20} />
          ) : (
            <FiEye size={20} />
          )}
        </button>
      </div>

      {/* Buttons */}
      <div className="flex justify-end gap-4 mt-8">

        <button
          type="button"
          onClick={() => {
            setDeletePassword("");
            setShowDeleteModal(false);
          }}
          className="px-5 py-2 rounded-xl bg-slate-700 hover:bg-slate-600 transition"
        >
          Cancel
        </button>

        <button
          type="button"
          onClick={async () => {
            if (!deletePassword.trim()) {
              toast.error("Please enter your password.");
              return;
            }

            const loading = toast.loading(
              "Deleting account..."
            );

            try {
              await deleteAccount(deletePassword);

              toast.dismiss(loading);
              toast.success("Account deleted successfully.");

              localStorage.removeItem("token");

              window.location.href = "/";
            } catch (error: any) {
              toast.dismiss(loading);

              toast.error(
                error.response?.data?.message ||
                  "Unable to delete account."
              );
            }
          }}
          className="px-5 py-2 rounded-xl bg-red-600 hover:bg-red-700 transition"
        >
          Delete Account
        </button>

      </div>

    </div>
  </div>
)}
                </div>

      </div>

    </div>
  );
}