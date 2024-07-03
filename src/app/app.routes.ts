import { Routes } from '@angular/router';
import { SponsorListComponent } from './sponsor-list/sponsor-list.component';
import { SponsorFormComponent } from './sponsor-form/sponsor-form.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    
    { path: 'sponsors', component: SponsorListComponent },
    { path: 'create-sponsor', component: SponsorFormComponent },
    {path: '', redirectTo: '/sponsors', pathMatch: 'full'},
    // { path: '', component: LoginComponent},
    { path: '**', redirectTo: '/sponsors' }
];
