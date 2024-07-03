import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { SponsorListComponent } from './sponsor-list/sponsor-list.component';
import { SponsorFormComponent } from './sponsor-form/sponsor-form.component';
import { SponsorService } from './sponsor.service';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    SponsorListComponent,
    SponsorFormComponent,
    LoginComponent 
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, 
    NoopAnimationsModule ,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatCheckboxModule,
    ReactiveFormsModule
  ],
  providers: [SponsorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
