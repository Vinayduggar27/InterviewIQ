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
export const evaluateInterviewAnswers = async (
  questions: string[],
  answers: string[],
  role: string
) => {
  const prompt = `
You are a Senior Technical Interviewer.

Role: ${role}

Questions:
${questions.map((q, i) => `${i + 1}. ${q}`).join("\n")}

Candidate Answers:
${answers.map((a, i) => `${i + 1}. ${a}`).join("\n")}

Evaluate this interview.

Return ONLY valid JSON in this format:

{
  "overallScore": 85,
  "technicalScore": 82,
  "communicationScore": 90,
  "confidenceScore": 84,
  "strengths": [
    "...",
    "..."
  ],
  "weaknesses": [
    "...",
    "..."
  ],
  "feedback": "..."
}
`;

  const completion = await groq.chat.completions.create({
    model: "llama-3.3-70b-versatile",
    temperature: 0.3,
    messages: [
      {
        role: "user",
        content: prompt,
      },
    ],
  });

  return JSON.parse(
    completion.choices[0].message.content || "{}"
  );
};