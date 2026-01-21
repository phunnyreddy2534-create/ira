import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

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
          <a
            key={n.id}
            href={`/news/${n.slug}`}
            className="card"
          >
            <strong>{n.title}</strong>
            <p style={{ color: "#9ca3af", marginTop: 6 }}>
              {n.source}
            </p>
          </a>
        ))}
      </div>
    </main>
  );
}
