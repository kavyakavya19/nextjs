import Card from "./components/Card";
import Button from "./ui/Button";

export default function Home() {
  return (
    <div>
      <h1 style={{ marginBottom: "20px" }}>Dashboard</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px"
        }}
      >
        <Card title="Users" desc="Manage users" />
        <Card title="Bookings" desc="Track bookings" />
        <Card title="Revenue" desc="View analytics" />
      </div>

      <div style={{ marginTop: "30px" }}>
        <Button text="Get Started" />
      </div>
    </div>
  );
}