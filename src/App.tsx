import { useState, useEffect } from 'react';
import { Terminal, Copy, Check, Info, Shield, Github, Monitor, Layers } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [copied, setCopied] = useState(false);
  const [appUrl, setAppUrl] = useState('');

  useEffect(() => {
    // Standard approach for determining the current host
    const url = window.location.origin;
    setAppUrl(url);
  }, []);

  const setupCommand = `curl -L ${appUrl}/setup.sh | bash`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(setupCommand);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="retro-window-container">
      <div className="w-[900px] retro-window">
        {/* Title Bar */}
        <div className="retro-title-bar">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-gray-300 border border-black flex items-center justify-center">
              <div className="w-2 h-2 bg-black"></div>
            </div>
            <span className="text-white font-bold text-sm tracking-wide">Termux Linux Setup - Chicago95 Edition [Fork: orailnoor]</span>
          </div>
          <div className="flex gap-1">
            <button className="w-5 h-5 bg-[#c0c0c0] border-t-white border-l-white border-r-black border-b-black border text-black text-xs font-bold leading-none shadow-sm flex items-center justify-center pt-[1px] hover:bg-gray-100 transition-colors">_</button>
            <button className="w-5 h-5 bg-[#c0c0c0] border-t-white border-l-white border-r-black border-b-black border text-black text-xs font-bold leading-none shadow-sm flex items-center justify-center pb-[1px] hover:bg-red-500 hover:text-white transition-colors">x</button>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="p-6 flex gap-6">
          {/* Left Sidebar: Progress */}
          <div className="retro-sidebar flex flex-col justify-between">
            <div>
              <h3 className="text-xs font-bold uppercase mb-4 text-gray-600 border-b pb-1">Setup Steps</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-2 text-xs text-green-700 font-bold">
                  <span className="w-4 h-4 rounded-full bg-green-200 border border-green-700 flex items-center justify-center text-[10px]">✓</span>
                  Initialize
                </li>
                <li className="flex items-center gap-2 text-xs text-green-700 font-bold">
                  <span className="w-4 h-4 rounded-full bg-green-200 border border-green-700 flex items-center justify-center text-[10px]">✓</span>
                  Fork Check
                </li>
                <li className="flex items-center gap-2 text-xs font-bold">
                  <span className="w-4 h-4 rounded-full bg-blue-600 border border-black flex items-center justify-center text-[10px] text-white">➜</span>
                  XFCE Install
                </li>
                <li className="flex items-center gap-2 text-xs opacity-40">
                  <span className="w-4 h-4 rounded-full border border-gray-400"></span>
                  Chicago95 UI
                </li>
                <li className="flex items-center gap-2 text-xs opacity-40">
                  <span className="w-4 h-4 rounded-full border border-gray-400"></span>
                  VNC Config
                </li>
              </ul>
            </div>
            
            <div className="mt-8">
              <div className="p-2 border-2 border-dotted border-gray-400">
                <p className="text-[10px] text-gray-500 uppercase">Automated Fork</p>
                <p className="text-[11px] font-bold text-red-700">v2.0-CHICAGO</p>
              </div>
            </div>
          </div>

          {/* Center: Terminal & Data */}
          <div className="flex-1 flex flex-col gap-4">
            {/* Terminal Window */}
            <div className="retro-terminal h-[360px] relative group overflow-y-auto">
              <p className="text-gray-400 font-mono">[SYSTEM] Initializing installation sequence...</p>
              <p className="text-gray-400 font-mono">[GIT] Checking out fork from orailnoor/termux-linux-setup...</p>
              <p className="text-blue-400 font-mono italic">$ curl -L {appUrl}/setup.sh | bash</p>
              <p className="font-mono text-white">[INFO] Injecting XFCE4 base packages...</p>
              <p className="font-mono text-white">[INFO] Downloading Chicago95 GTK/Icon theme bundle...</p>
              <p className="mt-2 text-blue-400 font-mono"># Automated script ready. Copy below:</p>
              
              <div className="mt-4 p-3 bg-gray-900 border border-gray-700 rounded select-all font-mono text-xs text-[#00ff00]">
                {setupCommand}
              </div>

              <div className="mt-4 text-yellow-400 flex items-center gap-2 uppercase font-bold text-[10px]">
                <span>Progress:</span>
                <span>{"[=======================>........] 68%"}</span>
              </div>
              
              <p className="text-gray-500 text-[10px] italic mt-4 uppercase">
                // Note: No user intervention required. Default theme set to 'Chicago95'.
              </p>

              <button 
                onClick={copyToClipboard}
                className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 p-2 border border-white/20 text-white flex items-center gap-2 text-[10px] uppercase font-bold transition-colors"
                title="Copy Command"
              >
                {copied ? <Check size={14} className="text-green-400" /> : <Copy size={14} />}
                {copied ? 'Copied!' : 'Copy CMD'}
              </button>
            </div>

            {/* Bottom Panel: Details */}
            <div className="bg-retro-silver border border-gray-500 p-4 flex justify-between items-center text-black">
              <div className="flex flex-col gap-1">
                <label className="flex items-center gap-2 text-xs font-bold cursor-default">
                  <input type="checkbox" checked readOnly className="accent-blue-800" />
                  AUTO-APPLY THEME: CHICAGO95
                </label>
                <label className="flex items-center gap-2 text-xs font-bold cursor-default">
                  <input type="checkbox" checked readOnly className="accent-blue-800" />
                  OVERRIDE XFCE DEFAULTS
                </label>
              </div>
              <div className="text-right">
                <span className="text-[11px] block font-bold text-gray-600">ARCH: AARCH64 (AUTO)</span>
                <span className="text-[11px] block font-bold text-gray-600 underline">ENV: TERMUX / ANDROID</span>
              </div>
            </div>
          </div>
        </div>

        {/* Status Bar / Footer */}
        <div className="bg-retro-gray border-t border-white p-2 flex justify-end gap-2">
          <div className="flex-1 flex items-center px-4">
            <div className="retro-progress-container overflow-hidden">
               <motion.div 
                 initial={{ width: 0 }}
                 animate={{ width: "68%" }}
                 className="retro-progress-bar shadow-[inset_1px_1px_1px_rgba(255,255,255,0.3)]"
               ></motion.div>
            </div>
          </div>
          <button className="retro-button">Back</button>
          <button className="retro-button opacity-50 cursor-not-allowed">Next</button>
          <button className="retro-button" onClick={() => window.location.reload()}>Cancel</button>
        </div>
      </div>

      {/* Desktop Icon Decoration */}
      <div className="absolute bottom-8 left-8 flex flex-col items-center gap-1 opacity-60 hover:opacity-100 transition-opacity cursor-pointer group">
        <div className="w-10 h-10 border-2 border-white/50 border-dotted flex items-center justify-center group-hover:border-white transition-colors">
           <Monitor size={20} className="text-white" />
        </div>
        <span className="text-[10px] text-white font-bold tracking-tighter shadow-sm text-center">Setup_Log.txt</span>
      </div>

      {/* Note Area */}
      <div className="absolute top-8 right-8 max-w-[240px] text-white/50 text-[10px] leading-relaxed text-right font-mono">
        &gt; fork: orailnoor/termux-linux-setup<br/>
        &gt; target_de: xfce4<br/>
        &gt; theme_pkg: chicago95<br/>
        &gt; automated: true
      </div>
    </div>
  );
}
