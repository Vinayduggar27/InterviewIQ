# 🤖 InterviewIQ

<p align="center">

AI-Powered Interview Preparation Platform for Resume Analysis, Mock Interviews, and Performance Evaluation

</p>

<p align="center">

![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-336791?style=for-the-badge&logo=postgresql)
![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss)
![Groq AI](https://img.shields.io/badge/Groq_AI-FF6B00?style=for-the-badge)

</p>

---

# 📖 Overview

InterviewIQ is a modern AI-powered interview preparation platform designed to help students and job seekers improve their resumes and interview performance.

The platform combines Artificial Intelligence, Resume Analysis, Mock Interviews, Performance Tracking, and Interactive Analytics into a single web application.

Instead of simply checking resumes for keywords, InterviewIQ provides intelligent feedback, ATS scoring, personalized improvement suggestions, and AI-generated interview questions based on the user's profile.

---

# ✨ Features

## 🤖 AI Resume Analyzer

- Upload Resume (PDF)
- AI-powered Resume Analysis
- ATS Compatibility Score
- Resume Strength Detection
- Resume Weakness Detection
- Missing Keyword Identification
- Personalized AI Suggestions
- Animated ATS Score Visualization
- Executive Resume Summary

---

## 📄 Professional PDF Report

Generate a downloadable report containing:

- ATS Score
- Resume Summary
- Resume Strengths
- Resume Weaknesses
- Missing Keywords
- AI Suggestions
- Progress Visualization
- Executive Summary
- InterviewIQ Branding
- Automatic Page Breaks

---

## 🎯 AI Mock Interview

Users can create interviews by selecting:

- Job Role
- Experience Level
- Company
- Technology Stack

InterviewIQ generates AI-powered interview questions using Groq AI.

---

## 🎤 Interview Features

- AI Generated Questions
- Speech Recognition
- Live Answer Recording
- Timer
- Camera Preview
- AI Answer Evaluation
- Performance Feedback

---

## 📊 Dashboard

Interactive dashboard containing:

- Total Interviews
- Average Score
- Resume Analysis
- Activity Feed
- AI Recommendations
- Quick Actions
- Progress Analytics

---

# 🏗️ Project Architecture

```
InterviewIQ
│
├── client
│   ├── components
│   ├── pages
│   ├── services
│   ├── hooks
│   ├── utils
│   └── assets
│
├── server
│   ├── controllers
│   ├── routes
│   ├── middleware
│   ├── prisma
│   ├── services
│   └── utils
│
└── database
```

---

# 🖥️ Tech Stack

## Frontend

- React
- TypeScript
- Tailwind CSS
- Vite
- React Router
- Axios

---

## Backend

- Node.js
- Express.js
- TypeScript
- JWT Authentication

---

## Database

- PostgreSQL
- Prisma ORM

---

## Artificial Intelligence

- Groq AI
- Llama 3.3 70B Versatile

---

## Resume Processing

- pdf-parse
- jsPDF

---

# 🚀 Resume Analysis Workflow

```
Upload Resume
      │
      ▼
PDF Parsing
      │
      ▼
Extract Resume Text
      │
      ▼
Send to Groq AI
      │
      ▼
Generate

• ATS Score
• Strengths
• Weaknesses
• Missing Keywords
• Suggestions
      │
      ▼
Display Interactive Dashboard
      │
      ▼
Download Professional PDF Report
```

---

# 📂 Folder Structure

```
client/src

components/
    ATSScore.tsx
    Strengths.tsx
    Weaknesses.tsx
    MissingKeywords.tsx
    Suggestions.tsx
    Loading.tsx
    ResumeUpload.tsx

pages/
    ResumeAnalyzer.tsx

utils/
    resumeReport.ts
```

---

# 🔐 Authentication

InterviewIQ uses JWT Authentication.

Features include:

- User Registration
- Secure Login
- Protected Routes
- Token Verification
- Authorization Middleware

---

# 📈 ATS Score

The Resume Analyzer evaluates resumes based on:

- Resume Structure
- Technical Skills
- Keywords
- Experience
- Education
- Projects
- Certifications
- ATS Compatibility

---

# 🎨 UI Highlights

Modern responsive interface featuring:

- Gradient Backgrounds
- Drag & Drop Resume Upload
- Animated Loading Screen
- Circular ATS Progress Indicator
- Dashboard Layout
- Interactive Cards
- Responsive Design
- Smooth Animations

---

# 📄 PDF Report

The generated report includes:

- InterviewIQ Branding
- Executive Summary
- ATS Score
- Color Indicators
- Progress Bar
- Resume Analysis
- AI Suggestions
- Page Numbers
- Automatic Pagination

---

# ⚙️ Installation

Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/InterviewIQ.git
```

Go into the project

```bash
cd InterviewIQ
```

Install frontend

```bash
cd client
npm install
```

Install backend

```bash
cd ../server
npm install
```

---

# ▶️ Run the Project

Backend

```bash
npm run dev
```

Frontend

```bash
npm run dev
```

---

# 🔑 Environment Variables

Server

```
PORT=

DATABASE_URL=

JWT_SECRET=

GROQ_API_KEY=
```

---

# 📸 Screenshots

You can add screenshots here.

- Landing Page
- Dashboard
- Resume Analyzer
- AI Interview
- PDF Report

---

# 🔮 Future Enhancements

- Voice Interview
- Coding Interview Mode
- Company Specific Interview Preparation
- AI Career Roadmap
- Interview Analytics
- Resume Version History
- Dark Mode


---

# 🤝 Contributing

Contributions are welcome.

1. Fork the repository

2. Create a new branch

```bash
git checkout -b feature-name
```

3. Commit changes

```bash
git commit -m "Add feature"
```

4. Push

```bash
git push origin feature-name
```

5. Open a Pull Request

---

# ⭐ Support

If you found this project helpful, please consider giving it a ⭐ on GitHub.

---

# 👨‍💻 Author

**Vinay Duggar**

B.Tech Computer Science Engineering

BML Munjal University

GitHub:
https://github.com/Vinayduggar27

LinkedIn:
https://www.linkedin.com/in/vinay-duggar/

---

<p align="center">

Made with ❤️ using React, TypeScript, Express, PostgreSQL, Prisma and Groq AI.

</p>
