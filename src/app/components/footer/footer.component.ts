import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  message = "Feel free to connect with me!";
  link = "https://www.linkedin.com/in/kunaljeshang/";
  icon = "bi bi-linkedin";
}
