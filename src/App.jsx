import React, { useState } from "react";
import { FaFacebook, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";
import emailjs from "emailjs-com";

export default function App() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [success, setSuccess] = useState(false);
  const [filter, setFilter] = useState("All");

  const projects = [
    { title: "Logistics App", category: "Logistics" },
    { title: "Web Portfolio", category: "Web" },
    { title: "Warehouse Tracker", category: "Logistics" }
  ];
  const filteredProjects = filter === "All" ? projects : projects.filter(p => p.category === filter);

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send("service_9v51tgf", "template_ol3r2oc", formData, "8E7w2GqG16qa5loyT")
      .then(() => {
        setSuccess(true);
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setSuccess(false), 3000);
      }).catch(console.error);
  };

  return (
    <div className="min-h-screen p-6 text-gray-800 font-sans">
      <header className="text-center mb-10">
        <img src="/profile.jpg" alt="Profile" className="mx-auto w-28 h-28 rounded-full" />
        <h1 className="text-3xl font-bold mt-4">Patu Kujo Emmanuel</h1>
        <p className="text-orange-600">Computer Engineer & Logistics Professional</p>
        <div className="flex justify-center gap-4 mt-3 text-xl text-orange-500">
          <a href="https://facebook.com/pkujo"><FaFacebook /></a>
          <a href="https://linkedin.com/in/kujo-patu-a2a06075/"><FaLinkedin /></a>
          <a href="https://x.com/kujolamba1"><FaTwitter /></a>
          <a href="https://instagram.com/emmy.pat/"><FaInstagram /></a>
        </div>
        <a href="/resume.pdf" download className="mt-4 inline-block bg-orange-600 text-white px-4 py-2 rounded">Download Resume</a>
      </header>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Services</h2>
        <ul className="list-disc pl-6">
          <li>Supply & Distribution</li>
          <li>Logistics Planning</li>
          <li>Web Development</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Projects</h2>
        <div className="flex gap-2 mb-4">
          {["All", "Logistics", "Web"].map(cat => (
            <button key={cat} onClick={() => setFilter(cat)} className={/`px-3 py-1 border rounded /${filter === cat ? "bg-orange-600 text-white" : "text-orange-600"}/`}>{cat}</button>
          ))}
        </div>
        <ul className="space-y-2">
          {filteredProjects.map(p => (
            <li key={p.title} className="border p-3 rounded">{p.title} ({p.category})</li>
          ))}
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Testimonials</h2>
        <blockquote className="italic border-l-4 pl-4 text-gray-600">"Kujo delivers excellent results with precision and care." - Happy Client</blockquote>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Blog</h2>
        <article className="border p-4 rounded">
          <h3 className="text-lg font-semibold">How I Built This Site</h3>
          <p className="text-sm text-gray-700">An overview of the tools and logic behind my portfolio.</p>
        </article>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Contact</h2>
        <form onSubmit={handleSubmit} className="space-y-3 max-w-lg">
          <input name="name" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} placeholder="Name" className="w-full p-2 border rounded" required />
          <input name="email" type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} placeholder="Email" className="w-full p-2 border rounded" required />
          <textarea name="message" value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} placeholder="Message" rows="4" className="w-full p-2 border rounded" required></textarea>
          <button type="submit" className="bg-orange-600 text-white py-2 px-4 rounded">Send</button>
          {success && <p className="text-green-600 mt-2">✅ Message sent successfully!</p>}
        </form>
      </section>
    </div>
  );
}
