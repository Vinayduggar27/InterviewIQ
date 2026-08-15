import jsPDF from "jspdf";

interface ResumeAnalysis {
  atsScore: number;
  strengths: string[];
  weaknesses: string[];
  missingKeywords: string[];
  suggestions: string[];
}

export const generateResumeReport = (
  analysis: ResumeAnalysis
) => {
  const doc = new jsPDF();

  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();

  const margin = 18;
  const contentWidth = pageWidth - margin * 2;

  let y = 20;

  // =====================================================
  // INTERVIEWIQ PREMIUM DARK THEME
  // =====================================================

  const COLORS = {
    background: [15, 18, 22] as [number, number, number],
    card: [21, 25, 30] as [number, number, number],
    item: [28, 33, 39] as [number, number, number],

    border: [52, 59, 67] as [number, number, number],

    white: [245, 246, 248] as [number, number, number],
    text: [214, 217, 222] as [number, number, number],
    muted: [145, 151, 159] as [number, number, number],

    neutral: [175, 181, 188] as [number, number, number],

    green: [46, 204, 113] as [number, number, number],
    red: [235, 87, 87] as [number, number, number],
    gold: [226, 169, 64] as [number, number, number],
  };

  // =====================================================
  // BACKGROUND
  // =====================================================

  const drawBackground = () => {
    doc.setFillColor(...COLORS.background);

    doc.rect(
      0,
      0,
      pageWidth,
      pageHeight,
      "F"
    );
  };

  drawBackground();

  // =====================================================
  // FOOTER
  // =====================================================

  const addFooter = () => {
    doc.setDrawColor(...COLORS.border);

    doc.line(
      margin,
      pageHeight - 17,
      pageWidth - margin,
      pageHeight - 17
    );

    doc.setFont("helvetica", "normal");
    doc.setFontSize(8);
    doc.setTextColor(...COLORS.muted);

    doc.text(
      "InterviewIQ  |  AI Powered Resume Analysis",
      margin,
      pageHeight - 9
    );

    const page =
      doc.getCurrentPageInfo().pageNumber;

    doc.text(
      `Page ${page}`,
      pageWidth - margin - 16,
      pageHeight - 9
    );
  };

  // =====================================================
  // NEW PAGE
  // =====================================================

  const newPage = () => {
    addFooter();

    doc.addPage();

    drawBackground();

    y = 20;
  };

  

  // =====================================================
  // HEADER
  // =====================================================

  const drawHeader = () => {
    doc.setFillColor(...COLORS.card);

    doc.roundedRect(
      margin,
      14,
      contentWidth,
      46,
      5,
      5,
      "F"
    );

    doc.setDrawColor(...COLORS.border);

    doc.roundedRect(
      margin,
      14,
      contentWidth,
      46,
      5,
      5,
      "S"
    );

    // Minimal neutral accent
    doc.setFillColor(...COLORS.neutral);

    doc.roundedRect(
      margin,
      14,
      3,
      46,
      1.5,
      1.5,
      "F"
    );

    // Logo
    doc.setFont("helvetica", "bold");
    doc.setFontSize(23);
    doc.setTextColor(...COLORS.white);

    doc.text(
      "InterviewIQ",
      margin + 12,
      34
    );

    // Subtitle
    doc.setFont("helvetica", "normal");
    doc.setFontSize(9.5);
    doc.setTextColor(...COLORS.muted);

    doc.text(
      "AI Resume Analysis Report",
      margin + 12,
      46
    );

    // AI status
    doc.setFillColor(...COLORS.item);

    doc.roundedRect(
      pageWidth - margin - 39,
      26,
      31,
      16,
      4,
      4,
      "F"
    );

    doc.setFontSize(7.5);
    doc.setTextColor(...COLORS.green);

    doc.text(
      "AI READY",
      pageWidth - margin - 33,
      36
    );
  };

  drawHeader();

  y = 70;

  // =====================================================
  // GENERATED DATE
  // =====================================================

  doc.setFont("helvetica", "normal");
  doc.setFontSize(8.5);
  doc.setTextColor(...COLORS.muted);

  doc.text(
    `Generated ${new Date().toLocaleString()}`,
    margin,
    y
  );

  y += 15;

  // =====================================================
  // RESUME PERFORMANCE
  // =====================================================

  const performanceHeight = 86;

  doc.setFillColor(...COLORS.card);

  doc.roundedRect(
    margin,
    y,
    contentWidth,
    performanceHeight,
    5,
    5,
    "F"
  );

  doc.setDrawColor(...COLORS.border);

  doc.roundedRect(
    margin,
    y,
    contentWidth,
    performanceHeight,
    5,
    5,
    "S"
  );

  // Heading
  doc.setFont("helvetica", "bold");
  doc.setFontSize(15);
  doc.setTextColor(...COLORS.white);

  doc.text(
    "Resume Performance",
    margin + 8,
    y + 14
  );

  doc.setFont("helvetica", "normal");
  doc.setFontSize(8.5);
  doc.setTextColor(...COLORS.muted);

  doc.text(
    "Overall ATS compatibility and resume quality",
    margin + 8,
    y + 23
  );

  // =====================================================
  // SCORE
  // =====================================================

  doc.setFontSize(8);
  doc.setTextColor(...COLORS.neutral);

  doc.text(
    "ATS SCORE",
    margin + 8,
    y + 37
  );

  doc.setFont("helvetica", "bold");
  doc.setFontSize(27);
  doc.setTextColor(...COLORS.white);

  doc.text(
    `${analysis.atsScore}%`,
    margin + 8,
    y + 59
  );

  // =====================================================
  // SCORE RATING
  // =====================================================

  let rating = "Needs Improvement";
  let ratingColor = COLORS.red;

  if (analysis.atsScore >= 85) {
    rating = "Excellent";
    ratingColor = COLORS.green;
  } else if (analysis.atsScore >= 70) {
    rating = "Very Good";
    ratingColor = COLORS.neutral;
  } else if (analysis.atsScore >= 50) {
    rating = "Average";
    ratingColor = COLORS.gold;
  }

  doc.setFont("helvetica", "normal");
  doc.setFontSize(8.5);
  doc.setTextColor(...ratingColor);

  doc.text(
    rating,
    margin + 45,
    y + 56
  );

  // =====================================================
  // SCORE PROGRESS BAR
  // =====================================================

  const progressX = margin + 76;
  const progressY = y + 40;

  const progressWidth =
    contentWidth - 88;

  // Background
  doc.setFillColor(...COLORS.item);

  doc.roundedRect(
    progressX,
    progressY,
    progressWidth,
    8,
    4,
    4,
    "F"
  );

  // Score color
  let scoreColor = COLORS.red;

  if (analysis.atsScore >= 85) {
    scoreColor = COLORS.green;
  } else if (analysis.atsScore >= 70) {
    scoreColor = COLORS.neutral;
  } else if (analysis.atsScore >= 50) {
    scoreColor = COLORS.gold;
  }

  const progress =
    Math.max(
      0,
      Math.min(100, analysis.atsScore)
    ) / 100;

  const filledWidth =
    progressWidth * progress;

  doc.setFillColor(...scoreColor);

  doc.roundedRect(
    progressX,
    progressY,
    filledWidth,
    8,
    4,
    4,
    "F"
  );

  doc.setFont("helvetica", "normal");
  doc.setFontSize(8);
  doc.setTextColor(...COLORS.muted);

  doc.text(
    "Resume Quality",
    progressX,
    progressY + 17
  );

  doc.text(
    `${analysis.atsScore}/100`,
    progressX + progressWidth - 24,
    progressY + 17
  );

  // =====================================================
  // SUMMARY COUNTS
  // =====================================================

  const statsY = y + 75;

  doc.setFontSize(8);
  doc.setTextColor(...COLORS.muted);

  doc.text(
    `${analysis.strengths.length} Strengths`,
    margin + 8,
    statsY
  );

  doc.text(
    `${analysis.weaknesses.length} Areas to Improve`,
    margin + 70,
    statsY
  );

  doc.text(
    `${analysis.missingKeywords.length} Missing Keywords`,
    margin + 147,
    statsY
  );

  y += performanceHeight + 15;

  // =====================================================
  // SECTION RENDERER
  // =====================================================

  const renderSection = (
    title: string,
    subtitle: string,
    accent: [number, number, number],
    items: string[]
  ) => {
    if (items.length === 0) {
      return;
    }

    // -----------------------------------------------
    // Calculate approximate section height
    // -----------------------------------------------

    let estimatedHeight = 42;

    items.forEach((item) => {
      const lines = doc.splitTextToSize(
        item,
        contentWidth - 32
      );

      estimatedHeight +=
        Math.max(
          20,
          lines.length * 5 + 11
        );

      estimatedHeight += 5;
    });

    // Keep section together
    if (
      y + estimatedHeight >
      pageHeight - 27
    ) {
      newPage();
    }

    // -----------------------------------------------
    // Section Header
    // -----------------------------------------------

    doc.setFillColor(...COLORS.card);

    doc.roundedRect(
      margin,
      y,
      contentWidth,
      22,
      4,
      4,
      "F"
    );

    doc.setDrawColor(...COLORS.border);

    doc.roundedRect(
      margin,
      y,
      contentWidth,
      22,
      4,
      4,
      "S"
    );

    // Accent indicator
    doc.setFillColor(...accent);

    doc.roundedRect(
      margin + 7,
      y + 5,
      4,
      12,
      2,
      2,
      "F"
    );

    doc.setFont("helvetica", "bold");
    doc.setFontSize(12);
    doc.setTextColor(...COLORS.white);

    doc.text(
      title,
      margin + 18,
      y + 14
    );

    y += 29;

    // Subtitle
    doc.setFont("helvetica", "normal");
    doc.setFontSize(8.5);
    doc.setTextColor(...COLORS.muted);

    doc.text(
      subtitle,
      margin + 2,
      y
    );

    y += 10;

    // -----------------------------------------------
    // Items
    // -----------------------------------------------

    items.forEach((item) => {
      const lines = doc.splitTextToSize(
        item,
        contentWidth - 32
      );

      const itemHeight = Math.max(
        20,
        lines.length * 5 + 11
      );

      // Prevent item splitting
      if (
        y + itemHeight >
        pageHeight - 27
      ) {
        newPage();
      }

      doc.setFillColor(...COLORS.item);

      doc.roundedRect(
        margin + 3,
        y,
        contentWidth - 6,
        itemHeight,
        3,
        3,
        "F"
      );

      // Small semantic dot
      doc.setFillColor(...accent);

      doc.circle(
        margin + 12,
        y + itemHeight / 2,
        1.7,
        "F"
      );

      doc.setFont("helvetica", "normal");
      doc.setFontSize(8.5);
      doc.setTextColor(...COLORS.text);

      lines.forEach(
        (
          line: string,
          index: number
        ) => {
          doc.text(
            line,
            margin + 19,
            y + 8 + index * 5
          );
        }
      );

      y += itemHeight + 5;
    });

    y += 10;
  };

  // =====================================================
  // STRENGTHS
  // =====================================================

  renderSection(
    "Strengths",
    "What's working well in your resume",
    COLORS.green,
    analysis.strengths
  );

  // =====================================================
  // AREAS TO IMPROVE
  // =====================================================

  renderSection(
    "Areas to Improve",
    "Things you can strengthen before applying",
    COLORS.red,
    analysis.weaknesses
  );

  // =====================================================
  // MISSING KEYWORDS
  // =====================================================

  renderSection(
    "Missing Keywords",
    "Skills that could improve your ATS performance",
    COLORS.gold,
    analysis.missingKeywords
  );

  // =====================================================
  // AI RECOMMENDATIONS
  // =====================================================

  renderSection(
    "AI Recommendations",
    "Personalized suggestions generated by InterviewIQ",
    COLORS.neutral,
    analysis.suggestions
  );

  // =====================================================
  // FINAL RECOMMENDATION
  // =====================================================

  if (y + 40 > pageHeight - 27) {
    newPage();
  }

  doc.setFillColor(...COLORS.card);

  doc.roundedRect(
    margin,
    y,
    contentWidth,
    34,
    5,
    5,
    "F"
  );

  doc.setDrawColor(...COLORS.border);

  doc.roundedRect(
    margin,
    y,
    contentWidth,
    34,
    5,
    5,
    "S"
  );

  doc.setFont("helvetica", "bold");
  doc.setFontSize(10);
  doc.setTextColor(...COLORS.white);

  doc.text(
    "InterviewIQ Recommendation",
    margin + 8,
    y + 13
  );

  doc.setFont("helvetica", "normal");
  doc.setFontSize(8.5);
  doc.setTextColor(...COLORS.muted);

  doc.text(
    "Use these insights to improve your resume before submitting applications.",
    margin + 8,
    y + 24
  );

  // =====================================================
  // FOOTER
  // =====================================================

  addFooter();

  // =====================================================
  // DOWNLOAD
  // =====================================================

  doc.save(
    "InterviewIQ_Resume_Report.pdf"
  );
};