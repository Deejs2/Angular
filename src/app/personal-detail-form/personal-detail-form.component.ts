import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-personal-detail-form',
  standalone: true,
  imports: [RouterOutlet, RouterModule, RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './personal-detail-form.component.html',
  styleUrl: './personal-detail-form.component.scss'
})
export class PersonalDetailFormComponent {
  title="Personal Details"
}
