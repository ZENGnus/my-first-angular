import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TabledetailComponent } from './components/tabledetail/tabledetail.component';

export const routes: Routes = [
    {path:'home', component:HomeComponent},
    {path:'tabledetail',component:TabledetailComponent},
    {path:'**',redirectTo:'home'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule { }
