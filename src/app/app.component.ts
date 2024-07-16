import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent} from '../app/navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { RouterLink, RouterLinkActive} from '@angular/router';
@Component({
  standalone: true,
  imports: [RouterModule,NavbarComponent, FooterComponent, ContentComponent, RouterLink, RouterLinkActive],  
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'furnitures';
}
