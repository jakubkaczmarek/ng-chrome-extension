import { PopupComponent } from './popup/popup.component';
import { EventPageComponent } from './event-page/event-page.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: 'homepage', component: HomepageComponent },
    { path: 'event-page', component: EventPageComponent },
    { path: 'popup', component: PopupComponent },
    { path: '', redirectTo: 'homepage', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule { }