import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentPagesRoutingModule } from './content-pages-routing.module';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ContentPagesRoutingModule,
    FormsModule
  ],
  declarations: [LoginComponent]
})
export class ContentPagesModule { }
