import { Routes, RouterModule } from '@angular/router';
import { NgModule }             from '@angular/core';

//Pages
import { AboutPage } from '../pages/about/about';
import { Header } from '../pages/header/header';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { ModalPage } from '../pages/modal/modal';


const routes: Routes = [
    {path: '', redirectTo: 'tabs', pathMatch: 'full' },
    {path:'header', component: Header},
    {path:'about', component: AboutPage},
    {path:'home', component: HomePage},
    {path:'modal', component: ModalPage},
    {path:'tabs', component: TabsPage}
];

@NgModule({
    imports: [ RouterModule.forRoot(routes, { useHash: false, enableTracing: true } ) ],
    exports: [ RouterModule ],
    providers: []
})

export class AppRoutingModule {};

