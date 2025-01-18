import { Component } from '@angular/core';

import { ThemeToggleComponent } from "../../../shared/components/theme-toggle/theme-toggle.component";
import { ChangeLanguageDropdownComponent } from "../../../shared/components/change-language-dropdown/change-language-dropdown.component";

@Component({
  selector: 'app-about',
  imports: [ThemeToggleComponent, ChangeLanguageDropdownComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export default class AboutComponent {

}
