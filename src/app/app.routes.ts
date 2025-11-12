import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home';
import { LessonHubComponent } from './components/lesson-hub/lesson-hub';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'lessons', component: LessonHubComponent }

];
