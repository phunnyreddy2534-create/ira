"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function ProjectCard({ project }: any) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="card"
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "10px",
        }}
      >
        <h3 style={{ fontSize: "20px" }}>{project.title}</h3>
        <span
          style={{
            background: "rgba(109,93,252,0.15)",
            color: "#6d5dfc",
            padding: "4px 10px",
            borderRadius: "999px",
            fontSize: "13px",
            fontWeight: 600,
          }}
        >
          {project.price}
        </span>
      </div>

      <p style={{ color: "#b5b5b5", fontSize: "14px" }}>
        {project.description}
      </p>

      <div
        style={{
          marginTop: "14px",
          fontSize: "12px",
          color: "#9ca3af",
        }}
      >
        ✔ Verified Code · ✔ Documentation · ✔ Viva
      </div>

      <div style={{ marginTop: "18px" }}>
        <Link href={`/projects/${project.id}`}>
          <button className="btn">View Project</button>
        </Link>
      </div>
    </motion.div>
  );
}
