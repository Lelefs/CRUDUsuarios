import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EstadosComponent } from './estados.component';

const routes: Routes = [
    { path: '', component: EstadosComponent }
]

@NgModule({
  declarations: [],
  exports: [ RouterModule ],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class EstadosRoutingModule { }