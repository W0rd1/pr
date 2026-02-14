import { Component, OnInit } from '@angular/core';
import { ProductList } from '../products/product-list/product-list';
import { ProductService } from '../../services/product';

@Component({
  selector: 'app-home',
  imports: [ProductList],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  products: any[] = [];
  constructor(private productService: ProductService) {}
  ngOnInit() {
    this.productService.getProducts().subscribe((res: any) => {
      this.products = res.products;
    });
  }
}
