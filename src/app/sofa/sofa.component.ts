import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../footer/footer.component';


@Component({
  selector: 'app-sofa',
  standalone: true,
  imports: [CommonModule, FooterComponent],
  templateUrl: './sofa.component.html',
  styleUrl: './sofa.component.css',
})
export class SofaComponent  {

}
