"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Chat Icon */}
      <button
        onClick={() => setOpen(true)}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          width: "56px",
          height: "56px",
          borderRadius: "50%",
          background: "#6d5dfc",
          border: "none",
          color: "#fff",
          fontSize: "22px",
          cursor: "pointer",
          zIndex: 1000,
        }}
      >
        💬
      </button>

      {/* Modal */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              onClick={() => setOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{
                position: "fixed",
                inset: 0,
                backdropFilter: "blur(8px)",
                background: "rgba(0,0,0,0.4)",
                zIndex: 1000,
              }}
            />

            {/* Chat Card */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              style={{
                position: "fixed",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "320px",
                background: "rgba(18,18,26,0.6)",
                border: "1px solid #1f1f2e",
                borderRadius: "16px",
                padding: "16px",
                zIndex: 1001,
                color: "#fff",
              }}
            >
              <strong>IRA AI Assistant</strong>
              <p style={{ fontSize: "13px", color: "#9ca3af" }}>
                Ask about projects, pricing, uploads
              </p>

              <div
                style={{
                  marginTop: "12px",
                  height: "120px",
                  background: "rgba(0,0,0,0.4)",
                  borderRadius: "8px",
                  padding: "8px",
                  fontSize: "13px",
                }}
              >
                AI coming soon…
              </div>

              <button
                onClick={() => setOpen(false)}
                className="btn"
                style={{ marginTop: "12px", width: "100%" }}
              >
                Close
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
