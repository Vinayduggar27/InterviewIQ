import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import Input from "../ui/Input";

interface PasswordInputProps {
  placeholder?: string;
}

export default function PasswordInput({
  placeholder = "Password",
}: PasswordInputProps) {

  const [show, setShow] = useState(false);

  return (
    <div className="relative">

      <Input
        type={show ? "text" : "password"}
        placeholder={placeholder}
      />

      <button
        type="button"
        onClick={() => setShow(!show)}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-cyan-400"
      >
        {show ? <FiEyeOff /> : <FiEye />}
      </button>

    </div>
  );
}