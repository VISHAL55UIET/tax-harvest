import React from 'react';

const HoldingRow = ({ holding, isSelected, onToggle }) => {
  const getGainColor = (gain) => {
    if (gain > 0) return 'text-green-600 bg-green-100/50';
    if (gain < 0) return 'text-red-600 bg-red-100/50';
    return 'text-slate-500 bg-slate-100/50';
  };

  const getCategoryBadge = (category) => {
    const badges = {
      STCG: 'bg-yellow-100 text-yellow-800',
      LTCG: 'bg-purple-100 text-purple-800',
      STCL: 'bg-red-100 text-red-800',
    };
    return badges[category] || 'bg-slate-100 text-slate-800';
  };

  const sellAmount = holding.quantity * holding.currentPrice;

  return (
    <div className={`group hover:bg-slate-50/50 border-b border-slate-100 last:border-b-0 p-6 transition-all duration-200 hover:shadow-sm ${isSelected ? 'bg-blue-50/70 border-blue-200' : ''}`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4 flex-1 min-w-0">
          {/* Checkbox */}
          <label className="flex-shrink-0">
            <input
              type="checkbox"
              checked={isSelected}
              onChange={() => onToggle(holding.id)}
              className="w-5 h-5 rounded-lg text-blue-600 focus:ring-blue-500 border-2 border-slate-300 focus:ring-2 focus:ring-offset-2 transition-all duration-200 hover:scale-105"
            />
          </label>

          {/* Asset Info */}
          <div className="flex items-center gap-3 min-w-0 flex-1">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg">
              <span className="font-bold text-white text-lg">{holding.symbol.slice(0, 3)}</span>
            </div>
            <div className="min-w-0 flex-1">
              <div className="font-semibold text-slate-900 truncate">{holding.name}</div>
              <div className="text-sm text-slate-500">{holding.symbol}</div>
            </div>
          </div>

          {/* Holdings & Price */}
          <div className="text-center hidden md:block">
            <div className="font-mono font-semibold text-slate-900">
              {holding.quantity.toLocaleString()}
            </div>
            <div className="text-xs text-slate-500">Qty</div>
          </div>

          <div className="text-right">
            <div className="font-mono font-semibold text-lg text-slate-900">
              ₹{holding.currentPrice.toLocaleString()}
            </div>
            <div className="text-xs text-slate-500 font-mono">
              Avg: ₹{holding.avgBuyPrice.toLocaleString()}
            </div>
          </div>

          {/* STCG */}
          <div className={`px-3 py-1 rounded-full text-sm font-semibold ${getGainColor(holding.stcg)}`}>
            {holding.stcg >= 0 ? '+' : ''}₹{Math.abs(holding.stcg).toLocaleString()}
          </div>

          {/* LTCG */}
          <div className={`px-3 py-1 rounded-full text-sm font-semibold ${getGainColor(holding.ltcg)}`}>
            {holding.ltcg >= 0 ? '+' : ''}₹{Math.abs(holding.ltcg).toLocaleString()}
          </div>

          {/* Category Badge */}
          <div className={`px-3 py-1 rounded-full text-xs font-semibold ${getCategoryBadge(holding.category)}`}>
            {holding.category}
          </div>

          {/* Sell Amount */}
          <div className="text-right font-mono font-semibold text-lg text-slate-900">
            ₹{sellAmount.toLocaleString()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HoldingRow;