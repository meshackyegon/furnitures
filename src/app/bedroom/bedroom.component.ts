import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-bedroom',
  standalone: true,
  imports: [CommonModule, FooterComponent],
  templateUrl: './bedroom.component.html',
  styleUrl: './bedroom.component.css',
})
export class BedroomComponent {}
