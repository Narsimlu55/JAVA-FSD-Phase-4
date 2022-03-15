import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
 // {"path":"register",component:RegisterComponent},
  //{"path":"switch",component:SwitchdemoComponent},
  //{"path":"pipes",component:PipesComponent},
 // {"path":"list",component:ProductlistComponent}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
