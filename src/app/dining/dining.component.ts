import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-dining',
  standalone: true,
  imports: [CommonModule, FooterComponent],
  templateUrl: './dining.component.html',
  styleUrl: './dining.component.css',
})
export class DiningComponent {}
