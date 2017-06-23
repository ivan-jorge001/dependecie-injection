import { PriceServiceService } from '../price-service-demo/price-service.service';

export class Product {
  service: PriceServiceService; basePrice: number;
  constructor(basePrice: number) {
    this.service = new PriceServiceService(); // <-- create directly ("hardcoded") this.basePrice = basePrice;
  }
  totalPrice(state: string) {
    return this.service.calculateTotalPrice(this.basePrice, state);
  }
}
sss
