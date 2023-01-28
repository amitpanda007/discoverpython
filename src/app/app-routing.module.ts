import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PyBasicsComponent } from './python/pybasics/pybasics.component';

const routes: Routes = [{ path: '', component: PyBasicsComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
