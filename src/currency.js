export function currency (value, decimals, currency) {
  if (!currency) {
    currency = 'EUR'
  }
  return Intl.NumberFormat(undefined, {
    style: 'currency',
    currency: currency,
    currencyDisplay: 'symbol',
    minimumFractionDigits: decimals,
    maximumFractionDigit: decimals,
  }).format(value)
}
