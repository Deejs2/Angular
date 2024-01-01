import { Component } from '@angular/core';
import { BaseLayoutComponent } from './base-layout/base-layout.component';
import { HttpHandlerService } from './services/http-handler.service';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [BaseLayoutComponent, RouterOutlet, HeaderComponent, SidebarComponent],
  providers:[HttpHandlerService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
