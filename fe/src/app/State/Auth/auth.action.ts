import { createAction, props } from '@ngrx/store';

// LOGIN Action BEGIN
export const login = createAction(
  '[Auth] Login',
  props<{ email: string; password: string }>()
);

export const loginSuccess = createAction(
  '[Auth] Login Success',
  props<{ user: any }>()
);

export const loginFailure = createAction(
  '[Auth] Login Failure',
  props<{ error: any }>()
);
// LOGIN Action END

// REGISTER Action BEGIN
export const register = createAction(
  '[Auth] Register',
  props<{ user: any }>()
);

export const registerSuccess = createAction(
  '[Auth] Register Success',
  props<{ user: any }>()
);

export const registerFailure = createAction(
  '[Auth] Register Failure',
  props<{ error: any }>()
);
// REGISTER Action END
