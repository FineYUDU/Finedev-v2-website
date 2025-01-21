import { Routes } from '@angular/router';
import { Page404Component } from '@shared/views/page404/page404.component';

export const routes: Routes = [
    {
        path:'',
        loadComponent:()=> import('./website/website.component'),
        children:[
            {
                path:'about',
                title:'About',
                data:{translate:'menu.about'},
                loadComponent:()=> import('./website/views/about/about.component')
            },
            {
                title:'Experience',
                data:{translate:'menu.experience'},
                path:'experience',
                loadComponent:()=> import('./website/views/experience/experience.component')
            },
            {
                title:'Contact',
                data:{translate:'menu.contact'},
                path:'contact',
                loadComponent:()=> import('./website/views/contact/contact.component')
            },
            { path:'', redirectTo:'about', pathMatch:'full' }
        ]
    },
    {
        path:'404',
        component:Page404Component
    },
    { path:'', redirectTo:'', pathMatch:'full' },
    { path:'**', redirectTo:'/404', pathMatch:'full' }
];