import { ChildTwoNestedComponent } from './child-two-nested';
import { ChildTwoComponent } from './child-two';
import { ChildOneComponent } from './child-one';
import { ComponentOne } from './component-one';
import { Routes, RouterModule } from '@angular/router';
import ComponentTwo from './component-two';

export const routes: Routes = [
  { path: '', redirectTo: 'component-one', pathMatch: 'full' },
  { path: 'component-one', component: ComponentOne},
  { path: 'component-two/:id', component:ComponentTwo  ,
    children: [
      { path: '', redirectTo: 'child-one', pathMatch: 'full' },
      { path: 'child-one', component: ChildOneComponent },
      { path: 'child-two', component: ChildTwoComponent,
        children: [
          { path: '', redirectTo: 'child-one', pathMatch: 'full' },
          { path: 'child-one', component: ChildOneComponent },
          { path: 'child-two-nested', component: ChildTwoNestedComponent }
        ]
      }
    ]
  }
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(routes);