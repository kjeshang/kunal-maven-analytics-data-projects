import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'kunal-maven-analytics-data-projects';

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
    }
  ];
}
