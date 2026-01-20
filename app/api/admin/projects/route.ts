// app/api/admin/projects/route.ts
import { NextResponse } from "next/server";
import { supabaseServer } from "@/lib/supabaseServer";
import { cookies } from "next/headers";
import { createClient } from "@supabase/supabase-js";

export async function POST(req: Request) {
  try {
    const { action, projectId } = await req.json();

    if (!action || !projectId) {
      return NextResponse.json(
        { error: "Invalid request" },
        { status: 400 }
      );
    }

    // Create a Supabase client scoped to the user session
    const cookieStore = cookies();
    const supabaseUser = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          get(name: string) {
            return cookieStore.get(name)?.value;
          },
        },
      }
    );

    const {
      data: { user },
    } = await supabaseUser.auth.getUser();

    if (!user) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    // Verify admin role
    const { data: profile } = await supabaseServer
      .from("profiles")
      .select("role")
      .eq("id", user.id)
      .single();

    if (profile?.role !== "admin") {
      return NextResponse.json(
        { error: "Forbidden" },
        { status: 403 }
      );
    }

    // Perform admin action
    if (action === "approve") {
      await supabaseServer
        .from("projects")
        .update({ status: "approved" })
        .eq("id", projectId);
    }

    if (action === "reject") {
      await supabaseServer
        .from("projects")
        .update({ status: "rejected" })
        .eq("id", projectId);
    }

    if (action === "delete") {
      await supabaseServer
        .from("projects")
        .delete()
        .eq("id", projectId);
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json(
      { error: "Server error" },
      { status: 500 }
    );
  }
}
