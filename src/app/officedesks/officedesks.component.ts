import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-officedesks',
  standalone: true,
  imports: [CommonModule, FooterComponent],
  templateUrl: './officedesks.component.html',
  styleUrl: './officedesks.component.css',
})
export class OfficedesksComponent {}
