"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();

  const [user, setUser] = useState<any>(null);
  const [role, setRole] = useState<string | null>(null);

  useEffect(() => {
    const loadUser = async () => {
      const { data } = await supabase.auth.getUser();
      const currentUser = data.user;
      setUser(currentUser);

      if (currentUser) {
        const { data: profile } = await supabase
          .from("profiles")
          .select("role")
          .eq("id", currentUser.id)
          .single();

        setRole(profile?.role || "user");
      } else {
        setRole(null);
      }
    };

    loadUser();

    const { data: listener } = supabase.auth.onAuthStateChange(
      async (_event, session) => {
        setUser(session?.user || null);

        if (session?.user) {
          const { data: profile } = await supabase
            .from("profiles")
            .select("role")
            .eq("id", session.user.id)
            .single();

          setRole(profile?.role || "user");
        } else {
          setRole(null);
        }
      }
    );

    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  const isAdmin = role === "admin";

  const NavLink = ({ href, label }: { href: string; label: string }) => {
    const active = pathname === href;
    return (
      <Link
        href={href}
        style={{
          position: "relative",
          fontWeight: active ? 600 : 400,
          color: active ? "#6d5dfc" : "#ffffff",
        }}
      >
        {label}
        {active && (
          <motion.span
            layoutId="nav-underline"
            style={{
              position: "absolute",
              bottom: -6,
              left: 0,
              right: 0,
              height: 2,
              background: "#6d5dfc",
              borderRadius: 2,
            }}
          />
        )}
      </Link>
    );
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/");
  };

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        padding: "16px 24px",
        display: "flex",
        gap: "24px",
        alignItems: "center",
        borderBottom: "1px solid #1f1f2e",
        backdropFilter: "blur(10px)",
        background: "rgba(11,11,15,0.75)",
      }}
    >
      <Link href="/" style={{ fontWeight: 800, fontSize: "18px" }}>
        IRA
      </Link>

      <div style={{ display: "flex", gap: "18px", marginLeft: "auto" }}>
        <NavLink href="/projects" label="Projects" />
        <NavLink href="/news" label="News" />

        {user && <NavLink href="/upload" label="Upload" />}
        {isAdmin && <NavLink href="/admin" label="Admin" />}

        {!user && (
          <>
            <NavLink href="/auth/login" label="Login" />
            <NavLink href="/auth/signup" label="Sign Up" />
          </>
        )}

        {user && (
          <>
            <NavLink href="/profile" label="Profile" />
            <button
              onClick={handleLogout}
              style={{
                background: "none",
                border: "none",
                color: "#9ca3af",
                cursor: "pointer",
              }}
            >
              Logout
            </button>
          </>
        )}
      </div>
    </motion.nav>
  );
}
