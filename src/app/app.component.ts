import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import * as data from '../assets/data.json';
import { OffcanvasComponent } from './components/offcanvas/offcanvas.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, OffcanvasComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  
  // Variables -----------------------------------------------
  
  title_items = {
    "name":"Kunal Maven Analytics Data Projects",
    "icon":"bi bi-bar-chart"
  };

  codebase_items = {
    "title":"Codebase",
    "icon":"bi bi-code-square",
    "items":[
      {
        "name":"Web Application", 
        "link":"https://github.com/kjeshang/kunal-maven-analytics-data-projects/tree/main"
      },
      {
        "name":"Data Analysis",
        "link":"https://github.com/kjeshang/KunalMavenAnalyticsDataPlayground/tree/main"
      }
    ]
  };

  mavenAnalytics_items = {
    "title":"Maven Analytics",
    "icon":"bi bi-database",
    "items":[
      {
        "name":"Home Page",
        "link":"https://www.mavenanalytics.io/"
      },
      {
        "name":"Data Playground",
        "link":"https://www.mavenanalytics.io/data-playground"
      }
    ]
  };
  
  searchTerm: string = '';

  // List Variables ------------------------------------------------------------

  items: any[] = (data as any).default;

  filteredItems: any[] = [];

  // Functions -----------------------------------------------------------------
  
  ngOnInit(): void {
    this.filteredItems = this.items;
  }

  onSearch(event: any): void {
    this.searchTerm = event.target.value;
    this.filterEntries();
  }

  filterEntries(): void {
    const lowerCaseTerm = this.searchTerm.toLowerCase();
    this.filteredItems = this.searchTerm ?
      this.items.filter(item =>
        item.name.toLowerCase().includes(lowerCaseTerm) ||
        item.description.toLowerCase().includes(lowerCaseTerm)
      ) : this.items;
  }

}
