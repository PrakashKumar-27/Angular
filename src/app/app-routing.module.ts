import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompanyDetailComponent } from './components/company-detail/company-detail.component';
import { CompanyAddComponent } from './components/company-add/company-add.component';
import { CompanyEditComponent } from './components/company-edit/company-edit.component';
const routes: Routes = [
  {
    path: 'company-details/:id',
    component: CompanyDetailComponent,
    data: { title: 'Company Details' }
  },
  {
    path: 'company-add',
    component: CompanyAddComponent,
    data: { title: 'Add Company' }
  },
  {
    path: 'company-edit/:id',
    component: CompanyEditComponent,
    data: { title: 'Edit Company' }
  },
  { path: '',
    redirectTo: '/companies',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
