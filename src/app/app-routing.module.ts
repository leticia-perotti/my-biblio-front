import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { BemVindoComponent } from './bem-vindo/bem-vindo/bem-vindo.component';

const routes: Routes = [
  { path: '', component: BemVindoComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
