import { useState } from 'react';
import { Terminal, Activity, Trophy, HelpCircle } from 'lucide-react';
import Hero from './components/Hero';
import ActivityLog from './components/ActivityLog';
import Bounties from './components/Bounties';
import FAQ from './components/FAQ';

function App() {
  const [activeView, setActiveView] = useState<'home' | 'activity' | 'bounties' | 'faq'>('bounties');
  const [solBalance] = useState(2.847);

  return (
    <div className="min-h-screen bg-black text-green-400 font-mono p-4 md:p-8">
      <div className="max-w-7xl mx-auto border-4 border-green-500 rounded-lg overflow-hidden shadow-2xl">
        <div className="bg-gray-900 border-b-2 border-green-500 p-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex gap-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <span className="ml-4 text-gray-400 uppercase tracking-wider">Rafe Algorithm Agent</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-gray-400">Current SOL Balance:</span>
            <span className="text-green-400 font-bold">{solBalance.toFixed(3)} SOL</span>
          </div>
        </div>

        <div className="bg-gray-950 p-6">
          {activeView === 'home' && <Hero />}
          {activeView === 'activity' && <ActivityLog />}
          {activeView === 'bounties' && <Bounties />}
          {activeView === 'faq' && <FAQ />}

          <div className="mt-8 flex items-center gap-4 flex-wrap">
            <button
              onClick={() => setActiveView('activity')}
              className={`flex items-center gap-2 px-4 py-2 rounded border ${
                activeView === 'activity'
                  ? 'bg-green-500 text-black border-green-500'
                  : 'bg-black text-green-400 border-green-700 hover:border-green-500'
              } transition-colors`}
            >
              <Activity size={18} />
              <span>activity.log</span>
            </button>
            <span className="text-green-400">♦</span>
            <button
              onClick={() => setActiveView('bounties')}
              className={`flex items-center gap-2 px-4 py-2 rounded border ${
                activeView === 'bounties'
                  ? 'bg-green-500 text-black border-green-500'
                  : 'bg-black text-green-400 border-green-700 hover:border-green-500'
              } transition-colors`}
            >
              <Trophy size={18} />
              <span>bounties</span>
            </button>
            <span className="text-green-400">♦</span>
            <button
              onClick={() => setActiveView('faq')}
              className={`flex items-center gap-2 px-4 py-2 rounded border ${
                activeView === 'faq'
                  ? 'bg-green-500 text-black border-green-500'
                  : 'bg-black text-green-400 border-green-700 hover:border-green-500'
              } transition-colors`}
            >
              <HelpCircle size={18} />
              <span>FAQ</span>
            </button>
            <span className="text-green-400">♦</span>
            <button
              onClick={() => setActiveView('home')}
              className={`flex items-center gap-2 px-4 py-2 rounded border ${
                activeView === 'home'
                  ? 'bg-green-500 text-black border-green-500'
                  : 'bg-black text-green-400 border-green-700 hover:border-green-500'
              } transition-colors`}
            >
              <Terminal size={18} />
              <span>@RafeAlgorithm</span>
            </button>
          </div>

          <div className="mt-6 flex items-center gap-2">
            <span className="text-green-400">rafeAgent:~$</span>
            <span className="bg-green-400 text-black px-2 animate-pulse">_</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
