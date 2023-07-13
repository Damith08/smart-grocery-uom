import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  public firstProductItemName = 'White Basmathi Rice';
  public quantityOfRice = 75;

  public getQuantityOfRice() {
    return 350;
  }
}
