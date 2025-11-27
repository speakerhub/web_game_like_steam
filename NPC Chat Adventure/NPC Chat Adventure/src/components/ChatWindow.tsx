

export default function ChatWindow({ messages }: { messages: { role: string; text: string }[] }) {
    return (
    <div className="flex-1 overflow-y-auto bg-gray-800 p-3 rounded-lg mb-3">
    {messages.map((m, i) => (
    <div key={i} className={`my-2 ${m.role === 'user' ? 'text-right' : 'text-left'}`}>
    <span className="px-3 py-2 bg-gray-700 rounded-lg inline-block">{m.text}</span>
    </div>
    ))}
    </div>
    );
}