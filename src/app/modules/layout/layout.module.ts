import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SideLayoutComponent } from './side-layout/side-layout.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [SideLayoutComponent],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatIconModule
  ],
  exports: [SideLayoutComponent],
})
export class LayoutModule {}
