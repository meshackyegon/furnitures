import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../footer/footer.component';


@Component({
  selector: 'app-chairs',
  standalone: true,
  imports: [CommonModule, FooterComponent],
  templateUrl: './chairs.component.html',
  styleUrls: ['./chairs.component.css'],
})
export class ChairsComponent {
 
}
