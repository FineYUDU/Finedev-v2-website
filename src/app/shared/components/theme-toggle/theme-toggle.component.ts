import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, inject, signal } from '@angular/core';

import { enviroment } from '../../../../enviroments/enviroment';

import { ThemeService } from '@services/theme.service';

@Component({
  selector: 'fd-theme-toggle',
  standalone: true,
  imports: [
    CommonModule,
    NgOptimizedImage,
  ],
  templateUrl: './theme-toggle.component.html',
  styleUrl: './theme-toggle.component.css',
  host: {
    class:'theme__container cursor--pointer transition--bg',
  }
})
export class ThemeToggleComponent {
  public themeService = inject( ThemeService );


}
