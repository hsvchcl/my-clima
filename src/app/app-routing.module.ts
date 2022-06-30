import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
  { path: 'clima', component: MainPageComponent },
  { path: '', redirectTo: '/clima', pathMatch: 'full' }, // redirect to `first-component`
  { path: '**', component: NotFoundComponent }, // Wildcard route for a 404 page];
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
