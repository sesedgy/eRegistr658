import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';

import { AppComponent }  from './app.component';
import {RegistrationComponent} from "./components/registration.component";
import {FileUploaderComponent} from './components/file-uploader.component';


const appRoutes: Routes =[
    { path: '', component: RegistrationComponent},
];

@NgModule({
    imports: [ BrowserModule, ReactiveFormsModule, FormsModule, RouterModule.forRoot(appRoutes)],
    declarations: [
        AppComponent,
        RegistrationComponent,
        FileUploaderComponent
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }