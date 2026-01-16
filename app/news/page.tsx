import { supabase } from "../../lib/supabaseClient";

export default async function NewsPage() {
  const { data } = await supabase
    .from("news")
    .select("*")
    .eq("is_active", true)
    .order("created_at", { ascending: false });

  return (
    <main className="container">
      <h1>Student News & Opportunities</h1>

      <div className="grid" style={{ marginTop: 24 }}>
        {data?.map((n) => (
          <div key={n.id} className="card">
            {n.title}
          </div>
        ))}
      </div>
    </main>
  );
}
