import Sidebar from "../components/Sidebar";

export default function DashboardLayout({ children }) {
  return (
    <div className="dashboard">
      <Sidebar />

      <div className="dashboard-content">
        {children}
      </div>
    </div>
  );
}