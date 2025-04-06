import { pendingCampaigns, payoutQueue } from '../lib/admin';

export default function Admin() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">🛠 Admin Console</h1>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">📋 Pending Campaigns</h2>
        <div className="space-y-2">
          {pendingCampaigns.map((c) => (
            <div key={c.id} className="border p-3 rounded-md flex justify-between items-center">
              <div>
                <p className="font-medium">{c.title}</p>
                <p className="text-sm text-gray-500">By {c.creator} — submitted {c.submittedAt}</p>
              </div>
              <button className="text-sm bg-green-600 text-white px-3 py-1 rounded-md">Approve</button>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-3">💸 Upcoming Payouts</h2>
        <div className="space-y-2">
          {payoutQueue.map((p) => (
            <div key={p.id} className="border p-3 rounded-md flex justify-between items-center">
              <p>{p.recipient} to receive <strong>${p.amount}</strong> from <em>{p.campaign}</em></p>
              <span className="text-sm text-gray-500">Due {p.due}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
