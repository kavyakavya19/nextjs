import ImageCard from "./components/ImageCard";
import ContactForm from "./forms/ContactForm";

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
    </div>
  );
}