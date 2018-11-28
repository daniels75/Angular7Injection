export interface IPriceService {
  calculateTotalPrice(basePrice: number, state: string): number;
  // updatePrice(price: number): void;
}
