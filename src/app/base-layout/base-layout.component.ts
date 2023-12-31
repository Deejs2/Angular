import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { ReactiveFormAddMoreComponent } from '../reactive-form-add-more/reactive-form-add-more.component';
import { ReactiveFormAddMoreViewComponent } from '../reactive-form-add-more-view/reactive-form-add-more-view.component';
import { HttpHandlerService } from '../services/http-handler.service';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-base-layout',
  standalone: true,
  imports: [HeaderComponent, SidebarComponent, RouterOutlet, RouterLink, RouterLinkActive, ReactiveFormAddMoreComponent, ReactiveFormAddMoreViewComponent, HttpClientModule, ReactiveFormsModule],
  templateUrl: './base-layout.component.html',
  styleUrl: './base-layout.component.scss'
})
export class BaseLayoutComponent {
    page = "Dashboard"

    constructor(private httpService: HttpHandlerService){}
    
}
