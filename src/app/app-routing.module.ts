import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NotFoundComponent } from "./shared/not-found/not-found.component";
import { RobotModule } from "./components/robot/robot.module";


const appRoutes: Routes = [
  { path: '', loadChildren: () => RobotModule, },
  { path: 'robot', loadChildren: () => RobotModule, },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { relativeLinkResolution: "legacy" })],
  exports: [RouterModule],
})
export class AppRoutingModule { }
