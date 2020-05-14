import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartaoComponent } from './cartao/cartao.component';


const routes: Routes = [
  {
    path: '',
    component: CartaoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
