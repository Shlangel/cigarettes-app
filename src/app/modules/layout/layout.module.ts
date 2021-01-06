import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SideLayoutComponent } from './side-layout/side-layout.component';

@NgModule({
  declarations: [SideLayoutComponent],
  imports: [CommonModule, MatSidenavModule],
  exports: [SideLayoutComponent],
})
export class LayoutModule {}
