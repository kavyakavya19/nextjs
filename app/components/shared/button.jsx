// components/shared/Button.jsx
const Button = ({ text }) => {
  const style = {
    backgroundColor: "#0070f3",
    color: "#fff",
    padding: "10px 16px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer"
  };

  return <button style={style}>{text}</button>;
};

export default Button;