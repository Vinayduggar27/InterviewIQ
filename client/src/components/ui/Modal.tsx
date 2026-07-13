interface ModalProps {
  children: React.ReactNode;
}

export default function Modal({ children }: ModalProps) {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      <div className="bg-slate-900 rounded-2xl p-6 w-full max-w-md">
        {children}
      </div>
    </div>
  );
}