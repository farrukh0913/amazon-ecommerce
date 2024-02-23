import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

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
    }
    
    
];
