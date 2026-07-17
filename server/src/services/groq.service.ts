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
You are a Senior Technical Interviewer.

Generate EXACTLY 10 interview questions.

Role: ${role}
Experience: ${experience} years
Tech Stack: ${techStack}

Return ONLY a valid JSON array.

Do NOT use markdown.
Do NOT use \`\`\`json.
Do NOT explain anything.

Example:

[
  "Question 1",
  "Question 2",
  "Question 3"
]
`;

  const completion = await groq.chat.completions.create({
    model: "llama-3.3-70b-versatile",
    temperature: 0.5,
    messages: [
      {
        role: "user",
        content: prompt,
      },
    ],
  });

  const text = completion.choices[0].message.content || "[]";

  console.log("Generated Questions:\n", text);

  const cleaned = text
    .replace(/```json/g, "")
    .replace(/```/g, "")
    .trim();

  try {
    return JSON.parse(cleaned);
  } catch (err) {
    console.error("Invalid Questions JSON:");
    console.error(text);
    throw err;
  }
};

export const evaluateInterviewAnswers = async (
  questions: string[],
  answers: string[],
  role: string
) => {
  const prompt = `
You are an Expert Software Engineering Interviewer.

Evaluate the candidate fairly.

Role:
${role}

Interview Questions:
${questions
  .map((q, i) => `${i + 1}. ${q}`)
  .join("\n")}

Candidate Answers:
${answers
  .map((a, i) => `${i + 1}. ${a || "No Answer"}`)
  .join("\n")}

IMPORTANT:

Return ONLY raw JSON.

Do NOT use markdown.

Do NOT wrap inside \`\`\`json.

Do NOT explain anything.

Return exactly this structure:

{
  "overallScore": 0,
  "technicalScore": 0,
  "communicationScore": 0,
  "confidenceScore": 0,
  "feedback": "",
  "strengths": [],
  "weaknesses": []
}
`;

  const completion = await groq.chat.completions.create({
    model: "llama-3.3-70b-versatile",
    temperature: 0.2,
    messages: [
      {
        role: "user",
        content: prompt,
      },
    ],
  });

  const text = completion.choices[0].message.content || "{}";

  console.log("\n========== GROQ RESPONSE ==========");
  console.log(text);
  console.log("===================================\n");

  const cleaned = text
    .replace(/```json/g, "")
    .replace(/```/g, "")
    .trim();

  try {
    return JSON.parse(cleaned);
  } catch (err) {
    console.error("Invalid Evaluation JSON:");
    console.error(text);
    throw err;
  }
};