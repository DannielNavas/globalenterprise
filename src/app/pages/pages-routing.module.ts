import { SegurosComponent } from './components/seguros/seguros.component';
import { OutsorsingComponent } from './components/outsorsing/outsorsing.component';
import { CateringComponent } from './components/catering/catering.component';
import { LandingpageComponent } from './components/landingpage/landingpage.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavigationComponent } from './components/navigation/navigation.component';


const routes: Routes = [
  {
    path: '',
    component: NavigationComponent,
    children: [
      {
        path: '',
        component: LandingpageComponent
      },
      {
        path: 'catering',
        component: CateringComponent
      },
      {
        path: 'outsorcing',
        component: OutsorsingComponent
      },
      {
        path: 'seguros',
        component: SegurosComponent
      },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
