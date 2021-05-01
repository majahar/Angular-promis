import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PromiseComponent } from './promise/promise.component';
import { ObservableComponent } from './observable/observable.component';
import { ListComponent } from './observable/list/list.component';
import { FromEventComponent } from './observable/from-event/from-event.component';
import { IntervalComponent } from './observable/interval/interval.component';
import { OfFromComponent } from './observable/of-from/of-from.component';
import { CustomComponent } from './observable/custom/custom.component';
import { FormsComponent } from './observable/forms/forms.component';
import { MapComponent } from './observable/map/map.component';
import { SubjectComponent } from './observable/subject/subject.component';
import { ReplaySubjectComponent } from './observable/replay-subject/replay-subject.component';
import { ConcateComponent } from './observable/concate/concate.component';
import { MergeComponent } from './observable/merge/merge.component';



const routes: Routes = [
{path:'promise',component: PromiseComponent},
{path:'observable',component: ObservableComponent,children:[
  {path : '', component:ListComponent},
  {path : 'from-event', component:FromEventComponent},
  {path : 'interval', component:IntervalComponent},
  {path : 'of-from', component:OfFromComponent},
  {path : 'custom-observable', component:CustomComponent},
  {path : 'reactive-forms', component:FormsComponent},
  {path : 'map', component:MapComponent},
  {path : 'subject', component:SubjectComponent},
  {path : 'replay-subject', component:ReplaySubjectComponent},
  {path : 'concate', component:ConcateComponent},
  {path : 'merge', component:MergeComponent}
]},
{path:'**',redirectTo: 'promise'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
