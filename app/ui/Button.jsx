export default function Button({ text }) {
  return (
    <button
      style={{
        padding: "12px 18px",
        borderRadius: "10px",
        border: "none",
        background: "linear-gradient(135deg, #f59e0b, #ef4444, #ec4899)",
        color: "white",
        fontWeight: "600",
        cursor: "pointer",
        boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
        transition: "0.3s"
      }}
    >
      {text}
    </button>
  );
}