import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AtuhService } from "./auth.service";

@Injectable()
export class AuthGuardService implements CanActivate {
    constructor(private authService: AtuhService, private router: Router){

    }

    canActivate(route: ActivatedRouteSnapshot, 
                state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {


        return this.authService.isAuthenticated().then(
            (autheticated: boolean) => {
                if(autheticated){
                    return true;
                }
                else
                {
                    this.router.navigate(["/"]);
                }
            }
        );
    }
}