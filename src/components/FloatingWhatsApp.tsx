import React, { useState } from 'react';
import { MessageSquare, X } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Tooltip Greeting */}
      {showTooltip && (
        <div className="mb-2 bg-white rounded-2xl p-3 shadow-xl border border-slate-200 max-w-xs text-xs text-slate-700 animate-bounce relative">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-slate-200 hover:bg-slate-300 text-slate-600 rounded-full flex items-center justify-center text-[10px]"
          >
            <X className="w-3 h-3" />
          </button>
          <div className="font-bold text-slate-900 mb-0.5 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>Sales &amp; Estimator Online</span>
          </div>
          <p className="text-[11px] text-slate-600 leading-snug">
            Halo! Ada kebutuhan fabrikasi, conveyor, atau spare parts mesin? Chat kami sekarang.
          </p>
        </div>
      )}

      {/* Floating Button */}
      <a
        href="https://wa.me/6282250580331?text=Halo%20PT%20Jeruk%20Manis%20Abadi%2C%20saya%20tertarik%20untuk%20konsultasi%20kebutuhan%20fabrikasi%20dan%20engineering."
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 relative group"
        aria-label="Hubungi WhatsApp PT Jeruk Manis Abadi"
      >
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-orange-500 rounded-full border-2 border-white animate-pulse" />
        <MessageSquare className="w-7 h-7" />
      </a>
    </div>
  );
};
