import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { UnauthorizedComponent } from './features/unauthorized/unauthorized.component';
import { authGuard } from './core/Guards/auth.guard';

const routes: Routes = [

  { path: '', component: DashboardComponent, canActivate: [authGuard] },
  { path: 'unauthorized', component: UnauthorizedComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
