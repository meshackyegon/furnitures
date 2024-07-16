import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-homedecor',
  standalone: true,
  imports: [CommonModule, FooterComponent],
  templateUrl: './homedecor.component.html',
  styleUrl: './homedecor.component.css',
})
export class HomedecorComponent {}
