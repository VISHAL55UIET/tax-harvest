import React from 'react';
import { formatCurrency } from '../utils/formatters';

const GainsCard = ({ title, gains, variant = 'pre', savings = 0 }) => {
  const isPre = variant === 'pre';
  const bgColor = isPre ? 'bg-gradient-to-br from-slate-900 to-slate-800' : 'bg-gradient-to-br from-blue-600 to-blue-700';
  const textColor = isPre ? 'text-slate-100' : 'text-white';

  return (
    <div className={`${bgColor} ${textColor} rounded-2xl p-8 shadow-2xl border-0 shadow-slate-900/50 hover:shadow-slate-900/70 transition-all duration-300`}>
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
        {savings > 0 && (
          <div className="bg-green-500/20 backdrop-blur-sm border border-green-500/30 rounded-xl px-4 py-2">
            <span className="text-sm font-semibold">Saved ₹{formatCurrency(savings)}</span>
          </div>
        )}
      </div>

      <div className="space-y-6">
        {/* STCG Section */}
        <div className="space-y-3">
          <h3 className="text-lg font-semibold flex items-center gap-2">
            <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
            STCG
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="text-2xl font-bold text-green-400">+₹{formatCurrency(gains.stcg.profits)}</div>
              <div className="text-xs opacity-75">Profits</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="text-2xl font-bold text-red-400">-₹{formatCurrency(gains.stcg.losses)}</div>
              <div className="text-xs opacity-75">Losses</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border-2 border-white/20">
              <div className={`text-2xl font-bold ${gains.stcg.net >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
                {gains.stcg.net >= 0 ? '+' : ''}₹{formatCurrency(Math.abs(gains.stcg.net))}
              </div>
              <div className="text-xs opacity-75">Net</div>
            </div>
          </div>
        </div>

        {/* LTCG Section */}
        <div className="space-y-3">
          <h3 className="text-lg font-semibold flex items-center gap-2">
            <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
            LTCG
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="text-2xl font-bold text-green-400">+₹{formatCurrency(gains.ltcg.profits)}</div>
              <div className="text-xs opacity-75">Profits</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="text-2xl font-bold text-red-400">-₹{formatCurrency(gains.ltcg.losses)}</div>
              <div className="text-xs opacity-75">Losses</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border-2 border-white/20">
              <div className={`text-2xl font-bold ${gains.ltcg.net >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
                {gains.ltcg.net >= 0 ? '+' : ''}₹{formatCurrency(Math.abs(gains.ltcg.net))}
              </div>
              <div className="text-xs opacity-75">Net</div>
            </div>
          </div>
        </div>

        {/* Total Realised Gains */}
        <div className="pt-6 border-t border-white/20">
          <div className="flex items-center justify-between">
            <span className="text-xl font-semibold">Total Realised Gains</span>
            <div className={`text-3xl font-black ${gains.realisedGains >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
              {gains.realisedGains >= 0 ? '+' : ''}₹{formatCurrency(Math.abs(gains.realisedGains))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GainsCard;