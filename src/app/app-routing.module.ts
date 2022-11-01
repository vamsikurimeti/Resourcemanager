import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddResourcesComponent } from './add-resources/add-resources.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ResourceDetailsComponent } from './resource-details/resource-details.component';
import { SignupComponent } from './signup/signup.component';
import { TdfComponent } from './tdf/tdf.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  {path:'',redirectTo:'/login',pathMatch:'full'},
  {path:"login",component:LoginComponent},
  {path:"home",component:HomeComponent},
  {path:"tdf",component:TdfComponent},
  {path:"signup",component:SignupComponent},
  {path:"update/:id",component:UpdateComponent},
  {path:"resources",component:AddResourcesComponent},
  {path:"resourceDetails",component:ResourceDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
