import { ChevronRight, Code, Twitter, Disc as Discord, BookOpen, PenTool as Pen, ArrowRight, ChevronDown } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-[#111111] font-sans overflow-x-hidden">
      {/* Navbar */}
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-6xl bg-[#f9f9f9]/90 backdrop-blur-md rounded-full px-6 py-3 flex justify-between items-center z-50 border border-black/5">
        <div className="flex items-center gap-2">
          {/* Logo Icon */}
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-black">
            <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="font-semibold text-xl tracking-tight">Hermetica</span>
        </div>
        <div className="flex items-center gap-6 text-sm font-medium">
          <a href="#" className="text-gray-600 hover:text-black transition-colors">FAQs</a>
          <a href="#" className="px-4 py-2 rounded-full border border-gray-300 hover:border-gray-400 transition-colors">Read Docs</a>
          <a href="#" className="px-4 py-2 rounded-full bg-[#161616] text-white hover:bg-black transition-colors">Join Waitlist</a>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="pt-48 pb-24 max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-xl">
            <h1 className="text-6xl md:text-7xl font-medium tracking-tight leading-[1.1] mb-6">
              Earn <span className="bg-[#ffb067] px-4 py-1 rounded-2xl inline-block">Yield</span><br />
              on your Bitcoin
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              <span className="font-semibold text-black flex items-center gap-1 inline-flex">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-black"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>
                hBTC
              </span> is Bitcoin that earns Bitcoin: <br/>
              self-custodial, transparent, daily yield
            </p>
            <button className="flex items-center gap-2 bg-[#161616] text-white px-6 py-3 rounded-full font-medium hover:bg-black transition-colors">
              Get Started <ChevronRight size={18} />
            </button>
          </div>
          <div className="relative flex justify-center lg:justify-end">
            {/* 3D Bronze Coin Simulation */}
            <div className="w-[400px] h-[400px] rounded-full bg-gradient-to-br from-[#f3d592] via-[#d4af37] to-[#8a6d3b] shadow-[0_20px_50px_rgba(0,0,0,0.3)] flex items-center justify-center relative overflow-hidden border-[12px] border-[#e6c27a] transform rotate-12 perspective-1000">
               <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent mix-blend-overlay rounded-full"></div>
               <div className="absolute inset-4 border-4 border-[#b8860b]/40 rounded-full"></div>
               <div className="absolute inset-0 shadow-[inset_0_-20px_40px_rgba(0,0,0,0.4)] rounded-full"></div>
               <span className="text-[12rem] font-bold text-[#f9e5b3] drop-shadow-[0_4px_4px_rgba(0,0,0,0.3)]" style={{ textShadow: '2px 2px 0 #b8860b, 4px 4px 0 #8a6d3b, 6px 6px 0 #5c4827' }}>₿</span>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-24 max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center border-t border-gray-100">
          <div className="relative h-64 overflow-hidden opacity-30">
            {/* Placeholder for wave pattern */}
            <svg width="100%" height="100%" viewBox="0 0 500 200" preserveAspectRatio="none">
              <path d="M0,100 C150,200 350,0 500,100 L500,200 L0,200 Z" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="2 4" />
              <path d="M0,120 C150,220 350,20 500,120 L500,200 L0,200 Z" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="2 4" />
              <path d="M0,140 C150,240 350,40 500,140 L500,200 L0,200 Z" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="2 4" />
              <path d="M0,160 C150,260 350,60 500,160 L500,200 L0,200 Z" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="2 4" />
            </svg>
          </div>
          <div className="grid grid-cols-1 gap-8">
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-4xl font-medium mb-1">$11.4M</h3>
              <p className="text-sm text-gray-500">TVL</p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-4xl font-medium mb-1">8%</h3>
              <p className="text-sm text-gray-500">APY</p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-4xl font-medium mb-1">2</h3>
              <p className="text-sm text-gray-500">Yield Sources</p>
            </div>
            <div className="pb-6">
              <h3 className="text-4xl font-medium mb-1">L1&L2</h3>
              <p className="text-sm text-gray-500">Chains</p>
            </div>
          </div>
        </section>

        {/* Backed By Section */}
        <section className="py-24 max-w-6xl mx-auto px-6">
          <h2 className="text-5xl font-medium mb-8 tracking-tight">Backed by</h2>
          
          <div className="mb-12">
            <span className="bg-gray-100 text-sm font-medium px-4 py-1.5 rounded-full inline-block mb-8">Investors</span>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-x-8 gap-y-12 items-center opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
              {/* Investor Logos Placeholders */}
              <div className="text-xl font-bold flex items-center gap-2"><div className="w-6 h-6 bg-black"></div> ETHOS FUND</div>
              <div className="text-xl font-bold">UTXO</div>
              <div className="text-xl font-serif italic">silvermine</div>
              <div className="text-xl font-bold flex items-center gap-2"><div className="w-6 h-6 rounded-full bg-black"></div> CMS</div>
              <div className="text-xl font-bold">TRUST MACHINES</div>
              <div className="text-xl font-bold flex items-center gap-2"><div className="w-6 h-6 bg-black"></div> NEWMAN</div>
              <div className="text-xl font-bold">SATS VENTURES</div>
              <div className="text-xl font-bold">KILOWATT</div>
              <div className="text-xl font-bold flex items-center gap-2"><div className="w-6 h-6 bg-black"></div> Arch Network</div>
              <div className="text-xl font-bold flex items-center gap-2"><div className="w-6 h-6 bg-black"></div> JPEG Trading</div>
            </div>
          </div>

          <div>
            <span className="bg-gray-100 text-sm font-medium px-4 py-1.5 rounded-full inline-block mb-8">Angels</span>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {/* Angel Profiles */}
              {[
                { name: "Tycho Onnasch", title: "Co-Founder & CEO, Zest" },
                { name: "Robin Obermaier", title: "Co-Founder & CEO, Liquidium" },
                { name: "Ryan O'Shea", title: "COO, Maple Finance" },
                { name: "GM Chung", title: "Co-Founder, DeSpread" },
                { name: "Paul Taylor", title: "Angel, Former Blackrock" }
              ].map((angel, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden">
                    <img src={`https://i.pravatar.cc/150?img=${i+10}`} alt={angel.name} className="w-full h-full object-cover grayscale" />
                  </div>
                  <div>
                    <h4 className="font-medium text-sm">{angel.name}</h4>
                    <p className="text-xs text-gray-500">{angel.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Security Section */}
        <section className="py-24 max-w-6xl mx-auto px-6">
          <h2 className="text-5xl font-medium mb-8 tracking-tight">Security and transparency</h2>
          <span className="bg-gray-100 text-sm font-medium px-4 py-1.5 rounded-full inline-block mb-8">Audits</span>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="border border-gray-200 rounded-3xl p-8 flex flex-col justify-between h-64 hover:border-gray-300 transition-colors cursor-pointer group">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center font-bold text-xl">A</div>
                <span className="font-medium text-lg">Clarity Alliance</span>
              </div>
              <div>
                <h4 className="font-medium text-lg mb-1">hBTC Contracts</h4>
                <p className="text-sm text-gray-500 mb-4">November 2025</p>
                <div className="flex items-center justify-end text-sm font-medium group-hover:translate-x-1 transition-transform">
                  Read report <ChevronRight size={16} className="ml-1" />
                </div>
              </div>
            </div>
            
            <div className="border border-gray-200 rounded-3xl p-8 flex flex-col justify-between h-64 hover:border-gray-300 transition-colors cursor-pointer group">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center font-bold text-xl">G</div>
                <span className="font-medium text-lg">Greybeard Security</span>
              </div>
              <div>
                <h4 className="font-medium text-lg mb-1">hBTC Contracts</h4>
                <p className="text-sm text-gray-500 mb-4">November 2025</p>
                <div className="flex items-center justify-end text-sm font-medium group-hover:translate-x-1 transition-transform">
                  Read report <ChevronRight size={16} className="ml-1" />
                </div>
              </div>
            </div>
          </div>

          <div className="border border-gray-200 rounded-full p-2 pl-6 flex items-center justify-between bg-white">
            <div className="flex items-center gap-3 text-sm font-medium">
              <span className="bg-green-100 text-green-700 px-2 py-1 rounded-md text-xs font-mono">&lt;/&gt;</span>
              The hBTC protocol is open source and auditable by anyone.
            </div>
            <button className="bg-[#161616] text-white px-6 py-3 rounded-full text-sm font-medium flex items-center gap-2 hover:bg-black transition-colors">
              View Code <ChevronRight size={16} />
            </button>
          </div>
        </section>

        {/* Problem Section */}
        <section className="py-24 max-w-6xl mx-auto px-6">
          <div className="bg-[#161616] text-white rounded-[2.5rem] p-16 grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1">
              <h2 className="text-5xl font-medium tracking-tight leading-tight">Bitcoin yield<br/>is broken</h2>
            </div>
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-12 pt-2">
              <div>
                <h3 className="text-2xl font-medium mb-4">Custodial</h3>
                <p className="text-gray-400 text-sm leading-relaxed">Your Bitcoin is held by third parties, not by you.</p>
              </div>
              <div>
                <h3 className="text-2xl font-medium mb-4">Opaque</h3>
                <p className="text-gray-400 text-sm leading-relaxed">Legacy yield products remain opaque and hard to audit.</p>
              </div>
            </div>
          </div>
        </section>

        {/* hBTC Features Section */}
        <section className="py-24 max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-5xl font-medium tracking-tight mb-6 flex items-center gap-3">
              <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center text-2xl font-bold">₿</div>
              hBTC
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Bitcoin that earns Bitcoin:<br/>
              self-custodial, transparent, daily yield
            </p>
          </div>
          <div className="bg-[#161616] rounded-[2.5rem] p-12 relative overflow-hidden h-[400px] flex items-center justify-center">
            {/* 3D Silver Coin Simulation */}
            <div className="w-[300px] h-[300px] rounded-full bg-gradient-to-br from-[#f0f0f0] via-[#d0d0d0] to-[#a0a0a0] shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex items-center justify-center relative translate-y-12 border-[10px] border-[#e0e0e0] transform -rotate-12 perspective-1000">
               <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent mix-blend-overlay rounded-full"></div>
               <div className="absolute inset-4 border-4 border-[#b0b0b0]/40 rounded-full"></div>
               <div className="absolute inset-0 shadow-[inset_0_-20px_40px_rgba(0,0,0,0.4)] rounded-full"></div>
               <span className="text-[9rem] font-bold text-[#f8f8f8] drop-shadow-[0_4px_4px_rgba(0,0,0,0.3)]" style={{ textShadow: '2px 2px 0 #c0c0c0, 4px 4px 0 #a0a0a0, 6px 6px 0 #808080' }}>₿</span>
            </div>
            <div className="absolute top-8 right-8 bg-[#ffb067] text-black px-6 py-2 rounded-full font-medium text-xl shadow-lg">
              Up to 7%
            </div>
          </div>
        </section>

        {/* Featured In Section */}
        <section className="py-24 max-w-6xl mx-auto px-6 border-t border-gray-100">
          <span className="bg-gray-100 text-sm font-medium px-4 py-1.5 rounded-full inline-block mb-12">Featured in</span>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center opacity-60 grayscale">
            <div className="text-2xl font-bold">CoinDesk</div>
            <div className="text-xl font-bold">COINTELEGRAPH</div>
            <div className="text-2xl font-bold">Decrypt</div>
            <div className="text-2xl font-bold">Bitcoin.com</div>
            <div className="text-xl font-bold">HACKERNOON</div>
          </div>
        </section>

        {/* Get Started Section */}
        <section className="py-32 max-w-6xl mx-auto px-6">
          <h2 className="text-6xl font-medium text-center mb-24 tracking-tight">Get Started</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
            <div className="bg-[#161616] rounded-[2rem] p-8 h-[350px] flex items-center justify-center relative overflow-hidden">
              {/* UI Mockup Placeholder */}
              <div className="w-full max-w-sm bg-[#1e1e1e] rounded-3xl p-6 border border-white/5 shadow-2xl">
                <div className="flex justify-between text-sm text-gray-400 mb-2 font-medium"><span>Stake</span></div>
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <div className="text-4xl text-white font-medium mb-1">1.12</div>
                    <div className="text-xs text-gray-500">$101,042.00</div>
                  </div>
                  <div className="flex flex-col items-end">
                    <div className="flex items-center gap-2 bg-[#2a2a2a] px-3 py-1.5 rounded-full text-white text-sm mb-1 hover:bg-[#333] cursor-pointer transition-colors">
                      <div className="w-5 h-5 bg-[#f7931a] rounded-full flex items-center justify-center text-white text-[10px] font-bold">₿</div> 
                      BTC <ChevronDown size={14} className="text-gray-400"/>
                    </div>
                    <div className="text-xs text-gray-500">1.14 BTC <span className="text-white cursor-pointer">Max</span></div>
                  </div>
                </div>
                
                <div className="flex justify-center -my-5 relative z-10">
                  <div className="w-10 h-10 bg-[#2a2a2a] rounded-xl flex items-center justify-center border-4 border-[#1e1e1e] cursor-pointer hover:bg-[#333] transition-colors">
                    <ArrowRight size={16} className="text-gray-400 rotate-90"/>
                  </div>
                </div>
                
                <div className="flex justify-between text-sm text-gray-400 mb-2 mt-4 font-medium"><span>Receive</span></div>
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-4xl text-white font-medium mb-1">1.00</div>
                    <div className="text-xs text-gray-500">$101,042.00</div>
                  </div>
                  <div className="flex flex-col items-end">
                    <div className="flex items-center gap-2 bg-[#2a2a2a] px-3 py-1.5 rounded-full text-white text-sm mb-1">
                      <div className="w-5 h-5 bg-white rounded-full text-black flex items-center justify-center text-[10px] font-bold">₿</div> 
                      hBTC
                    </div>
                    <div className="text-xs text-gray-500">0.12 hBTC</div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-3xl font-medium mb-4">1. Join Waitlist</h3>
              <p className="text-gray-600 mb-8 text-lg">Secure your spot in line to be among the first to experience the future of Bitcoin yield.</p>
              <button className="bg-[#161616] text-white px-6 py-3 rounded-full text-sm font-medium flex items-center gap-2 hover:bg-black transition-colors">
                Join Waitlist <ChevronRight size={16} />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
            <div className="bg-[#fdf6f0] rounded-[2rem] h-[350px] flex items-center justify-center relative overflow-hidden">
              {/* 3D Bronze Coin Simulation */}
               <div className="w-[280px] h-[280px] rounded-full bg-gradient-to-br from-[#f3d592] via-[#d4af37] to-[#8a6d3b] shadow-[0_20px_50px_rgba(0,0,0,0.3)] flex items-center justify-center relative translate-y-20 border-[8px] border-[#e6c27a] transform rotate-12 perspective-1000">
                 <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent mix-blend-overlay rounded-full"></div>
                 <div className="absolute inset-3 border-4 border-[#b8860b]/40 rounded-full"></div>
                 <div className="absolute inset-0 shadow-[inset_0_-15px_30px_rgba(0,0,0,0.4)] rounded-full"></div>
                 <span className="text-[8rem] font-bold text-[#f9e5b3] drop-shadow-[0_4px_4px_rgba(0,0,0,0.3)]" style={{ textShadow: '2px 2px 0 #b8860b, 4px 4px 0 #8a6d3b, 6px 6px 0 #5c4827' }}>₿</span>
              </div>
            </div>
            <div>
              <h3 className="text-3xl font-medium mb-4">2. Get Access</h3>
              <p className="text-gray-600 mb-8 text-lg">Receive your exclusive invitation to mint hBTC and start putting your Bitcoin to work.</p>
              <button className="bg-[#161616] text-white px-6 py-3 rounded-full text-sm font-medium flex items-center gap-2 hover:bg-black transition-colors">
                Get Access <ChevronRight size={16} />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="bg-[#161616] rounded-[2rem] h-[350px] flex items-center justify-center relative overflow-hidden p-0">
              {/* Chart Placeholder */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#1a1a1a] to-[#2a2a2a]"></div>
              <div className="absolute inset-0 opacity-30 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#ffb067] via-transparent to-transparent"></div>
              <div className="w-full h-full relative">
                <div className="absolute top-8 left-8 text-white text-4xl font-medium tracking-tight">₿18.876</div>
                
                {/* Chart Line */}
                <svg width="100%" height="100%" viewBox="0 0 400 200" preserveAspectRatio="none" className="absolute bottom-0 left-0">
                  <defs>
                    <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#ffb067" stopOpacity="0.2" />
                      <stop offset="100%" stopColor="#ffb067" stopOpacity="1" />
                    </linearGradient>
                    <linearGradient id="fillGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#ffb067" stopOpacity="0.2" />
                      <stop offset="100%" stopColor="#ffb067" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path d="M0,180 L100,140 L200,90 L300,50 L400,20 L400,200 L0,200 Z" fill="url(#fillGrad)" />
                  <path d="M0,180 L100,140 L200,90 L300,50 L400,20" fill="none" stroke="url(#lineGrad)" strokeWidth="3" />
                  
                  {/* Current Point */}
                  <circle cx="400" cy="20" r="4" fill="#fff" className="shadow-[0_0_10px_#fff]" />
                  <line x1="400" y1="20" x2="400" y2="200" stroke="#fff" strokeWidth="1" opacity="0.5"/>
                </svg>
                
                {/* Particles */}
                <div className="absolute top-[40%] left-[20%] w-1.5 h-1.5 bg-[#ffb067] rounded-full blur-[1px] shadow-[0_0_8px_#ffb067]"></div>
                <div className="absolute top-[30%] left-[50%] w-2 h-2 bg-[#ffb067] rounded-full blur-[1px] shadow-[0_0_10px_#ffb067] opacity-80"></div>
                <div className="absolute bottom-[30%] right-[20%] w-1 h-1 bg-[#ffb067] rounded-full blur-[0.5px] shadow-[0_0_5px_#ffb067]"></div>
                <div className="absolute top-[60%] right-[40%] w-2 h-2 bg-[#ffb067] rounded-full blur-[2px] opacity-40"></div>
                <div className="absolute top-[20%] right-[10%] w-1.5 h-1.5 bg-[#ffb067] rounded-full blur-[1px] shadow-[0_0_8px_#ffb067] opacity-60"></div>
              </div>
            </div>
            <div>
              <h3 className="text-3xl font-medium mb-4">3. Earn Bitcoin</h3>
              <p className="text-gray-600 mb-8 text-lg">Watch your Bitcoin balance grow daily with transparent, self-custodial yield generation.</p>
              <button className="bg-[#161616] text-white px-6 py-3 rounded-full text-sm font-medium flex items-center gap-2 hover:bg-black transition-colors">
                Earn Bitcoin <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </section>

        {/* Waitlist CTA */}
        <section className="py-24 max-w-6xl mx-auto px-6">
          <div className="bg-[#f4f4f5] rounded-[2.5rem] overflow-hidden flex flex-col md:flex-row">
            <div className="p-16 flex-1 flex flex-col justify-center">
              <h2 className="text-4xl font-medium mb-4 tracking-tight">Join the Waitlist</h2>
              <p className="text-gray-600 mb-8">Join the waitlist for exclusive access at launch.</p>
              <form className="flex gap-4">
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="flex-1 px-6 py-3 rounded-full border border-gray-300 focus:outline-none focus:border-gray-400 bg-white"
                />
                <button type="submit" className="px-8 py-3 rounded-full border border-gray-300 font-medium hover:bg-gray-50 transition-colors bg-white">
                  Subscribe
                </button>
              </form>
            </div>
            <div className="flex-1 bg-[#161616] relative min-h-[300px] overflow-hidden">
              {/* Silver Coins Pattern Simulation */}
              <div className="absolute -right-12 -top-12 w-48 h-48 rounded-full bg-gradient-to-br from-[#f0f0f0] via-[#d0d0d0] to-[#a0a0a0] shadow-[0_10px_30px_rgba(0,0,0,0.5)] opacity-80 rotate-12 border-[6px] border-[#e0e0e0] flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent mix-blend-overlay rounded-full"></div>
                <div className="absolute inset-2 border-2 border-[#b0b0b0]/40 rounded-full"></div>
                <span className="text-[4rem] font-bold text-[#f8f8f8] drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]" style={{ textShadow: '1px 1px 0 #c0c0c0, 2px 2px 0 #a0a0a0, 3px 3px 0 #808080' }}>₿</span>
              </div>
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-gradient-to-br from-[#f0f0f0] via-[#d0d0d0] to-[#a0a0a0] shadow-[0_20px_50px_rgba(0,0,0,0.6)] flex items-center justify-center border-[8px] border-[#e0e0e0] z-10">
                <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent mix-blend-overlay rounded-full"></div>
                <div className="absolute inset-3 border-4 border-[#b0b0b0]/40 rounded-full"></div>
                <div className="absolute inset-0 shadow-[inset_0_-10px_20px_rgba(0,0,0,0.3)] rounded-full"></div>
                <span className="text-[5rem] font-bold text-[#f8f8f8] drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]" style={{ textShadow: '1px 1px 0 #c0c0c0, 2px 2px 0 #a0a0a0, 3px 3px 0 #808080' }}>₿</span>
              </div>
              <div className="absolute -left-12 -bottom-12 w-40 h-40 rounded-full bg-gradient-to-br from-[#d0d0d0] via-[#a0a0a0] to-[#707070] shadow-[0_10px_30px_rgba(0,0,0,0.5)] opacity-60 -rotate-12 border-[5px] border-[#c0c0c0] flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-tr from-black/30 to-transparent mix-blend-overlay rounded-full"></div>
                <div className="absolute inset-2 border-2 border-[#808080]/40 rounded-full"></div>
                <span className="text-[3rem] font-bold text-[#f8f8f8] drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]" style={{ textShadow: '1px 1px 0 #c0c0c0, 2px 2px 0 #a0a0a0, 3px 3px 0 #808080' }}>₿</span>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs Section */}
        <section className="py-32 max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5">
            <h2 className="text-7xl font-medium mb-8 tracking-tight">FAQs</h2>
            <p className="text-gray-600 mb-16 text-lg leading-relaxed">
              We have you covered.<br/>
              Answers to the community's top questions.
            </p>
            <h3 className="text-2xl font-medium mb-6">Still have questions?</h3>
            <button className="bg-[#161616] text-white px-6 py-3 rounded-full text-sm font-medium flex items-center gap-2 hover:bg-black transition-colors">
              Contact Us <ChevronRight size={16} />
            </button>
          </div>
          <div className="lg:col-span-7">
            <div className="divide-y divide-gray-200">
              {[
                "What is hBTC?",
                "Where does the yield come from?",
                "Is there rehypothecation?",
                "If the Bitcoin price moves up or down, does my hBTC value change?",
                "Can I withdraw at any time?",
                "How does Hermetica mitigate risk?",
                "How is hBTC self-custodial?",
                "Is Hermetica audited?"
              ].map((faq, i) => (
                <div key={i} className="py-6 flex justify-between items-center cursor-pointer group">
                  <h4 className="text-lg font-medium group-hover:text-gray-600 transition-colors">{faq}</h4>
                  <ChevronDown size={20} className="text-gray-400" />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="max-w-6xl mx-auto px-6 py-16 border-t border-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-black">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="font-semibold text-xl tracking-tight">Hermetica</span>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-6">Resources</h4>
            <ul className="space-y-4 text-sm text-gray-600">
              <li><a href="#" className="hover:text-black transition-colors">Launch App</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Docs</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Media Kit</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Careers</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-6">Follow Us</h4>
            <ul className="space-y-4 text-sm text-gray-600">
              <li><a href="#" className="hover:text-black transition-colors flex items-center gap-2"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg> X (Twitter)</a></li>
              <li><a href="#" className="hover:text-black transition-colors flex items-center gap-2"><Discord size={16}/> Discord</a></li>
              <li><a href="#" className="hover:text-black transition-colors flex items-center gap-2"><div className="w-4 h-4 rounded-full bg-current flex items-center justify-center"><div className="w-1.5 h-1.5 bg-white rounded-full"></div></div> Medium</a></li>
              <li><a href="#" className="hover:text-black transition-colors flex items-center gap-2"><BookOpen size={16}/> Blog</a></li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-100 text-sm text-gray-500">
          <p>© 2026 Hermetica Labs, Inc. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-black transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-black transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
