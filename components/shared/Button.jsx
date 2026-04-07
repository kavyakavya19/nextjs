export default function Button({ text }) {
  return (
    <button className="px-6 py-3 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-semibold shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300">
      {text}
    </button>
  );
}