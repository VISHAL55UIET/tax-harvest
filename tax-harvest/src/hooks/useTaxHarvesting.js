import { useState, useCallback, useMemo } from 'react';
import { mockHoldings, mockPreGains } from '../utils/mockData';
import { calculatePostHarvestingGains, calculateSavings } from '../utils/calculations';

export const useTaxHarvesting = () => {
  const [preGains] = useState(mockPreGains);
  const [holdings] = useState(mockHoldings);
  const [selectedHoldings, setSelectedHoldings] = useState([]);
  const [selectAll, setSelectAll] = useState(false);

  const postGains = useMemo(() => 
    calculatePostHarvestingGains(preGains, selectedHoldings), 
    [preGains, selectedHoldings]
  );

  const savings = useMemo(() => 
    calculateSavings(preGains.realisedGains, postGains.realisedGains),
    [preGains.realisedGains, postGains.realisedGains]
  );

  const toggleHolding = useCallback((holdingId) => {
    setSelectedHoldings(prev => {
      const isSelected = prev.some(h => h.id === holdingId);
      if (isSelected) {
        return prev.filter(h => h.id !== holdingId);
      }
      const holding = holdings.find(h => h.id === holdingId);
      return [...prev, holding];
    });
  }, [holdings]);

  const toggleSelectAll = useCallback(() => {
    if (selectAll) {
      setSelectedHoldings([]);
    } else {
      setSelectedHoldings([...holdings]);
    }
    setSelectAll(!selectAll);
  }, [selectAll, holdings]);

  const isHoldingSelected = useCallback((holdingId) => {
    return selectedHoldings.some(h => h.id === holdingId);
  }, [selectedHoldings]);

  return {
    preGains,
    postGains,
    savings,
    holdings,
    selectedHoldings,
    selectAll,
    toggleHolding,
    toggleSelectAll,
    isHoldingSelected
  };
};