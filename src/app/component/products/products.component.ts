import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  public products = [
    {
      productId: '001',
      productName: 'White Basmathi Rice',
      createdDate: 'Jan 29, 2023',
      unitPrice: 'Rs. 400',
      quantity: 100,
      productDescription: 'White Basmathi Rice imported from Pakistan',
    },
    {
      productId: '002',
      productName: 'Flour',
      createdDate: 'Jan 29, 2023',
      unitPrice: 'Rs. 190',
      quantity: 50,
      productDescription: 'Super Fine whole grain general purpose flour',
    },
    {
      productId: '003',
      productName: 'Sugar',
      createdDate: 'Jan 29, 2023',
      unitPrice: 'Rs. 200',
      quantity: 1200,
      productDescription: 'White sugar manufactured by Palwatte Factory',
    },
    {
      productId: '004',
      productName: 'White Basmathi Rice',
      createdDate: 'Jan 29, 2023',
      unitPrice: 'Rs. 200',
      quantity: 10,
      productDescription: 'Imported mysoor dahl from India',
    },
  ];

  // public isLowInventory = false;
  // public dahlStorage = 10;

  // public getDahlStorage() {
  //   if (this.dahlStorage < 50) {
  //     this.isLowInventory = true;
  //   }
  //   return this.dahlStorage;
  // }
}
