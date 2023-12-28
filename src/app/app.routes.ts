import { Routes } from '@angular/router';
import { ReactiveFormAddMoreEditComponent } from './reactive-form-add-more-edit/reactive-form-add-more-edit.component';
import { ReactiveFormAddMoreComponent } from './reactive-form-add-more/reactive-form-add-more.component';
import { ReactiveFormAddMoreViewComponent } from './reactive-form-add-more-view/reactive-form-add-more-view.component';

export const routes: Routes = [
    {path:'app-reactive-form-add-more-edit', component: ReactiveFormAddMoreEditComponent},
    {path:'app-reactive-form-add-more', component: ReactiveFormAddMoreComponent},
    {path:'app-reactive-form-add-view', component: ReactiveFormAddMoreViewComponent}
];
