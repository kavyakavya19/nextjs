export default function Card({ title, children }) {
  return (
    <div className="bg-white/10 backdrop-blur-lg border border-white/20 shadow-2xl rounded-2xl p-8 w-[320px] text-white hover:scale-105 transition-transform duration-300">
      
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      
      {children}

    </div>
  );
}