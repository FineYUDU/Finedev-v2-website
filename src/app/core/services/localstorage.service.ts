import { Injectable} from '@angular/core';
@Injectable({providedIn: 'root'})
export class LocalStorageService {
    constructor() {

        let lang =  localStorage.getItem('lang') || 'en';    
        const currentLang = localStorage.getItem('lang');
        if(!currentLang) localStorage.setItem('lang','en');

        let theme = localStorage.getItem('theme') || 'dark';
        const currentTheme = localStorage.getItem('theme');
        if(!currentTheme) localStorage.setItem('theme', 'dark');

        document.body.classList.toggle('theme--dark',theme === 'dark');
        document.body.classList.toggle('theme--light',theme === 'light');    
    }
}