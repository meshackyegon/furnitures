import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-occasional',
  standalone: true,
  imports: [CommonModule,FooterComponent],
  templateUrl: './occasional.component.html',
  styleUrl: './occasional.component.css',
})
export class OccasionalComponent {}
