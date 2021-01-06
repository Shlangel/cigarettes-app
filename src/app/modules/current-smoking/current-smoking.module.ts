import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CurrentPackComponent } from './current-pack/current-pack.component';

@NgModule({
  declarations: [CurrentPackComponent],
  imports: [CommonModule],
  exports: [CurrentPackComponent],
})
export class CurrentSmokingModule {}
