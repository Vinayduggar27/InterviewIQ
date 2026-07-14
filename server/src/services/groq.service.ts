import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export const generateInterviewQuestions = async (
  role: string,
  experience: number,
  techStack: string
) => {
  const prompt = `
You are an expert technical interviewer.

Generate exactly 10 interview questions.

Role: ${role}
Experience: ${experience} years
Tech Stack: ${techStack}

Return ONLY a valid JSON array.

Example:
[
  "Question 1",
  "Question 2",
  "Question 3"
]
`;

  const completion = await groq.chat.completions.create({
    model: "llama-3.3-70b-versatile",
    messages: [
      {
        role: "user",
        content: prompt,
      },
    ],
    temperature: 0.7,
  });

  const text = completion.choices[0].message.content || "[]";

  return JSON.parse(text);
};