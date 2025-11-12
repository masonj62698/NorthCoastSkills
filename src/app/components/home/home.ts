import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Header } from '../../shared/header/header';
import { Footer } from "../../shared/footer/footer";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, Header, Footer],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class HomeComponent {
}

