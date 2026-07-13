import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
  {
    question: "Is InterviewIQ free?",
    answer:
      "Yes. You can practice interviews for free. Premium features will be available later.",
  },
  {
    question: "Which companies are covered?",
    answer:
      "Google, Amazon, Microsoft, Meta, Apple, Netflix and many more.",
  },
  {
    question: "Does AI give feedback?",
    answer:
      "Yes. AI evaluates your communication, technical answers and confidence.",
  },
  {
    question: "Can I upload my resume?",
    answer:
      "Absolutely. InterviewIQ will analyze your resume and provide ATS improvements.",
  },
];

export default function FAQ() {
  const [open, setOpen] =useState<number | null>(0);

  return (
    <section className="bg-slate-950 py-24">

      <div className="max-w-4xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-white text-center">
          Frequently Asked Questions
        </h2>

        <div className="mt-14 space-y-5">

          {faqs.map((faq,index)=>(

            <div
              key={faq.question}
              className="bg-slate-800 rounded-xl overflow-hidden"
            >

              <button
                onClick={()=>setOpen(open===index?null:index)}
                className="w-full flex justify-between items-center p-6 text-left"
              >

                <span className="text-lg font-semibold text-white">
                  {faq.question}
                </span>

                <FaChevronDown
                  className={`transition ${
                    open===index ? "rotate-180":""
                  }`}
                />

              </button>

              {open===index &&(

                <div className="px-6 pb-6 text-slate-400">
                  {faq.answer}
                </div>

              )}

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}