import Card from "../components/Card";

export default function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "20px",
          marginTop: "20px"
        }}
      >
        <Card title="Users" desc="Manage users" />
        <Card title="Bookings" desc="Track bookings" />
        <Card title="Revenue" desc="View analytics" />
      </div>
    </div>
  );
}