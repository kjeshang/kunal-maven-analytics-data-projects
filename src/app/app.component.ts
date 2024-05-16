import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  // Variables -----------------------------------------------
  title = "Kunal Maven Analytics Data Projects";
  
  searchTerm: string = '';

  // List Variables ------------------------------------------------------------

  items: any[] = [
    {
      name:"Inc 5000 Companies",
      description:"Dataset containing information about each company on the 2019 INC 5000 list.",
      logo:"https://github.com/kjeshang/KunalMavenAnalyticsDataPlayground/blob/main/INC_5000_Companies/INC_5000_Companies_Logo.jpg?raw=true",
      project_link:"https://github.com/kjeshang/KunalMavenAnalyticsDataPlayground/tree/main/INC_5000_Companies",
      tags:["Geospatial","Finance"],
      data_structure:"Single table",
      num_records:5000,
      num_fields:14,
      date_added:"2020-09-09"
    },
    {
      name:"Movie Ratings",
      description:"Ratings and reviews for 15,000+ movies reviewed by Rotten Tomatoes.",
      logo:"https://github.com/kjeshang/KunalMavenAnalyticsDataPlayground/blob/main/Movie_Ratings/Logo.png?raw=true",
      project_link:"https://github.com/kjeshang/KunalMavenAnalyticsDataPlayground/tree/main/Movie_Ratings",
      tags:["Entertainment"],
      data_structure:"Single table",
      num_records:16638,
      num_fields:17,
      date_added:"2020-09-09"
    }
  ];

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
