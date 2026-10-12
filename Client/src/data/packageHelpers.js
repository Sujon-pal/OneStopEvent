// Replace {p} with the chosen puja, and tweak wording for small pujas.
export function fillValue(value, puja) {
  if (value === null) return null
  const text = value.replace('{p}', puja?.name ?? 'your puja')
  return puja?.name.includes('Satyanarayan') ? text.replace('Idol and puja items', 'Puja items') : text
}

// Puja packages cost the tier price plus the chosen puja. No puja chosen yet means no price (null).
export function tierPrice(eventName, tier, puja) {
  if (eventName !== 'Puja') return tier.price
  return puja ? tier.price + puja.price : null
}