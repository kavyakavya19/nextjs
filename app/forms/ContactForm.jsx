"use client";
import { useState } from "react";
import FormInput from "../components/FormInput";
import { handleChange, handleSubmit } from "./formHandler";
import styles from "../styles/form.module.css";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
  });

  return (
    <form
      className={styles.form}
      onSubmit={(e) => handleSubmit(e, form)}
    >
      <h2>Contact Us</h2>
<FormInput
  label="Name"
  type="text"
  name="name"   
  value={form.name}
  onChange={(e) => handleChange(e, setForm)}
/>

<FormInput
  label="Email"
  type="email"
  name="email"   
  value={form.email}
  onChange={(e) => handleChange(e, setForm)}
/>

      <button className={styles.btn}>Submit</button>
    </form>
  );
}