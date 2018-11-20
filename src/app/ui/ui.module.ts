import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginLayoutComponent } from './layouts/login-layout/login-layout.component';
import { RouterModule } from '@angular/router';
import { CardsComponent } from './components/cards/cards.component';

@NgModule({
	declarations: [ LoginLayoutComponent, CardsComponent ],
	exports: [ LoginLayoutComponent, CardsComponent ],
	imports: [ CommonModule, RouterModule ]
})
export class UiModule {}
