import { Component, OnInit } from '@angular/core';

import { Chart, registerables } from 'chart.js';

Chart.register( ...registerables );

@Component({
  selector: 'app-experience-page',
  imports: [],
  templateUrl: './experience-page.component.html',
  styleUrl: './experience-page.component.css'
})
export default class ExperiencePageComponent implements OnInit {

  public config:any = {
    type: 'bar',
    data: {
      labels: ['Angular','.NET'],
      datasets: [
        {
          label: 'Typescript',
          data: [65, 59, 80, 81, 56, 55, 40],
          backgroundColor: ['rgba(255, 99, 132, 0.2)',],
          borderColor: ['rgb(255, 99, 132)',],
          borderWidth: 1
        },
        {
          label: 'Typescript',
          data: [65, 59, 80, 81, 56, 55, 40],
          backgroundColor: ['rgba(255, 159, 64, 0.2)'],
          borderColor: ['rgb(255, 159, 64)'],
          borderWidth: 1
        }
      ]
    },
    options: {
      aspectRatio:1,
      scales: {
        y: {
          beginAtZero: true
        }
      }
    },
  };

  public chart:any;

  ngOnInit(): void {
    this.chart = new Chart('MyChart',this.config)
  }

}
