// Basic React template for NPC Chat Adventure
// File: App.jsx
import { useState } from 'react';
import ChatWindow from './components/ChatWindow';
import NPCBubble from './components/NPCBubble';
import InputBox from './components/InputBox';
import { sendNPCMessage } from './ai/sendMessage';
import npcList from './npc/npcList';

export type Message = {
  role: 'user' | 'npc';
  text: string;
};


export default function App() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentNPC] = useState(npcList[0]);


  async function handleSend(text: string) {
    const userMsg: Message = { role: 'user', text };
    setMessages(prev => [...prev, userMsg]);

    const aiReply = await sendNPCMessage(currentNPC, messages, text);
    const npcMsg: Message = { role: 'npc', text: aiReply };
    setMessages(prev => [...prev, npcMsg]);
  }

  return (
    <div className="w-full h-screen bg-gray-900 text-white flex flex-col p-4">
    <h1 className="text-xl mb-2 font-bold">NPC Chat Adventure</h1>
    <NPCBubble npc={currentNPC} />
    <ChatWindow messages={messages} />
    <InputBox onSend={handleSend} />
    </div>
  );
}