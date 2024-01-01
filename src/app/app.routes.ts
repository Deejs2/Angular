import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormAddMoreEditComponent } from './reactive-form-add-more-edit/reactive-form-add-more-edit.component';
import { ReactiveFormAddMoreComponent } from './reactive-form-add-more/reactive-form-add-more.component';
import { ReactiveFormAddMoreViewComponent } from './reactive-form-add-more-view/reactive-form-add-more-view.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReactiveFormViewByIdComponent } from './reactive-form-view-by-id/reactive-form-view-by-id.component';

export const routes: Routes = [
    {path:'app-reactive-form-add-more-edit', component: ReactiveFormAddMoreEditComponent},
    {path:'app-reactive-form-add-more', component: ReactiveFormAddMoreComponent},
    {path:'app-reactive-form-add-view', component: ReactiveFormAddMoreViewComponent},
    {path:'dashboard', component: DashboardComponent},
    {path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    {path: 'app-reactive-form-view-by-id/:id', component: ReactiveFormViewByIdComponent},
    {path: 'app-reactive-form-view/:id', component: ReactiveFormAddMoreViewComponent}
];
