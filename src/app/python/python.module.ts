import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { PyBasicsComponent } from './pybasics/pybasics.component';
import { PyhtonRoutingModule } from './python.routing.module';

@NgModule({
  imports: [SharedModule, PyhtonRoutingModule],
  declarations: [PyhtonRoutingModule.components],
  exports: [PyBasicsComponent],
})
export class PythonModule {}
