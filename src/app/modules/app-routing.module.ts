import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { BioComponent } from '../bio/bio.component';
import { ContactComponent } from '../contact/contact.component';
import { CommonModule } from '@angular/common';
import { MaterialUIModule } from './material-ui.module';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'bio', component: BioComponent },
  { path: 'contact', component: ContactComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule,
    MaterialUIModule
  ],
  exports: [RouterModule],
  declarations: [
    HomeComponent,
    BioComponent,
    ContactComponent
  ]
})
export class AppRoutingModule { }
