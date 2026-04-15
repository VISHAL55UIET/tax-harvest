const holdingsData = [
  {
    coin: "USDC",
    coinName: "USDC",
    currentPrice: 85.41,
    totalHolding: 1,
    averageBuyPrice: 1.5,
    stcg: { balance: 1, gain: 100 },
    ltcg: { balance: 0, gain: 0 }
  }
]; // 🔥 for now keep 1 item only (test)

const capitalGainsData = {
  capitalGains: {
    stcg: { profits: 70200.88, losses: 1548.53 },
    ltcg: { profits: 5020, losses: 3050 }
  }
};

export const fetchHoldings = () => {
  return Promise.resolve(holdingsData);
};

export const fetchCapitalGains = () => {
  return Promise.resolve(capitalGainsData);
};