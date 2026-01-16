"use client";

import { supabase } from "../../lib/supabaseClient";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function AdminPage() {
  const [projects, setProjects] = useState<any[]>([]);

  useEffect(() => {
    load();
  }, []);

  const load = async () => {
    const { data } = await supabase
      .from("projects")
      .select("*")
      .order("created_at", { ascending: false });

    setProjects(data || []);
  };

  const approve = async (id: string) => {
    await supabase.from("projects").update({ status: "approved" }).eq("id", id);
    load();
  };

  const remove = async (id: string) => {
    await supabase.from("projects").delete().eq("id", id);
    load();
  };

  return (
    <main className="container">
      <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        Admin Dashboard
      </motion.h1>

      {projects.map((p) => (
        <div key={p.id} className="card" style={{ marginTop: 16 }}>
          <strong>{p.title}</strong>
          <p>{p.description}</p>
          <p>Status: {p.status}</p>

          <div style={{ marginTop: 10, display: "flex", gap: 10 }}>
            {p.status !== "approved" && (
              <button className="btn" onClick={() => approve(p.id)}>
                Approve
              </button>
            )}
            <button className="btn" onClick={() => remove(p.id)}>
              Delete
            </button>
          </div>
        </div>
      ))}
    </main>
  );
}
