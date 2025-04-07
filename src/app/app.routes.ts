import { Routes } from '@angular/router';
import { EmailFormComponent } from './email-form/email-form.component';
import { CvComponent } from './cv/cv.component';

export const routes: Routes = [
  { path: '', component: CvComponent },
  { path: 'contact', component: EmailFormComponent }
];
