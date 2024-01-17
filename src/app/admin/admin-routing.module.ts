import { NgModule } from "@angular/core";
import { Routes,RouterModule } from "@angular/router";
import { AdminLoginComponent } from "./admin-login/admin-login.component";
import { AdminListComponent } from "./admin-list/admin-list.component";
const route:Routes=[
    {path:'adminLogin',component:AdminLoginComponent},
    {path:'adminList',component:AdminListComponent}
]

@NgModule({
    imports: [RouterModule.forChild(route)],
    exports: [RouterModule]
  })
  export class AdminRouteModule { }