import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AuthState } from "./reducers";

export const selectAuthState = createFeatureSelector<AuthState>("auth");

export const isLoggedIn = createSelector(  // a selector is a mapping function that has memorization
    selectAuthState,
    (auth) => !!auth.user
);

export const isLoggedOut = createSelector(
    isLoggedIn,
    loggedIn => !loggedIn
);