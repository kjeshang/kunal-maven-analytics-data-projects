import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-offcanvas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './offcanvas.component.html',
  styleUrl: './offcanvas.component.scss'
})
export class OffcanvasComponent {

  explanation = "Look at the links below to see more projects!";

  list_group_items = [
    {
      "name":"Portolio",
      "link":"https://kjeshang.github.io/",
      "icon":"bi bi-journal-code"
    },
    {
      "name":"GitHub",
      "link":"https://github.com/kjeshang",
      "icon":"bi bi-github"
    },
    {
      "name":"WordPress",
      "link":"https://kunaljeshang.wordpress.com/",
      "icon":"bi bi-wordpress"
    }
  ];
}
