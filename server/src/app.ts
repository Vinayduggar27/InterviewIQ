import express from "express";
import cors from "cors";

import userRoutes from "./routes/user.routes";
import authRoutes from "./routes/auth.routes";
import dashboardRoutes from "./routes/dashboard.routes";
import interviewRoutes from "./routes/interview.routes";
import resumeRoutes from "./routes/resume.routes";
import profileRoutes from "./routes/profile.routes";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/interviews", interviewRoutes);
app.use("/api/resume", resumeRoutes);
app.use("/api/profile", profileRoutes);

app.get("/", (req, res) => {
  res.send("InterviewIQ API is running 🚀");
});

export default app;