import { createAction, props } from "@ngrx/store";
import { User } from "./model/user.model";

export const login = createAction(
    "[Login Page] User Login", // [Source] Event/Command
    props<{user: User}>()
);

const newLoginAction = login({user: {id: '1', email: ''}});