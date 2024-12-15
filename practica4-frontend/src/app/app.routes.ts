import { Routes } from '@angular/router';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { RegisterComponent } from './auth/components/register/register.component';

export const routes: Routes = [
    {path: 'admin', loadChildren:()=>import('./admin/admin.module').then(adm=>adm.AdminModule)},
    {path: 'auth', loadChildren:()=>import('./auth/auth.module').then(aut=>aut.AuthModule)},
    //{path: 'register', loadChildren:()=>import('./auth/).then(reg=>reg.AuthModule)},
    //{ path: 'register', component: RegisterComponent }
    //{ path: 'forgot-password', component: ForgotPasswordComponent }
    //{path: 'utilities', loadChildren: () => import('./utilities/utilities.module').then(m => m.UtilitiesModule)}
];


