import { Component } from '@angular/core';
import { BaseLayoutComponent } from './base-layout/base-layout.component';
import { HttpHandlerService } from './services/http-handler.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [BaseLayoutComponent],
  providers:[HttpHandlerService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
