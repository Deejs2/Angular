import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  //  title = "Angular App"
   @Input() dataFromParent: string='';

   @Output() dataToParent = new EventEmitter<string>();

   sendData() {
    this.dataToParent.emit('This data is from Header Component(i.e child to layout-component)');
  }
}
