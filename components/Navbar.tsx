"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      style={{
        padding: "20px",
        borderBottom: "1px solid #1f1f2e",
        display: "flex",
        gap: "16px",
        alignItems: "center",
      }}
    >
      <Link href="/" style={{ fontWeight: 700 }}>
        IRA
      </Link>
      <Link href="/projects">Projects</Link>
      <Link href="/upload">Upload</Link>
      <Link href="/auth/login">Login</Link>
    </motion.nav>
  );
}
