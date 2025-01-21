import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LanguageService } from '@services/language.service';
import { ThemeService } from '@services/theme.service';
import { IconMenu, NavMenu } from '@shared/interfaces/menu.interfaces';
import { LanguagePipe } from '@shared/pipes/language.pipe';
import { enviroment } from '../../../../enviroments/enviroment';

@Component({
  selector: 'fd-footer-page',
  imports: [
    LanguagePipe,
    NgOptimizedImage,
    CommonModule,
    RouterModule,
  ],
  templateUrl: './footer-page.component.html',
  styleUrl: './footer-page.component.css',
  host:{
    class:'footer-page__container'
  }
})
export class FooterPageComponent {
  public themeService = inject(ThemeService);
  public languageService = inject(LanguageService);

  public companyName = signal<string>(enviroment.company);
  public softwareVersion = signal<string>(enviroment.version);

  public navigationMenu = signal<NavMenu[]>([
    {
      text:'menu.about',
      route:'about',
    },
    {
      text:'menu.experience',
      route:'experience',
    },
    {
      text:'menu.contact',
      route:'contact',
    },
  ]);

  public iconMenu = signal<IconMenu[]>([
    {
      icon:'github',
      url:'https://github.com/FineYUDU',
    },
    {
      icon:'linkedin',
      url:'https://www.linkedin.com/in/erick-alcocer-06ba2b149/',
    },
  ]);

}
