import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormAddMoreEditComponent } from './reactive-form-add-more-edit/reactive-form-add-more-edit.component';
import { ReactiveFormAddMoreComponent } from './reactive-form-add-more/reactive-form-add-more.component';
import { ReactiveFormAddMoreViewComponent } from './reactive-form-add-more-view/reactive-form-add-more-view.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReactiveFormViewByIdComponent } from './reactive-form-view-by-id/reactive-form-view-by-id.component';
import { PersonalDetailFormComponent } from './personal-detail-form/personal-detail-form.component';

export const routes: Routes = [
    
    {path:'dashboard', component: DashboardComponent},
    {path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    {
        path: 'personal-detail',
        component: PersonalDetailFormComponent,
        children: [
            {
                path: 'view-all',
                component: ReactiveFormAddMoreViewComponent
            },
            
            {path: '', redirectTo: 'view-all', pathMatch: 'full' },
            {
                path: 'view',
                component: ReactiveFormViewByIdComponent
            },
            {
                path:'add',
                component: ReactiveFormAddMoreComponent
            },
            {
                path:'edit',
                component: ReactiveFormAddMoreEditComponent
            }
        ]
    }
];
