export function moneyMask(currentValue: number): string {
  return currentValue.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
}
