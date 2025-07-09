import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDetail } from './components/user-detail/user-detail';
import { UserList } from './components/user-list/user-list';

export const routes: Routes = [
  { path: '', component: UserList },
  { path: 'user/:index', component: UserDetail },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
