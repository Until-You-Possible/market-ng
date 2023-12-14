import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "../pages/home/home.component";
import {LoginComponent} from "../pages/login/login.component";
import {TestComponent} from "../pages/test/test.component";

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: '/home',
  //   pathMatch: 'full'
  // },
  {
    path: "home",
    component: HomeComponent
  },

  {
    path: "login",
    component: LoginComponent
  },
  {
    path: 'test',
    component : TestComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
