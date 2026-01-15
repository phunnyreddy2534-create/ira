"use client";

import { motion } from "framer-motion";

interface Props {
  params: { id: string };
}

export default function ProjectPreview({ params }: Props) {
  return (
    <main className="container">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Project Preview
      </motion.h1>

      <p style={{ marginTop: "10px", color: "#9ca3af" }}>
        Project ID: {params.id}
      </p>

      <motion.ul
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        style={{ marginTop: "20px", lineHeight: "1.8" }}
      >
        <li>✔ Full Source Code</li>
        <li>✔ Documentation</li>
        <li>✔ Viva Q&A</li>
        <li>✔ Setup Guide</li>
      </motion.ul>

      <motion.button
        whileHover={{ scale: 1.05 }}
        style={{
          marginTop: "24px",
          padding: "12px 22px",
          background: "#22c55e",
          border: "none",
          borderRadius: "8px",
          fontSize: "16px",
          cursor: "pointer",
          color: "#000",
        }}
      >
        Buy & Download
      </motion.button>
    </main>
  );
}
