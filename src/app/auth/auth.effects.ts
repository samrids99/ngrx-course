import { Injectable } from "@angular/core";
import { Actions } from "@ngrx/effects";

@Injectable()
export class AuthEffects {

    constructor(private actions$: Actions) {
        actions$.subscribe(action => {
            if (action.type == '[Login Page] User Login') {
                console.log('User login action was dispatched');
                localStorage.setItem('user', JSON.stringify(action['user']));
            }
        });
    }

}