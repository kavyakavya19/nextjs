export default function FormInput({
  label,
  type,
  name,
  value,
  onChange,
}) {
  return (
    <div style={{ marginBottom: "15px" }}>
      <label>{label}</label>
      <input
        type={type}
        name={name}  
        value={value}
        onChange={onChange}
        style={{
          width: "100%",
          padding: "10px",
          marginTop: "5px",
          borderRadius: "6px",
          border: "none"
        }}
      />
    </div>
  );
}