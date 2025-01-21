import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { NavbarHeaderComponent } from "../shared/components/navbar-header/navbar-header.component";
import { FooterPageComponent } from "../shared/components/footer-page/footer-page.component";

@Component({
  selector: 'app-website',
  imports: [
    RouterOutlet,
    NavbarHeaderComponent,
    FooterPageComponent
],
  templateUrl: './website.component.html',
  styleUrl: './website.component.css'
})
export default class WebsiteComponent {

}
