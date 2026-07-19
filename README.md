# 🤖 InterviewIQ

<div align="center">

### AI-Powered Interview Preparation Platform

Analyze your resume, practice AI-generated interviews, evaluate performance, and improve your chances of landing your dream job.

![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript)
![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-336791?style=for-the-badge&logo=postgresql)
![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-06B6D4?style=for-the-badge&logo=tailwindcss)
![Groq AI](https://img.shields.io/badge/Groq_AI-FF6B00?style=for-the-badge)

</div>

---

# 📖 Overview

InterviewIQ is a full-stack AI-powered interview preparation platform built to help students and professionals improve their resumes, practice interviews, and receive personalized AI-driven feedback.

The platform combines modern web technologies with Large Language Models (LLMs) to deliver resume analysis, ATS scoring, interview question generation, answer evaluation, and professional PDF reports within a single application.

---

# ✨ Key Features

## 📄 AI Resume Analyzer

- Upload resumes in PDF format
- AI-powered resume analysis
- ATS compatibility scoring
- Strength & weakness detection
- Missing keyword identification
- Personalized improvement suggestions
- Professional PDF report generation

---

## 🎤 AI Mock Interviews

- Generate role-specific interview questions
- Technology stack selection
- Company & experience-based customization
- AI answer evaluation
- Interview timer
- Camera preview
- Speech recognition support

---

## 📊 Dashboard

- Resume analytics
- Interview history
- Performance statistics
- AI recommendations
- Recent activity
- Quick actions

---

# 🏗️ System Architecture

```
                 React + TypeScript
                        │
                        │ REST API
                        ▼
              Express + TypeScript
                        │
      ┌─────────────────┴────────────────┐
      │                                  │
      ▼                                  ▼
 PostgreSQL + Prisma                Groq AI API
      │                                  │
      └──────────────┬───────────────────┘
                     ▼
              Resume Analysis
           Interview Generation
           Answer Evaluation
```

---

# ⚙️ Tech Stack

### Frontend

- React
- TypeScript
- Tailwind CSS
- Vite
- Axios
- React Router

### Backend

- Node.js
- Express.js
- TypeScript
- JWT Authentication

### Database

- PostgreSQL
- Prisma ORM

### Artificial Intelligence

- Groq AI
- Llama 3.3 70B Versatile

### Utilities

- pdf-parse
- jsPDF

---

# 📂 Project Structure

```
InterviewIQ/

├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── hooks/
│   │   ├── services/
│   │   ├── utils/
│   │   └── assets/
│   │
│   └── package.json
│
├── server/
│   ├── controllers/
│   ├── middleware/
│   ├── prisma/
│   ├── routes/
│   ├── services/
│   ├── utils/
│   └── package.json
│
└── README.md
```

---

# 🔐 Authentication

InterviewIQ uses **JWT-based authentication** to secure user accounts and protected resources.

### Features

- User Registration
- Secure Login
- Password Hashing
- JWT Token Generation
- Protected Routes
- Authorization Middleware

---

# 📄 Resume Analysis Workflow

```
Upload Resume
      │
      ▼
Extract PDF Text
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
Download PDF Report
```

---

# 🎤 Interview Workflow

```
Create Interview
        │
        ▼
Choose

• Job Role
• Company
• Experience
• Tech Stack

        │
        ▼
Generate AI Questions
        │
        ▼
User Answers
        │
        ▼
AI Evaluation
        │
        ▼
Performance Dashboard
```

---

# 🌐 API Overview

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | `/api/auth/register` | Register a new user |
| POST | `/api/auth/login` | User authentication |
| GET | `/api/interviews` | Fetch all interviews |
| POST | `/api/interviews` | Create AI interview |
| GET | `/api/interviews/:id` | Fetch interview details |
| POST | `/api/resume/analyze` | Analyze uploaded resume |

> Additional endpoints can be documented in a dedicated `docs/API.md` as the project grows.

---

# 📊 Resume Report

Each generated report contains:

- Executive Summary
- ATS Score
- Resume Rating
- Strength Analysis
- Weakness Analysis
- Missing Keywords
- AI Suggestions
- Progress Visualization
- InterviewIQ Branding

---

# 🎨 UI Highlights

- Responsive Design
- Modern Dashboard
- Drag & Drop Resume Upload
- Animated Loading Screen
- Circular ATS Progress Indicator
- Professional Cards
- Smooth Animations
- Premium PDF Export

---

# 🚀 Getting Started

## Clone the Repository

```bash
git clone https://github.com/Vinayduggar27/InterviewIQ.git
```

---

## Install Dependencies

### Frontend

```bash
cd client
npm install
```

### Backend

```bash
cd ../server
npm install
```

---

## Environment Variables

Create a `.env` file inside the **server** directory.

```env
PORT=5000

DATABASE_URL=your_postgresql_connection_string

JWT_SECRET=your_secret_key

GROQ_API_KEY=your_groq_api_key
```

---

## Run the Application

### Backend

```bash
cd server
npm run dev
```

### Frontend

```bash
cd client
npm run dev
```

The application will be available at:

```
Frontend → http://localhost:5173

Backend → http://localhost:5000
```

---

# 📸 Screenshots

Add screenshots of:

- Landing Page
- Dashboard
- Resume Analyzer
- AI Interview
- PDF Report

---

# 🚀 Future Enhancements

- Coding Interview Mode
- Company-specific Interview Sets
- AI Career Roadmap
- Resume Version History
- Dark Mode
- Analytics Dashboard
- Interview Recording

---

# 🤝 Contributing

Contributions are welcome!

```bash
# Fork the repository

# Create a feature branch

git checkout -b feature/new-feature

# Commit changes

git commit -m "feat: add new feature"

# Push changes

git push origin feature/new-feature
```

Then create a Pull Request.

---

# 👨‍💻 Author

**Vinay Duggar**

B.Tech Computer Science Engineering  
BML Munjal University

- GitHub: https://github.com/Vinayduggar27
- LinkedIn: https://www.linkedin.com/in/vinay-duggar/

---

<div align="center">

### ⭐ If you found this project useful, consider giving it a star on GitHub!

Built with ❤️ using React, TypeScript, Express, PostgreSQL, Prisma, and Groq AI.

</div>
