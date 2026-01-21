import { notFound } from "next/navigation";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function generateMetadata({ params }: any) {
  const { data } = await supabase
    .from("news")
    .select("title,summary")
    .eq("slug", params.slug)
    .single();

  if (!data) return {};

  return {
    title: data.title + " | IRA News",
    description: data.summary,
  };
}

export default async function NewsArticle({ params }: any) {
  const { data } = await supabase
    .from("news")
    .select("*")
    .eq("slug", params.slug)
    .single();

  if (!data) return notFound();

  return (
    <main className="container">
      <h1>{data.title}</h1>
      <p style={{ color: "#9ca3af" }}>{data.source}</p>

      {data.image_url && (
        <img src={data.image_url} alt={data.title} />
      )}

      <p>{data.content || data.summary}</p>

      <a href={data.source_url} target="_blank">
        Read original source
      </a>
    </main>
  );
}
