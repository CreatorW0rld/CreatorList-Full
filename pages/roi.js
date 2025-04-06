import { funderContributions } from '../lib/funder';

export default function ROI() {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">📈 My ROI Dashboard</h1>
      {funderContributions.length === 0 ? (
        <p>No contributions yet. Fund a campaign to start earning ROI.</p>
      ) : (
        <div className="space-y-4">
          {funderContributions.map((item) => (
            <div key={item.id} className="border p-4 rounded-xl shadow bg-white">
              <h2 className="text-xl font-semibold">{item.campaignTitle}</h2>
              <p className="text-sm text-gray-500">You funded: ${item.amount}</p>
              <p className="text-sm text-gray-600">Est. return: <strong>${item.estimatedReturn}</strong> ({item.multiplier}x)</p>
              <p className="text-xs text-gray-400">Payout: {item.payoutDate}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
