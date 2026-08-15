import type { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export default function Input({
  className = "",
  ...props
}: InputProps) {
  return (
    <input
      className={`w-full px-4 py-3 rounded-xl bg-[#151B22] border border-[#2F3D4B] text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none ${className}`}
      {...props}
    />
  );
}