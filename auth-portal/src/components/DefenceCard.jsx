export default function DefenceCard({ children }) {
  return (
    <div className="
      w-[400px]
      backdrop-blur-lg
      bg-white/10
      border border-white/20
      shadow-2xl
      rounded-2xl
      p-8
      text-white
    ">
      {children}
    </div>
  );
}
