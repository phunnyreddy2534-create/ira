import { NextResponse } from "next/server";
import slugify from "slugify";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function GET() {
  try {
    const apiKey = process.env.NEWS_API_KEY!;
    const categories = [
      "technology",
      "business",
    ];

    for (const category of categories) {
      const res = await fetch(
        `https://newsapi.org/v2/top-headlines?category=${category}&language=en&pageSize=10&apiKey=${apiKey}`
      );

      const json = await res.json();
      const articles = json.articles || [];

      for (const article of articles) {
        if (!article.title || !article.url) continue;

        const slug = slugify(article.title, {
          lower: true,
          strict: true,
        });

        // Avoid duplicates
        const { data: exists } = await supabase
          .from("news")
          .select("id")
          .eq("slug", slug)
          .maybeSingle();

        if (exists) continue;

        await supabase.from("news").insert({
          title: article.title,
          slug,
          summary: article.description,
          content: article.content,
          source: article.source?.name || "NewsAPI",
          source_url: article.url,
          image_url: article.urlToImage,
          category: category,
          published_at: article.publishedAt,
          is_auto: true,
        });
      }
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json(
      { error: "News fetch failed" },
      { status: 500 }
    );
  }
}
