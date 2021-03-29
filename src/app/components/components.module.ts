import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { GridComponent } from './custom/grid/grid.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChartsModule } from 'ng2-charts';

import { App1Component } from './custom/app1/app1.component';
import { App2Component, NgbdSortableHeader } from './custom/app2/app2.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ChartsModule,
    NgbModule,
  ],
  declarations: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    GridComponent,
    App1Component,
    App2Component,
    NgbdSortableHeader,
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent
  ]
})
export class ComponentsModule { }
