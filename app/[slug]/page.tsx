import { notFound } from "next/navigation";
import Experience from "@/components/Experience";
import { getSecret } from "@/lib/secret";

export default async function SecretPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (slug !== getSecret()) notFound();
  return <Experience />;
}
