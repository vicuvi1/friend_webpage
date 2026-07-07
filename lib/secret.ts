/* The "unguessable link". The whole site lives at  /<secret>.
 * Set SITE_SECRET in your env (and in Vercel) to your own long random slug.
 * The default below is only for local development. */
export function getSecret(): string {
  return process.env.SITE_SECRET || "aurora-quiet-river-8f3k2j9x";
}
