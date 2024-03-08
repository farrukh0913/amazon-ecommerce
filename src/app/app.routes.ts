import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { AboutComponent } from './about/about.component';
import { ContactUSComponent } from './contact-us/contact-us.component';
import { WhatWeDoComponent } from './what-we-do/what-we-do.component';
import { AdminLoginComponent } from './admin.login/admin.login.component';
import { SupervisorListComponent } from './supervisors/supervisor.list/supervisor.list.component';
import { AddEditSupervisorComponent } from './supervisors/add.edit.supervisor/add.edit.supervisor.component';
import { AuthGuardService as AuthGuard } from './services/auth-guard'; 
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
    },
    {
        path: 'supervisorList',
        canActivate: [AuthGuard],
        component: SupervisorListComponent
    },
    {
        path: 'addEditSupervisor',
        component: AddEditSupervisorComponent
    }
    
    
];
