import { NgOptimizedImage } from '@angular/common';
import { Component, inject } from '@angular/core';

import { ThemeService } from '@services/theme.service';

@Component({
  selector: 'spinner-logo',
  standalone: true,
  imports: [
    NgOptimizedImage,
  ],
  template:`
  <div class="container">
    <img
          [ngSrc]="'../../../../assets/theme/'+themeService.GetTheme+'/gif/spinner-logo.gif'"
          priority
          width="150"
          height="150"
          alt="spinner logo"
      >
  </div>
  `,
  styles: `
  .container {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  `
})
export class SpinnerLogoComponent {
  
  public themeService = inject( ThemeService );
}
