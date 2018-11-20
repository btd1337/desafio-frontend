import { LoginComponent } from './user/login/login.component';
import { LoginLayoutComponent } from './ui/layouts/login-layout/login-layout.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		component: LoginLayoutComponent,
		children: [ { path: '', redirectTo: 'login', pathMatch: 'full' }, { path: 'login', component: LoginComponent } ]
	}
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}
