"use client";

import { motion } from "framer-motion";
import ProjectCard from "../../components/ProjectCard";
import { useEffect, useState } from "react";

const projects = [
  {
    id: "1",
    title: "AI Phishing Detection",
    description: "Multi-agent ML-based phishing & smishing detection system",
    price: "₹999",
  },
  {
    id: "2",
    title: "Student Attendance System",
    description: "Smart attendance using face recognition",
    price: "₹799",
  },
];

export default function ProjectsPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 700);
    return () => clearTimeout(t);
  }, []);

  return (
    <main className="container">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        style={{ marginBottom: "20px", fontSize: "28px" }}
      >
        Project Marketplace
      </motion.h1>

      <div className="grid">
        {loading
          ? Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="card"
                style={{ height: "180px", opacity: 0.6 }}
              />
            ))
          : projects.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
      </div>
    </main>
  );
}
