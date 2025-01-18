import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { LocalStorageService } from '@services/localstorage.service';
import { LanguageService } from './core/services/language.service';

import { SpinnerLogoComponent } from "./shared/components/spinner-logo/spinner-logo.component";

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet, 
    SpinnerLogoComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  private localStorageService = inject( LocalStorageService );  
  public languageService = inject( LanguageService );  
}
