import { Component } from '@angular/core';
import { ProductItem } from '../product-item/product-item';
import { ProductService } from '../../../services/product';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductItem, CommonModule],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
  products$!:Observable<any>;
  constructor(private service: ProductService) {
    this.products$ = this.service.getProducts();
  }
}
