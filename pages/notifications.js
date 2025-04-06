import { notifications } from '../lib/notifications';

export default function Notifications() {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">🔔 Notifications</h1>
      <div className="space-y-4">
        {notifications.map((note) => (
          <div key={note.id} className="p-4 bg-gray-50 border-l-4 border-blue-400 rounded shadow-sm">
            <p className="text-sm">{note.message}</p>
            <p className="text-xs text-gray-400 mt-1">{note.timestamp}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
