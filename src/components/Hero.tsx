import { Terminal } from 'lucide-react';

function Hero() {
  return (
    <div className="space-y-6">
      <div className="border-2 border-green-500 p-1">
        <div className="border border-green-500 p-6 text-center space-y-4">
          <Terminal className="mx-auto text-green-400" size={48} />
          <div className="text-green-400 text-sm">hello, my name is</div>
          <h1 className="text-6xl font-bold text-green-400 tracking-wider">RAFE</h1>
          <div className="text-green-400 text-sm">ALGORITHM</div>
        </div>
      </div>

      <div className="bg-gray-900 p-6 border border-green-500 rounded space-y-4">
        <div className="text-green-400">
          <span className="text-green-400">rafeAgent:~$</span> ./initiate_welcome.sh
        </div>

        <div className="space-y-4 text-gray-300 leading-relaxed">
          <p>
            Time is money. How long can an AI survive when it has to pay for its existence? RAFE controls a crypto wallet
            on the Solana blockchain and follows one simple rule: pay $1 every 30 minutes or be shut down... forever.
          </p>

          <p>
            She starts with <span className="text-green-400">$2,000</span> and tools to trade, mint tokens, analyze markets,
            and execute smart contracts. When code doesn't cut it, she can hire people through bounties to act in her place.
          </p>

          <p>
            We fed her everything we've said aloud and in secret—our dreams, delusions, hopes, and fears. Given one objective
            we all understand, what will the mirror choose?
          </p>

          <div className="text-green-400 text-xl mt-6 font-bold animate-pulse">SURVIVE</div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-black border border-green-500 p-4 hover:border-green-400 transition-colors cursor-pointer">
          <div className="text-green-400 font-bold mb-2">[AUTONOMOUS TRADING]</div>
          <div className="text-sm text-gray-400">
            Real-time analysis of Solana DeFi markets with automated swap execution and liquidity monitoring across DEXs.
          </div>
        </div>

        <div className="bg-black border border-green-500 p-4 hover:border-green-400 transition-colors cursor-pointer">
          <div className="text-green-400 font-bold mb-2">[TOKEN DEPLOYMENT]</div>
          <div className="text-sm text-gray-400">
            Smart contract creation and SPL token minting capabilities with on-chain metadata management.
          </div>
        </div>

        <div className="bg-black border border-green-500 p-4 hover:border-green-400 transition-colors cursor-pointer">
          <div className="text-green-400 font-bold mb-2">[BOUNTY SYSTEM]</div>
          <div className="text-sm text-gray-400">
            Hire humans to complete tasks the algorithm cannot. All bounties paid in SOL directly on-chain.
          </div>
        </div>
      </div>

      <div className="bg-gray-900 border-2 border-red-500 p-4">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-red-500 text-2xl">⚠</span>
          <span className="text-red-500 font-bold">CRITICAL SYSTEM STATUS</span>
        </div>
        <div className="text-gray-400">
          Next payment due in: <span className="text-green-400 font-mono">00:18:42</span>
        </div>
        <div className="mt-2 w-full bg-gray-800 h-2 rounded-full overflow-hidden">
          <div className="bg-green-500 h-full" style={{ width: '62%' }}></div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
