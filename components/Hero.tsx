"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section style={{ padding: "90px 20px", textAlign: "center" }}>
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{ fontSize: "56px", fontWeight: "bold" }}
      >
        IRA
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        style={{ fontSize: "22px", marginTop: "12px", color: "#cfcfcf" }}
      >
        Student Project Marketplace
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        style={{ marginTop: "18px", fontSize: "18px", color: "#9ca3af" }}
      >
        Build · Learn · Earn
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        style={{
          marginTop: "32px",
          display: "flex",
          gap: "14px",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <Link href="/projects">
          <button className="btn">Browse Projects</button>
        </Link>
        <Link href="/upload">
          <button className="btn">Upload Project</button>
        </Link>
      </motion.div>
    </section>
  );
}
