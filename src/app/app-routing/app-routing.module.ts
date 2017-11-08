import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from '../app.component';
import { UserlistComponent } from '../userlist/userlist.component';
import { UserdetailsComponent } from '../userdetails/userdetails.component';
    
const routes: Routes = [
   { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: UserlistComponent  },
    { path: 'userlist', component: UserlistComponent },
    { path: 'userdetails/:id', component: UserdetailsComponent },
    { path: '**', redirectTo: 'home' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule { }