import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

export interface Product {
  id: number;
  name: string;
  description: string[];
  price: number;
}

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.html',
  styleUrls: ['./products.scss']
})
export class Products {
  @Input() product!: Product;
}
