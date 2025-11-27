import type { Message } from "../App";


interface NPC {
    name: string;
    personality: string;
    avatar: string;
}

// global.d.ts



export async function sendNPCMessage(npc: NPC, memory: Message[], userMsg: string) {
    const prompt = `
    You are ${npc.name}, a ${npc.personality} NPC. Respond briefly to: ${userMsg}
    Memory: ${memory.map(m => `${m.role}: ${m.text}`).join('\n')}
    `;
    const AI_KEY = "sk-XXXXXXXXXX"; // Thay thế bằng cách lấy từ biến môi trường hoặc cấu hình an toàn khác
    const res = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + AI_KEY // ✅ TypeScript không còn báo lỗi
    },
    body: JSON.stringify({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }]
    })
  });

  const data = await res.json();
  return data.choices[0].message.content;
}
