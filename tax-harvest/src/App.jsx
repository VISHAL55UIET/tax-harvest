import React from 'react';
import { useTaxHarvesting } from './hooks/useTaxHarvesting';
import GainsCard from './components/GainsCard';
import HoldingsTable from './components/HoldingsTable';
import './index.css';

function App() {
  const {
    preGains,
    postGains,
    savings,
    holdings,
    selectedHoldings,
    selectAll,
    toggleHolding,
    toggleSelectAll,
    isHoldingSelected
  } = useTaxHarvesting();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-xl px-6 py-3 rounded-2xl shadow-xl border border-white/50 mb-6">
            <div className="w-3 h-3 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full"></div>
            <h1 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-slate-900 via-slate-700 to-slate-800 bg-clip-text text-transparent tracking-tight">
              Tax Loss Harvesting
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-slate-600 font-medium max-w-3xl mx-auto leading-relaxed">
            Optimise your capital gains tax by strategically selling loss-making assets to offset profits
          </p>
        </div>

        {/* Gains Cards */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <GainsCard 
            title="Pre-Harvesting" 
            gains={preGains} 
            variant="pre"
          />
          <GainsCard 
            title="After-Harvesting" 
            gains={postGains} 
            variant="post"
            savings={savings}
          />
        </div>

        {/* Holdings Table */}
        <div>
          <div className="bg-white/70 backdrop-blur-xl rounded-2xl p-8 shadow-2xl border border-slate-200/50 mb-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <h2 className="text-3xl font-black text-slate-900 tracking-tight">Portfolio Holdings</h2>
            </div>
            <HoldingsTable
              holdings={holdings}
              selectedHoldings={selectedHoldings}
              selectAll={selectAll}
              toggleHolding={toggleHolding}
              toggleSelectAll={toggleSelectAll}
              isHoldingSelected={isHoldingSelected}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;