import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, ElementRef, inject, signal } from '@angular/core';

import { enviroment } from '../../../../enviroments/enviroment';

import { LanguagePipe } from '@shared/pipes/language.pipe';

import { LanguageService } from '@services/language.service';
import { ThemeService } from '@services/theme.service';


@Component({
  selector: 'fd-change-language-dropdown',
  standalone: true,
  imports: [
    LanguagePipe,
    NgOptimizedImage,
    CommonModule,
  ],
  templateUrl: './change-language-dropdown.component.html',
  styleUrl: './change-language-dropdown.component.css',
  host: {
    '(document:click)':'onClick($event)',
  },
})
export class ChangeLanguageDropdownComponent {

  public languageService = inject( LanguageService );
  public themeService = inject( ThemeService );
  private _el = inject( ElementRef );

  public isDropdownOpen = signal<boolean>(false);

  collapseTranslate():void {
    this.isDropdownOpen.set(!this.isDropdownOpen());
  }

  onClick(event: MouseEvent) { 
    !this.isClickInsideComponent(event) ? this.isDropdownOpen.set(false) : undefined 
  }

  isClickInsideComponent(event: MouseEvent): boolean {
    const mainContElement = this._el.nativeElement.querySelector('.change-language__container');
    return mainContElement.contains(event.target as Node);
  }

}
