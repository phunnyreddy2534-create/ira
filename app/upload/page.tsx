"use client";

import { supabase } from "../../lib/supabaseClient";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function UploadPage() {
  const [role, setRole] = useState<"admin" | "user" | null>(null);
  const router = useRouter();

  useEffect(() => {
    const load = async () => {
      const { data } = await supabase.auth.getSession();
      const user = data.session?.user;

      if (!user) {
        router.replace("/auth/login");
        return;
      }

      const { data: profile } = await supabase
        .from("profiles")
        .select("role")
        .eq("id", user.id)
        .single();

      setRole(profile?.role === "admin" ? "admin" : "user");
    };

    load();
  }, [router]);

  if (!role) return null;

  return (
    <main className="container" style={{ maxWidth: "600px" }}>
      <h1>{role === "admin" ? "Admin Upload Project" : "Submit Your Project"}</h1>

      <p style={{ color: "#9ca3af", marginTop: "8px" }}>
        {role === "admin"
          ? "Projects publish instantly."
          : "Projects require admin approval."}
      </p>

      <form
        style={{
          marginTop: "20px",
          display: "flex",
          flexDirection: "column",
          gap: "14px",
        }}
      >
        <input type="text" placeholder="Project Title" required />
        <textarea placeholder="Project Description" required />
        <input type="text" placeholder="Price (₹)" />
        <input type="file" />

        <button className="btn" type="submit">
          {role === "admin" ? "Publish Project" : "Submit for Review"}
        </button>
      </form>
    </main>
  );
}
