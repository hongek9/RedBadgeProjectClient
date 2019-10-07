import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SelectionPageComponent } from './selection-page/selection-page.component';


const routes: Routes = [
  {path:'selectionPage', component: SelectionPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
