import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from "@angular/router";
import { select, State, Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { isLoggedIn } from "./auth.selectors";
import { tap } from "rxjs/operators";

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private store: Store<State<any>>, private router: Router) {

    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        return this.store.pipe(
            select(isLoggedIn),
            tap(loggedIn => {
                if (!loggedIn) {
                    this.router.navigateByUrl('/login');
                }
            })
        );
    }

}