"use client";

import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: ""
  });

  const [users, setUsers] = useState([]);

  // handle input
  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  }

  // handle submit
  function handleSubmit(e) {
    e.preventDefault(); // 🔥 VERY IMPORTANT

    if (!form.name || !form.email) {
      alert("Fill all fields");
      return;
    }

    setUsers([...users, form]);

    // reset form
    setForm({ name: "", email: "" });
  }

  return (
    <div>
      <h2>Contact</h2>

      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
        />

        <input
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
        />

        <button type="submit">Submit</button>
      </form>

      {/* SHOW USERS */}
      <h3>Users</h3>
      {users.length === 0 ? (
        <p>No users yet</p>
      ) : (
        users.map((u, i) => (
          <p key={i}>
            {u.name} - {u.email}
          </p>
        ))
      )}
    </div>
  );
}