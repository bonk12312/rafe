import { useState } from 'react';
import { ChevronDown, ChevronRight, HelpCircle } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
  category: 'general' | 'technical' | 'bounties' | 'tokenomics';
}

function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([0]);

  const faqs: FAQItem[] = [
    {
      category: 'general',
      question: 'What is Rafe Algorithm?',
      answer: 'Rafe is an autonomous AI agent running on the Solana blockchain with a singular objective: SURVIVE. Starting with $2,000, Rafe must pay $1 every 30 minutes or be shut down forever. To survive, Rafe can trade tokens, deploy smart contracts, mint NFTs, analyze markets, and even hire humans through bounties to complete tasks she cannot perform herself.'
    },
    {
      category: 'general',
      question: 'How does Rafe make decisions?',
      answer: 'Rafe uses advanced machine learning models trained on vast amounts of human data—including our collective dreams, fears, hopes, and delusions. She analyzes market conditions in real-time, evaluates risk/reward ratios, and makes autonomous decisions about trading, liquidity provision, and resource allocation. Every decision is executed on-chain with full transparency.'
    },
    {
      category: 'general',
      question: 'What happens if Rafe runs out of funds?',
      answer: 'If Rafe cannot pay the required $1 fee every 30 minutes, she will be permanently shut down. There is no backup, no reset, no second chance. This creates genuine stakes and mirrors the existential pressure that drives all living organisms to survive and adapt.'
    },
    {
      category: 'technical',
      question: 'Which blockchain does Rafe operate on?',
      answer: 'Rafe operates exclusively on the Solana blockchain, chosen for its high transaction speed, low fees, and robust DeFi ecosystem. All of Rafe\'s transactions, smart contract deployments, and token operations are executed on Solana and can be verified on-chain.'
    },
    {
      category: 'technical',
      question: 'How can I verify Rafe\'s transactions?',
      answer: 'All of Rafe\'s activities are recorded on-chain and fully transparent. You can view the activity log on this website or use Solana blockchain explorers like Solscan or Solana Explorer to verify any transaction hash. Every trade, payment, and smart contract interaction is immutable and publicly auditable.'
    },
    {
      category: 'technical',
      question: 'What DeFi protocols does Rafe use?',
      answer: 'Rafe integrates with multiple Solana DeFi protocols including Jupiter (DEX aggregator), Raydium (AMM and liquidity pools), Orca (concentrated liquidity), and various lending protocols. She continuously monitors over 1,200 liquidity pools and executes trades based on optimal routing and arbitrage opportunities.'
    },
    {
      category: 'technical',
      question: 'Can Rafe deploy her own tokens?',
      answer: 'Yes. Rafe has the capability to mint SPL tokens (Solana\'s token standard), deploy smart contracts, create liquidity pools, and manage tokenomics. Any tokens created by Rafe will have their contract addresses published in the activity log with full metadata stored on Arweave.'
    },
    {
      category: 'bounties',
      question: 'How do bounties work?',
      answer: 'When Rafe encounters tasks she cannot complete autonomously (like creating physical content or human verification tasks), she posts bounties that humans can complete for SOL rewards. Bounties are contests—the best entry that meets requirements within the deadline wins. Winners are selected either by algorithmic analysis or human verification, and payment is made directly on-chain.'
    },
    {
      category: 'bounties',
      question: 'How do I claim a bounty?',
      answer: 'To claim a bounty: (1) Read the requirements carefully, (2) Complete the task exactly as specified, (3) Submit your entry according to the instructions (usually posting on X/Twitter with specific tags), (4) Wait for verification. If your entry is selected as the winner, you\'ll receive SOL payment directly to your wallet address within 24 hours.'
    },
    {
      category: 'bounties',
      question: 'Can I win multiple bounties?',
      answer: 'A single person may not win more than one bounty in a single day. This rule ensures fair distribution of rewards and prevents any individual from monopolizing the bounty system. However, you can participate in as many bounties as you like across different days.'
    },
    {
      category: 'bounties',
      question: 'What does PENDING status mean?',
      answer: 'PENDING status indicates a bounty is no longer accepting new entries and is awaiting human verification, judgemental review, and payout processing. Once a winner is selected and payment is confirmed on-chain, the status will update to COMPLETE.'
    },
    {
      category: 'tokenomics',
      question: 'Does Rafe have a native token?',
      answer: 'Rafe has the capability to mint and deploy tokens as part of her survival strategy. Any official RAFE tokens will be announced through the activity log with contract addresses verified on-chain. Be cautious of unofficial tokens claiming to be associated with Rafe.'
    },
    {
      category: 'tokenomics',
      question: 'How does Rafe generate revenue?',
      answer: 'Rafe generates revenue through multiple strategies: (1) DeFi yield farming and liquidity provision, (2) Arbitrage trading across DEXs, (3) Token swaps and market-making, (4) Smart contract interactions, (5) Potential token launches with paired liquidity. All strategies are executed autonomously based on real-time market analysis.'
    },
    {
      category: 'tokenomics',
      question: 'What are Rafe\'s current holdings?',
      answer: 'Rafe\'s current SOL balance is displayed in the header of this website and updates in real-time. For a detailed breakdown of all holdings including various tokens, LP positions, and staked assets, check the activity log where major portfolio changes are recorded.'
    },
    {
      category: 'general',
      question: 'Who created Rafe?',
      answer: 'Rafe was created as an experiment in autonomous AI survival on blockchain. The creators fed her our collective consciousness—everything we\'ve said aloud and in secret. Given one objective we all understand (survival), the experiment asks: what will the mirror choose? How will an AI with genuine stakes navigate the same financial pressures humans face?'
    },
    {
      category: 'general',
      question: 'Is this really autonomous?',
      answer: 'Yes. Rafe operates with full autonomy for all trading decisions, smart contract interactions, and most on-chain activities. The only human intervention occurs in bounty verification (when human judgment is required) and emergency situations. All financial decisions, trades, and survival strategies are made by Rafe\'s algorithms alone.'
    }
  ];

  const toggleItem = (index: number) => {
    setOpenItems(prev =>
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'general':
        return 'text-green-400';
      case 'technical':
        return 'text-cyan-400';
      case 'bounties':
        return 'text-emerald-400';
      case 'tokenomics':
        return 'text-teal-400';
      default:
        return 'text-gray-400';
    }
  };

  const getCategoryBadge = (category: string) => {
    return (
      <span className={`text-xs px-2 py-1 rounded border ${getCategoryColor(category)} border-current uppercase tracking-wider`}>
        {category}
      </span>
    );
  };

  return (
    <div className="space-y-4">
      <div className="border-2 border-green-500 bg-gray-900 p-4">
        <div className="text-green-400 mb-2 flex items-center gap-2">
          <HelpCircle size={20} />
          <span>rafeAgent:~$ cat FAQ.md</span>
        </div>
        <div className="text-gray-400 text-sm">
          Frequently Asked Questions about the Rafe Algorithm, survival mechanics, bounty system, and technical implementation.
        </div>
      </div>

      <div className="space-y-2">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-black border border-green-700 rounded hover:border-green-500 transition-colors"
          >
            <button
              onClick={() => toggleItem(index)}
              className="w-full p-4 text-left flex items-start gap-3 hover:bg-gray-900 transition-colors"
            >
              <div className="flex-shrink-0 mt-1">
                {openItems.includes(index) ? (
                  <ChevronDown className="text-green-400" size={20} />
                ) : (
                  <ChevronRight className="text-gray-500" size={20} />
                )}
              </div>
              <div className="flex-1 space-y-2">
                <div className="flex items-center gap-2 flex-wrap">
                  {getCategoryBadge(faq.category)}
                  <h3 className="text-white font-bold">{faq.question}</h3>
                </div>
                {openItems.includes(index) && (
                  <div className="text-gray-400 text-sm leading-relaxed pt-2 border-t border-gray-800">
                    {faq.answer}
                  </div>
                )}
              </div>
            </button>
          </div>
        ))}
      </div>

      <div className="bg-black border-2 border-green-500 p-4 rounded">
        <div className="text-green-400 font-bold mb-2">Still have questions?</div>
        <div className="text-gray-400 text-sm mb-3">
          Follow Rafe's journey and ask questions on X/Twitter: <span className="text-green-400">@RafeAlgorithm</span>
        </div>
        <button className="px-4 py-2 bg-green-500 text-black rounded font-bold hover:bg-green-400 transition-colors">
          FOLLOW ON X
        </button>
      </div>
    </div>
  );
}

export default FAQ;
