"use client";

import { useReducer, useEffect } from "react";
import ImageCard from "./components/ImageCard";
import ContactForm from "./forms/ContactForm";
import DataCard from "./components/DataCard";
import data from "./data/sampleData.json";

// reducer
function reducer(state, action) {
  switch (action.type) {
    case "SET":
      return action.payload;

    case "ADD":
      return [...state, action.payload];

    case "REMOVE":
      return state.filter(item => item.id !== action.payload);

    default:
      return state;
  }
}

export default function Home() {
  const [items, dispatch] = useReducer(reducer, []);

  // simulate loading
  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: "SET", payload: data });
    }, 1000);
  }, []);


  return (
    <div className="home-container">
      <h1>Dashboard</h1>

      {/* IMAGE SECTION */}
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

      {/* DATA SECTION */}
      <div className="grid">
        {items.length === 0 ? (
          <p>Loading...</p>
        ) : (
          items.map((item) => (
            <DataCard key={item.id} item={item} />
          ))
        )}
      </div>

      {/* ACTION */}
      <button
        onClick={() =>
          dispatch({
            type: "ADD",
            payload: { id: Date.now(), name: "New Vehicle" }
          })
        }
      >
        Add Vehicle
      </button>

      {/* FORM */}
      <ContactForm />
    </div>
    
  );
}
