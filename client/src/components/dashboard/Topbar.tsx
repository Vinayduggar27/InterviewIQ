import { useEffect, useState } from "react";
import { FiBell, FiSearch } from "react-icons/fi";

export default function Topbar() {
  const userName =
    localStorage.getItem("userName") || "Developer";

  const [greeting, setGreeting] = useState("");

  const updateGreeting = () => {
    const hour = new Date().getHours();

    if (hour >= 5 && hour < 12) {
      setGreeting("Good Morning");
    } else if (hour >= 12 && hour < 17) {
      setGreeting("Good Afternoon");
    } else if (hour >= 17 && hour < 22) {
      setGreeting("Good Evening");
    } else {
      setGreeting("Good Night");
    }
  };

  useEffect(() => {
    updateGreeting();

    const interval = setInterval(updateGreeting, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <header className="h-24 border-b border-[#2F3D4B] px-8 flex items-center justify-between">

      {/* Greeting */}
      <div>
        <h2 className="text-2xl font-bold text-white">
          {greeting}, {userName} 👋
        </h2>

        <p className="text-[#9AA3AD] text-sm mt-1">
          Ready to ace your next interview?
        </p>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-5">

        {/* Search */}
        <div className="
          hidden
          md:flex
          items-center
          gap-3
          w-64
          bg-[#151B22]
          border
          border-[#2F3D4B]
          px-4
          py-2.5
          rounded-xl
        ">

          <FiSearch
            size={19}
            className="text-[#9AA3AD]"
          />

          <input
            type="text"
            placeholder="Search..."
            className="
              w-full
              bg-transparent
              outline-none
              text-white
              placeholder:text-[#6F7882]
              text-sm
            "
          />

        </div>

        {/* Notification */}
        <button
          className="
            relative
            text-[#C7CDD4]
            hover:text-white
            transition
          "
        >
          <FiBell size={22} />

          {/* Notification dot */}
          <span className="
            absolute
            -top-1
            -right-1
            w-2
            h-2
            rounded-full
            bg-[#6B8FB8]
          " />
        </button>

        {/* Avatar */}
        <div className="
          w-11
          h-11
          rounded-full
          bg-[#4F7CAC]
          flex
          items-center
          justify-center
          text-white
          font-semibold
        ">
          {userName.charAt(0).toUpperCase()}
        </div>

      </div>

    </header>
  );
}