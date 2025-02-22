import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, inject, signal } from '@angular/core';

import { LanguagePipe } from '@shared/pipes/language.pipe';

import { ThemeService } from '../../../core/services/theme.service';
import { LanguageService } from '../../../core/services/language.service';

import { ChangeLanguageDropdownComponent } from "../change-language-dropdown/change-language-dropdown.component";
import { RouterModule } from '@angular/router';
import { IconMenu, NavMenu } from '@shared/interfaces/menu.interfaces';

export interface LangMenu {
  text:string;
}

@Component({
  selector: 'fd-navbar-header',
  imports: [
    NgOptimizedImage,
    ChangeLanguageDropdownComponent,
    LanguagePipe,
    CommonModule,
    RouterModule,
    
],
  templateUrl: './navbar-header.component.html',
  styleUrl: './navbar-header.component.css',
  host:{
    class:'navbar-header__container'
  }
})
export class NavbarHeaderComponent {

  public themeService = inject( ThemeService );
  public languageService = inject( LanguageService );
  public isMovileMenuCollapse = signal<boolean>(true);
  public isMenuSettingsCollapse = signal<boolean>(true);

  public langsMenu = signal<LangMenu[]>([
    {
      text:'es'
    },
    {
      text:'en'
    },
  ]);
  public navigationMenu = signal<NavMenu[]>([
    {
      text:'menu.about',
      route:'about',
      icon:'home',
    },
    {
      text:'menu.experience',
      route:'experience',
      icon:'user',
    },
    {
      text:'menu.contact',
      route:'contact',
      icon:'email',
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
