import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: 'home', loadChildren: './home/home.module#HomeModule' },
    { path: 'usuario', loadChildren: './usuario/usuario.module#UsuarioModule' },
    { path: '', pathMatch: 'full', redirectTo:'/home' },
]

@NgModule({
  declarations: [],
  exports: [ RouterModule ],
  imports: [
    RouterModule.forRoot(routes, { useHash: true })
  ]
})
export class AppRoutingModule { }