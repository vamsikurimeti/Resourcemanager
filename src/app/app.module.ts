import { NgModule, CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CheckboxModule} from 'primeng/checkbox';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { PasswordModule } from "primeng/password";
import { DividerModule } from "primeng/divider";
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from "primeng/inputtext";
import { ButtonModule } from 'primeng/button';
import { MessageService } from 'primeng/api';
import {TableModule} from 'primeng/table';
import { RippleModule } from 'primeng/ripple';
import { UpdateComponent } from './update/update.component';
import { AddResourcesComponent } from './add-resources/add-resources.component';
import { ResourceDetailsComponent } from './resource-details/resource-details.component';
import { TdfComponent } from './tdf/tdf.component';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';
@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    UpdateComponent,
    AddResourcesComponent,
    ResourceDetailsComponent,
    TdfComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CheckboxModule,
    BrowserAnimationsModule,
    PasswordModule,
    DividerModule ,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    InputTextModule,
    ButtonModule,
    TableModule,
    RippleModule,
    ConfirmDialogModule,
    

  ],
  providers: [MessageService,ConfirmationService ],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA]
})
export class AppModule { }
