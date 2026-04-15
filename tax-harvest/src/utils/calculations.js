export const calculatePostHarvestingGains = (preGains, selectedHoldings) => {
  let stcgProfits = preGains.stcg.profits;
  let stcgLosses = preGains.stcg.losses;
  let ltcgProfits = preGains.ltcg.profits;
  let ltcgLosses = preGains.ltcg.losses;

  selectedHoldings.forEach(holding => {
    if (holding.stcg > 0) {
      stcgProfits += holding.stcg;
    } else if (holding.stcg < 0) {
      stcgLosses += Math.abs(holding.stcg);
    }
    
    if (holding.ltcg > 0) {
      ltcgProfits += holding.ltcg;
    } else if (holding.ltcg < 0) {
      ltcgLosses += Math.abs(holding.ltcg);
    }
  });

  const stcgNet = stcgProfits - stcgLosses;
  const ltcgNet = ltcgProfits - ltcgLosses;
  const realisedGains = stcgNet + ltcgNet;

  return {
    stcg: { profits: stcgProfits, losses: stcgLosses, net: stcgNet },
    ltcg: { profits: ltcgProfits, losses: ltcgLosses, net: ltcgNet },
    realisedGains
  };
};

export const calculateSavings = (preRealised, postRealised) => {
  return preRealised > postRealised ? preRealised - postRealised : 0;
};