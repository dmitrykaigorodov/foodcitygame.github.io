
const DAYS_PER_YEAR = 100

export const pricing = (base: number, split: number, yearGrowth: number) => {
  return (day: number) => {
    const buyPrice = base + (day - 1) * yearGrowth / DAYS_PER_YEAR
    const sellPrice = buyPrice * split

    return [
      buyPrice, sellPrice
    ]
  }
}

export const icecreamPricing = (day: number) => {
  return pricing(1.11, 1.25 / 1.11, 3)
}
