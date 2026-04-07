// pages/index.js
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Sidebar from "../components/layout/Sidebar";

import Button from "../components/shared/Button";
import Card from "../components/shared/Card";
import Input from "../components/shared/Input";

export default function Home() {
  return (
    <>
      <Header />
      <Sidebar />

      <main style={{ padding: "20px" }}>
        <Input placeholder="Enter name" />
        <Button text="Click Me" />

        <Card title="Welcome">
          This is a reusable card component
        </Card>
      </main>

      <Footer />
    </>
  );
}