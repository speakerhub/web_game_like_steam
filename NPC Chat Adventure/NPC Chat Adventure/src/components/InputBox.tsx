import { useState } from "react";

export default function InputBox({ onSend }: { onSend: (text: string) => void }) {
    const [text, setText] = useState('');


    function send() {
    if (!text.trim()) return;
    onSend(text);
    setText('');
    }


    return (
    <div className="flex gap-2">
    <input
    className="flex-1 px-3 py-2 rounded bg-gray-700"
    value={text}
    onChange={(e) => setText(e.target.value)}
    placeholder="Say something to the NPC..."
    />
    <button onClick={send} className="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700">Send</button>
    </div>
    );
}