import React from 'react';

const SelectAllHeader = ({ selectAll, toggleSelectAll, selectedCount, totalCount }) => {
  return (
    <div className="flex items-center gap-4 p-6 bg-gradient-to-r from-slate-50 to-slate-100/50 border-b border-slate-200 sticky top-0 backdrop-blur-sm z-10">
      <label className="flex items-center gap-3 cursor-pointer group">
        <input
          type="checkbox"
          checked={selectAll}
          onChange={toggleSelectAll}
          className="w-5 h-5 rounded-lg text-blue-600 focus:ring-blue-500 border-2 border-slate-300 focus:ring-2 focus:ring-offset-2 transition-all duration-200 hover:scale-105"
        />
        <span className="font-medium text-slate-700 group-hover:text-slate-900 transition-colors">
          Select All ({selectedCount}/{totalCount})
        </span>
      </label>
      
      {selectedCount > 0 && (
        <div className="ml-auto text-sm text-slate-600 font-medium bg-blue-100 px-3 py-1 rounded-full">
          {selectedCount} assets selected for harvesting
        </div>
      )}
    </div>
  );
};

export default SelectAllHeader;