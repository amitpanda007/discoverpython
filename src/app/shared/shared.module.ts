import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AnimatedIconComponent } from '../common/animated-icon.component';
import { FireworksComponent } from '../common/fireworks/fireworks.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@NgModule({
  imports: [MatIconModule, CommonModule, FormsModule],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSidenavModule,
    MatMenuModule,
    MatToolbarModule,
    MatTooltipModule,
    MatProgressBarModule,
    AnimatedIconComponent,
    FireworksComponent,
  ],
  declarations: [AnimatedIconComponent, FireworksComponent],
  providers: [],
})
export class SharedModule {}
