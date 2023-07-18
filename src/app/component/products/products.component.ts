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
      unitPrice: '400',
      quantity: 100,
      productDescription:
        'White Basmathi Rice imported from Pakistan. High quality rice with extra fragnance. Organically grown.',
    },
    {
      productId: '002',
      productName: 'Flour',
      createdDate: 'Jan 29, 2023',
      unitPrice: '190',
      quantity: 50,
      productDescription: 'Super Fine whole grain general purpose flour',
    },
    {
      productId: '003',
      productName: 'Sugar',
      createdDate: 'Jan 29, 2023',
      unitPrice: '200',
      quantity: 1200,
      productDescription: 'White sugar manufactured by Palwatte Factory',
    },
    {
      productId: '004',
      productName: 'Dahl',
      createdDate: 'Jan 29, 2023',
      unitPrice: '200',
      quantity: 10,
      productDescription: 'Imported mysoor dahl from India',
    },
  ];

  showAddProduct: boolean;

  // public firstProductItemName = 'White Basmathi Rice';
  // public storage = 10;
  // public isLowInventory = true;
  // public isRowSelected: boolean;

  // public rowIndex: number;
  public rowIndex!: number;

  // // public getDahlStorage() {
  // //   if (this.dahlStorage < 50) {
  // //     this.isLowInventory = true;
  // //   }
  // //   return this.dahlStorage;
  // // }

  // public selectProduct(selectedRow) {
  //   this.isRowSelected = true;
  //   this.rowIndex = selectedRow;
  // }

  public selectedProduct(selectedRow: number) {
    this.rowIndex = selectedRow;
  }

  public showAddProduct() {
    this.showAddProduct = true;
  }

  public hideAddProduct() {
    this.showAddProduct = false;
  }
}
