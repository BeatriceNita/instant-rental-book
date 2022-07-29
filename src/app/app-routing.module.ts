import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ToolbarComponent } from './main/toolbar/toolbar.component';
import { DashboardComponent } from './main/dashboard/dashboard.component';
import { BookingsComponent } from './main/bookings/bookings.component';
import { LoginComponent } from './core/auth/components/login.component';
import { IsAuthenticatedGuard } from './core/auth/guards/is-authenticated.guard';

const routes: Routes = [
    { path: '',
      component: ToolbarComponent,
      canActivate: [IsAuthenticatedGuard],
      children:
      [
        { path: 'dashboard', component: DashboardComponent },
        { path: 'bookings', component: BookingsComponent }
      ],
    },
    { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
