import prisma from "../config/prisma";
import bcrypt from "bcryptjs";

export const deleteAccountService = async (
  userId: string,
  password: string
) => {
  const user = await prisma.user.findUnique({
    where: { id: userId },
  });

  if (!user) {
    throw new Error("User not found");
  }

  const valid = await bcrypt.compare(password, user.password);

  if (!valid) {
    throw new Error("Incorrect password");
  }

  await prisma.user.delete({
    where: {
      id: userId,
    },
  });

  return true;
};