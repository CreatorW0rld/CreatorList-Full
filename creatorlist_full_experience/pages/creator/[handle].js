import { useRouter } from "next/router";

export default function CreatorPage() {
  const { handle } = useRouter().query;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Creator: {handle}</h1>
      <p>This is a public profile for the creator with links to their campaigns.</p>
    </div>
  );
}
