import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuarioComponent } from './usuario.component';
import { UsuarioCadastroComponent } from './cadastro/usuario-cadastro.component';

const routes: Routes = [
    { path: '', component: UsuarioComponent },
    { path: 'add', component: UsuarioCadastroComponent },
    { path: 'editar/:_id', component: UsuarioCadastroComponent },
]

@NgModule({
  declarations: [],
  exports: [ RouterModule ],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class UsuarioRoutingModule { }