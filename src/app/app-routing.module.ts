import { NgModule } from '@angular/core';
//to use routing import this
import { RouterModule, Routes } from '@angular/router';
import { Activity1Component } from './activity1/activity1.component';
import { ChildComponent } from './child/child.component';
import { UserComponent } from './user/user.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path: '', redirectTo:'/user', pathMatch:'full'},
  {path:'user', component:UserComponent},
  {path: 'activity1', component: Activity1Component},
  {path: 'child', component: ChildComponent},
  // passing value route
  {path: 'child/:userId', component: ChildComponent},
  // wildcard Route
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
//export the components to route

