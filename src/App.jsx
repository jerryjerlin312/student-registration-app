import { useState } from "react";

export default function App() {
  const [form, setForm] = useState({ name: "", email: "", course: "" });
  const [students, setStudents] = useState([]);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setStudents([...students, form]);
    setForm({ name: "", email: "", course: "" });
  };

  return (
    <div style={{ maxWidth: 400, margin: "40px auto" }}>
      <h1>Student Registration</h1>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" value={form.name} onChange={handleChange} required />
        <br /><br />
        <input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} required />
        <br /><br />
        <input name="course" placeholder="Course" value={form.course} onChange={handleChange} required />
        <br /><br />
        <button type="submit">Register</button>
      </form>

      <h2>Registered Students</h2>
      <ul>
        {students.map((s, i) => (
          <li key={i}>{s.name} - {s.email} - {s.course}</li>
        ))}
      </ul>
    </div>
  );
}