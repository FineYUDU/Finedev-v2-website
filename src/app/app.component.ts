import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { LocalStorageService } from '@services/localstorage.service';
import { SpinnerLogoComponent } from "./shared/components/spinner-logo/spinner-logo.component";
import { LanguagePipe } from '@shared/pipes/language.pipe';
import { LanguageService } from './core/services/language.service';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet, 
    SpinnerLogoComponent,
    LanguagePipe,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  private localStorageService = inject( LocalStorageService );  
  public languageService = inject( LanguageService );  
}
