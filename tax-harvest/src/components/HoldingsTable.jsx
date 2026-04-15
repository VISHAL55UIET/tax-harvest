import React from 'react';
import SelectAllHeader from './SelectAllHeader';
import HoldingRow from './HoldingRow';

const HoldingsTable = ({ 
  holdings, 
  selectedHoldings, 
  selectAll, 
  toggleHolding, 
  toggleSelectAll,
  isHoldingSelected 
}) => {
  const selectedCount = selectedHoldings.length;
  const totalCount = holdings.length;

  return (
    <div className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-2xl border border-slate-200/50 overflow-hidden">
      {/* Header with Select All */}
      <SelectAllHeader 
        selectAll={selectAll}
        toggleSelectAll={toggleSelectAll}
        selectedCount={selectedCount}
        totalCount={totalCount}
      />

      {/* Table Headers - Sticky */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-6 gap-6 px-6 py-4 bg-gradient-to-r from-slate-50 to-slate-100/50 border-b border-slate-200 text-sm font-semibold text-slate-600 tracking-tight uppercase">
        <div className="col-span-1 lg:col-span-2 flex items-center gap-4 font-bold">
          <span>Asset</span>
        </div>
        
        <div className="hidden lg:block text-center">Holdings</div>
        
        <div className="text-right col-span-1 xl:col-span-1 font-bold">Current Price</div>
        <div className="text-center hidden xl:block">STCG</div>
        <div className="text-center hidden xl:block">LTCG</div>
        <div className="text-center hidden xl:block">Category</div>
        <div className="text-right font-bold col-span-1 xl:col-span-1">Sell Amount</div>
      </div>

      {/* Holdings Rows */}
      <div className="max-h-[600px] overflow-y-auto">
        {holdings.map((holding) => (
          <HoldingRow
            key={holding.id}
            holding={holding}
            isSelected={isHoldingSelected(holding.id)}
            onToggle={toggleHolding}
          />
        ))}
      </div>

      {/* Footer Summary */}
      {selectedCount > 0 && (
        <div className="bg-gradient-to-r from-emerald-500/10 to-emerald-600/10 border-t border-emerald-200/50 p-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-sm">
            <div className="flex items-center gap-3 font-semibold text-emerald-800">
              <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></div>
              <span>{selectedCount} assets selected</span>
            </div>
            
            <div className="flex items-center gap-6 text-emerald-700 font-semibold">
              <div>Total Sell Value: ₹{selectedHoldings.reduce((sum, h) => sum + (h.quantity * h.currentPrice), 0).toLocaleString()}</div>
              <div className="bg-emerald-500/20 px-4 py-2 rounded-xl border border-emerald-500/30">
                Harvest Now
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HoldingsTable;