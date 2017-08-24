import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { WorkComponent } from './work/work.component';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent
  },
  {
    path: 'work',
    component: WorkComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
