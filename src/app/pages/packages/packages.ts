import { Component } from '@angular/core';
import { Product, Products } from '../../components/products/products';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-packages',
  standalone: true,
  imports: [Products, CommonModule],
  templateUrl: './packages.html',
  styleUrls: ['./packages.scss'],
})
export class Packages {
  products: Product[] = [
  {
    id: 1,
    name: 'Middle School',
    description: [
      'Full access to all content on website',
      '1 hour assistance with creating highlight film'
    ],
    price: 800
  },
  {
    id: 2,
    name: 'Freshman',
    description: [
      'Full access to all content on website',
      '1 hour assistance with creating highlight film',
      'Ten ½ hour film sessions to review fundamentals or game film'
    ],
    price: 1500
  },
  {
    id: 3,
    name: 'JV',
    description: [
      'Full access to all content on website',
      '1 hour assistance with creating highlight film',
      'Ten total hours of film sessions to review fundamentals or game film'
    ],
    price: 2000
  },
  {
    id: 4,
    name: 'Varsity',
    description: [
      'Full access to all content on website',
      '1 hour assistance with creating highlight film',
      '15 total hours of film sessions to review fundamentals or game film'
    ],
    price: 3000
  },
  {
    id: 5,
    name: 'All-American',
    description: [
      'Full access to all content on website',
      '1 hour assistance with creating highlight film',
      '15 total hours of film sessions to review fundamentals or game film',
      '5 hours of in person training with Zach or Dustin',
      'Travel and times will need to be booked in advance'
    ],
    price: 0
  }
];

}
