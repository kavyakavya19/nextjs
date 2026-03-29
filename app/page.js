import ImageCard from "./components/ImageCard";
import ContactForm from "./forms/ContactForm";
import data from "./data/sampleData.json";
import DataCard from "./components/DataCard";

export default function Home() {
  return (
    <div className="home-container">
      
      <h1 className="title">Dashboard</h1>

      
      <div className="grid">
  <ImageCard
    src="https://images.unsplash.com/photo-1503376780353-7e6692767b70"
    title="Cars"
  />

  <ImageCard
    src="https://images.unsplash.com/photo-1558981806-ec527fa84c39"
    title="Bikes"
  />


</div>
      
      <div className="form-section">
        <ContactForm />
      </div>

      <h2 style={{ marginTop: "40px" }}>Services</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "20px"
        }}
      >
        {data.map((item) => (
          <DataCard key={item.id} item={item} />
        ))}
      </div>

    </div>
  );
}