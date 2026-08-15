interface CardProps {
  children: React.ReactNode;
}

export default function Card({ children }: CardProps) {
  return (
    <div className="bg-[#151B22]/80 backdrop-blur-xl border border-[#2F3D4B] rounded-3xl shadow-2xl p-8">
      {children}
    </div>
  );
}