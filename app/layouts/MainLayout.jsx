export default function MainLayout({ children }) {
  return (
    <div className="app-container">
      <nav className="navbar">MyApp</nav>

      <main className="main-content">
        {children}
      </main>

      <footer className="footer">© 2026 MyApp</footer>
    </div>
  );
}