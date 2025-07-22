import React, { useState } from "react";
import { FaFacebook, FaLinkedin, FaInstagram, FaTwitter, FaMoon, FaSun } from "react-icons/fa";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

export default function App() {
  const [dark, setDark] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [success, setSuccess] = useState(false);
  const [filter, setFilter] = useState("All");

  const projects = [
    { title: "Logistics Dashboard", category: "Logistics" },
    { title: "Personal Portfolio", category: "Web" },
    { title: "Warehouse Monitor", category: "Logistics" },
    { title: "Blog System", category: "Web" },
  ];
  const testimonials = [
    "Kujo is one of the most reliable professionals I’ve worked with.",
    "His logistics planning saved us a fortune!",
    "The web solutions delivered exceeded expectations!"
  ];
  const blogs = [
    { title: "Building with Tailwind", summary: "Tips for efficient design." },
    { title: "React Contact Forms", summary: "Handling forms and EmailJS." },
    { title: "Warehouse Management Tools", summary: "Modern logistics tech." }
    { title: "Inventory Tips", summary: "How to keep stock organized." },
    { title: "Top 5 React Hooks", summary: "Essential hooks in modern React." },
    { title: "Shipping Solutions", summary: "Deliver smarter and faster." },
    { title: "AI in Logistics", summary: "How AI is transforming supply chains." }
  ];

  const gallery = ["/gallery1.jpg", "/gallery2.jpg", "/gallery3.jpg"];
  const filtered = filter === "All" ? projects : projects.filter(p => p.category === filter);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.send("service_9v51tgf", "template_ol3r2oc", formData, "8E7w2GqG16qa5loyT")
      .then(() => {
        setSuccess(true);
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setSuccess(false), 3000);
      }).catch(console.error);
  };

  return (
    <div className={dark ? "dark" : ""}>
      <div className="min-h-screen px-4 py-8 bg-white text-gray-800 dark:bg-gray-900 dark:text-gray-200 transition-all duration-300">

        {/* Toggle */}
        <div className="flex justify-end mb-4">
          <button onClick={() => setDark(!dark)} title="Toggle Theme">
            {dark ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-gray-800" />}
          </button>
        </div>

        {/* Header */}
        <header className="text-center mb-12">
          <motion.img src="/profile.jpg" alt="Profile" className="w-28 h-28 mx-auto rounded-full" initial={{ scale: 0 }} animate={{ scale: 1 }} />
          <h1 className="text-3xl font-bold mt-3">Patu Kujo Emmanuel</h1>
          <p className="text-orange-500">Computer Engineer & Logistics Professional</p>
          <div className="flex justify-center gap-4 mt-3 text-xl text-orange-500">
            <a href="https://facebook.com/pkujo"><FaFacebook /></a>
            <a href="https://linkedin.com/in/kujo-patu-a2a06075/"><FaLinkedin /></a>
            <a href="https://x.com/kujolamba1"><FaTwitter /></a>
            <a href="https://instagram.com/emmy.pat/"><FaInstagram /></a>
          </div>
          <a href="/resume.pdf" download className="mt-4 inline-block bg-orange-600 text-white px-4 py-2 rounded">Download Resume</a>
        </header>

        {/* Hire Me */}
        <section className="mb-12 text-center bg-orange-100 dark:bg-gray-800 p-6 rounded">
          <h2 className="text-2xl font-bold">Looking for New Opportunities</h2>
          <p className="mt-2">Open to roles in Logistics, Engineering, or Tech. Let’s work together!</p>
        </section>

        {/* Services */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">Services</h2>
          <ul className="list-disc pl-5">
            <li>General Supplies & Distribution</li>
            <li>Logistics & Warehouse Management</li>
            <li>Web Development</li>
            <li>IT Consulting</li>
            <li>Product Distribution</li>
            <li>Data Analytics & Dashboards</li>
          </ul>
        </section>

        {/* Projects */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">Projects</h2>
          <div className="flex gap-2 mb-4">
            {["All", "Logistics", "Web"].map(cat => (
              <button key={cat} onClick={() => setFilter(cat)} className={`px-3 py-1 rounded border ${filter === cat ? "bg-orange-600 text-white" : "text-orange-600"}`}>
                {cat}
              </button>
            ))}
          </div>
          <motion.div layout className="grid md:grid-cols-2 gap-4">
            {filtered.map((p, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="border rounded p-4">
                <h4 className="font-semibold">{p.title}</h4>
                <p className="text-sm text-gray-500 dark:text-gray-300">{p.category}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Gallery */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {gallery.map((img, i) => (
              <img key={i} src={img} alt={`Gallery ${i}`} className="rounded shadow" />
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">Testimonials</h2>
          <div className="space-y-3">
            {testimonials.map((quote, i) => (
              <motion.blockquote key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-4 border-l-4 italic bg-orange-50 dark:bg-gray-800">
                “{quote}”
              </motion.blockquote>
            ))}
          </div>
        </section>

        {/* Blog */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">Blog</h2>
          <div className="space-y-4">
            {blogs.map((post, i) => (
              <div key={i} className="border p-4 rounded bg-white dark:bg-gray-800">
                <h4 className="font-semibold">{post.title}</h4>
                <p className="text-sm">{post.summary}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Form */}
        <section className="mb-10 max-w-xl mx-auto">
          <h2 className="text-2xl font-semibold mb-2">Contact Me</h2>
          <form onSubmit={sendEmail} className="space-y-3">
            <input name="name" value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} placeholder="Your Name" className="w-full border rounded p-2" required />
            <input name="email" type="email" value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} placeholder="Your Email" className="w-full border rounded p-2" required />
            <textarea name="message" value={formData.message} onChange={e => setFormData({ ...formData, message: e.target.value })} placeholder="Your Message" rows="4" className="w-full border rounded p-2" required />
            <button type="submit" className="bg-orange-600 text-white px-4 py-2 rounded">Send Message</button>
            {success && <p className="text-green-600 mt-2">✅ Message sent successfully!</p>}
          </form>
        </section>
      </div>
    </div>
  );
}
