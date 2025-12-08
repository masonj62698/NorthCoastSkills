import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home';
import { LessonHubComponent } from './components/lesson-hub/lesson-hub';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'lessons', component: LessonHubComponent },
    { path: 'inquiries', loadComponent: () => import('./pages/inquiries/inquiries').then(m => m.InquiryComponent) },
    { path: 'packages', loadComponent: () => import('./pages/packages/packages').then(m => m.Packages) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled' // restores to top on navigation
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }