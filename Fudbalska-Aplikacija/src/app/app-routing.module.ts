import { NgModule } from '@angular/core';
import { LigaComponent } from './liga/liga.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TimoviComponent } from './timovi/timovi.component';
import { TrenerComponent } from './trener/trener.component';
import { UtakmiceComponent } from './utakmice/utakmice.component';
import { IgraciComponent } from './igraci/igraci.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'igraci', component: IgraciComponent },
  { path: 'liga', component: LigaComponent },
  { path: 'timovi', component: TimoviComponent },
  { path: 'trener', component: TrenerComponent },
  { path: 'utakmice', component: UtakmiceComponent },
  { path: '*', component: HomeComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
