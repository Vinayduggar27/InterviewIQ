import api from "./api";

export const getInterviews = async () => {
  const res = await api.get("/interviews");
  return res.data;
};

export const createInterview = async (data: {
  role: string;
  company: string;
  experience: number;
  techStack: string;
}) => {
  const res = await api.post("/interviews", data);
  return res.data;
};

export const generateQuestions = async (id: string) => {
  const res = await api.post(`/interviews/${id}/generate`);
  return res.data;
};