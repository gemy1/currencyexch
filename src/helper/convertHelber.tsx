export function convert(from: number, to: number, amount: number) {
  const result = (to / from) * amount;
  return result;
}
