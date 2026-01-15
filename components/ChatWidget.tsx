"use client";

import { motion } from "framer-motion";

export default function ChatWidget() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        width: "300px",
        background: "#12121a",
        border: "1px solid #1f1f2e",
        borderRadius: "14px",
        padding: "14px",
        boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
      }}
    >
      <strong>IRA Assistant</strong>
      <p style={{ fontSize: "13px", color: "#9ca3af", marginTop: "6px" }}>
        Ask about projects, pricing, or uploads.
      </p>

      <div
        style={{
          marginTop: "10px",
          height: "80px",
          background: "#0b0b0f",
          borderRadius: "8px",
          padding: "8px",
          fontSize: "13px",
          color: "#6b7280",
        }}
      >
        AI assistant coming soon…
      </div>
    </motion.div>
  );
}
