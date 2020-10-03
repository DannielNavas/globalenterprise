import { MaterialModule } from './../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { LandingpageComponent } from './components/landingpage/landingpage.component';
import { CateringComponent } from './components/catering/catering.component';
import { OutsorsingComponent } from './components/outsorsing/outsorsing.component';
import { SegurosComponent } from './components/seguros/seguros.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { SharedModule } from './../shared/shared.module';

@NgModule({
  declarations: [
    LandingpageComponent,
    CateringComponent,
    OutsorsingComponent,
    SegurosComponent,
    NavigationComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    MaterialModule,
    
  ]
})
export class PagesModule { }
