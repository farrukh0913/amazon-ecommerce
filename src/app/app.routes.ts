import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { AboutComponent } from './about/about.component';
import { ContactUSComponent } from './contact-us/contact-us.component';
import { WhatWeDoComponent } from './what-we-do/what-we-do.component';
import { AdminLoginComponent } from './admin.login/admin.login.component';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'dashboard'
    },
    {
        path: 'dashboard',
        component: LayoutComponent
    },
    {
        path: 'productDetails',
        component: ProductDetailsComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'contact',
        component: ContactUSComponent
    },
    {
        path: 'whatwedo',
        component: WhatWeDoComponent
    },
    {
        path: 'adminLogin',
        component: AdminLoginComponent
    }
    
    
];
