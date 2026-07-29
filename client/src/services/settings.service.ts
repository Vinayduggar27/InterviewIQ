import api from "./api";

export const changePassword = async (data: {
  currentPassword: string;
  newPassword: string;
}) => {
  return api.put("/settings/change-password", data);
};

export const deleteAccount = async (
  password: string
) => {
  return api.delete("/settings/delete-account", {
    data: {
      password,
    },
  });
};