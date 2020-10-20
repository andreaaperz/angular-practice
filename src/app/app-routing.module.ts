import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  /* {path: '/', component: AppComponent},
  {path: '**', redirectTo: '/', pathMatch: 'full'} //Si no encuentra la ruta se va aquí */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
