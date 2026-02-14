import { Component, OnInit } from '@angular/core';
import { ProductItem } from '../product-item/product-item';
import { ProductService } from '../../../services/product';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductItem, CommonModule],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
  products$!: Observable<any>;

  constructor(private productService: ProductService) {
    this.products$ = this.productService.getProducts();
  }
}
