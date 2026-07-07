import { redirect } from "next/navigation";
import { getSecret } from "@/lib/secret";

export default function Home() {
  // In development, jump straight to the experience so `npm run dev` just works.
  if (process.env.NODE_ENV !== "production") {
    redirect(`/${getSecret()}`);
  }
  // In production, the bare domain is a quiet decoy — the real page is the secret link.
  return (
    <main className="night-sky flex min-h-screen items-center justify-center">
      <p className="text-3xl text-[var(--star)]/30">🌙</p>
    </main>
  );
}
