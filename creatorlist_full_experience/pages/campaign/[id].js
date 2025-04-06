import { useRouter } from "next/router";

export default function CampaignPage() {
  const { id } = useRouter().query;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Campaign ID: {id}</h1>
      <p>This is the campaign details and funding page.</p>
    </div>
  );
}
