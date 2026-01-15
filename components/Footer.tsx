"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
      style={{
        padding: "24px",
        textAlign: "center",
        color: "#9ca3af",
        fontSize: "14px",
        borderTop: "1px solid #1f1f2e",
        marginTop: "40px",
      }}
    >
      © {new Date().getFullYear()} IRA · Build · Learn · Earn
    </motion.footer>
  );
}
