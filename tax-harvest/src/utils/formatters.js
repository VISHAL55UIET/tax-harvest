export const formatCurrency = (value) => {
  return Math.abs(value).toLocaleString('en-IN', {
    maximumFractionDigits: 0
  });
};