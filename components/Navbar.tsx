"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        padding: "16px 24px",
        borderBottom: "1px solid #1f1f2e",
        backdropFilter: "blur(10px)",
        background: "rgba(11,11,15,0.7)",
        display: "flex",
        gap: "20px",
        alignItems: "center",
      }}
    >
      <Link href="/" style={{ fontWeight: 800, fontSize: "18px" }}>
        IRA
      </Link>

      <div style={{ display: "flex", gap: "14px" }}>
        <Link href="/projects">Projects</Link>
        <Link href="/upload">Upload</Link>
        <Link href="/auth/login">Login</Link>
      </div>
    </motion.nav>
  );
}
