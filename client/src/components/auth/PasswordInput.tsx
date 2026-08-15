import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import Input from "../ui/Input";

interface PasswordInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

export default function PasswordInput({
  value,
  onChange,
  placeholder = "Enter your password",
}: PasswordInputProps) {
  const [show, setShow] = useState(false);

  return (
    <div className="relative">
      <Input
        type={show ? "text" : "password"}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />

      <button
        type="button"
        onClick={() => setShow(!show)}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-[#9AA3AD] hover:text-[#6B8FB8]"
      >
        {show ? <FiEyeOff /> : <FiEye />}
      </button>
    </div>
  );
}