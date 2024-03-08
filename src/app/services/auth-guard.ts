import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";

@Injectable({
    providedIn: 'root',
})

export class AuthGuardService implements CanActivate {

    constructor(public router: Router) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        const login = localStorage.getItem("admin")
        if (!login) {
            this.router.navigate([
                'dashboard'
            ]);
            return false
        }
        return true
    }
}