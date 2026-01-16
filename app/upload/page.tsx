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

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const title = e.target.title.value;
    const description = e.target.description.value;
    const price = e.target.price.value;

    const { data } = await supabase.auth.getSession();
    const user = data.session?.user;

    await supabase.from("projects").insert({
      title,
      description,
      price,
      status: role === "admin" ? "approved" : "pending",
      created_by: user?.id,
    });

    router.push("/projects");
  };

  return (
    <main className="container" style={{ maxWidth: "600px" }}>
      <h1>{role === "admin" ? "Admin Upload Project" : "Submit Your Project"}</h1>

      <form
        onSubmit={handleSubmit}
        style={{
          marginTop: "20px",
          display: "flex",
          flexDirection: "column",
          gap: "14px",
        }}
      >
        <input name="title" placeholder="Project Title" required />
        <textarea name="description" placeholder="Project Description" required />
        <input name="price" placeholder="Price (₹)" />
        <button className="btn">
          {role === "admin" ? "Publish Project" : "Submit for Review"}
        </button>
      </form>
    </main>
  );
}
