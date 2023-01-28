import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PyAdvancedComponent } from './pyadvanced/pyadvanced.component';
import { PyBasicsComponent } from './pybasics/pybasics.component';
import { PyExpantionPanelComponent } from './pyexpantionpanel/pyexpantionpanel.component';
import { PyIntermediateComponent } from './pyintermediate/pyintermediate.component';

const routes: Routes = [
  { path: 'basics', component: PyBasicsComponent },
  { path: 'intermediate', component: PyIntermediateComponent },
  { path: 'advanced', component: PyAdvancedComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PyhtonRoutingModule {
  static components = [PyBasicsComponent, PyExpantionPanelComponent];
}
