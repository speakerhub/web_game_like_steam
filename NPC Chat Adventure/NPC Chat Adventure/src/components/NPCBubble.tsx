
function NPCBubble({ npc }: { npc: { name: string; personality: string; avatar: string } }) {
    return (
        <div className="flex items-center gap-3 mb-3">
            <img src={npc.avatar} className="w-16 h-16 rounded-full" />
            <div>
                <p className="text-lg font-bold">{npc.name}</p>
                <p className="text-gray-400">{npc.personality}</p>
            </div>
        </div>
    );
}

export default NPCBubble;