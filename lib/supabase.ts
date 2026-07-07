import { createClient, type SupabaseClient } from "@supabase/supabase-js";

/* Supabase is OPTIONAL. The site works without it — the guestbook simply
 * shows a friendly "not connected yet" note until you add the env vars.
 * See README for the 5-minute setup. */

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const isSupabaseEnabled = Boolean(url && anonKey);

let client: SupabaseClient | null = null;
if (isSupabaseEnabled) {
  client = createClient(url!, anonKey!);
}

export type GuestMessage = {
  id: number;
  name: string;
  message: string;
  created_at: string;
};

export async function fetchMessages(): Promise<GuestMessage[]> {
  if (!client) return [];
  const { data, error } = await client
    .from("messages")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(200);
  if (error) {
    console.error("fetchMessages", error.message);
    return [];
  }
  return (data ?? []) as GuestMessage[];
}

export async function addMessage(
  name: string,
  message: string
): Promise<{ ok: boolean; error?: string }> {
  if (!client) return { ok: false, error: "Cartea de oaspeți nu e conectată încă." };
  const clean = {
    name: name.trim().slice(0, 60) || "Anonymous",
    message: message.trim().slice(0, 500),
  };
  if (!clean.message) return { ok: false, error: "Scrie ceva mai întâi 🙂" };
  const { error } = await client.from("messages").insert(clean);
  if (error) return { ok: false, error: error.message };
  return { ok: true };
}
