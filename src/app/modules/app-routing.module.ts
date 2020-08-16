import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { BioComponent } from '../bio/bio.component';
import { ContactComponent } from '../contact/contact.component';
import { MusicServicesComponent } from '../music-services/music-services.component';
import { CommonModule } from '@angular/common';
import { MaterialUIModule } from './material-ui.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: BioComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'services', component: MusicServicesComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true
    }),
    CommonModule,
    MaterialUIModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [RouterModule],
  declarations: [
    HomeComponent,
    BioComponent,
    ContactComponent,
    MusicServicesComponent
  ]
})
export class AppRoutingModule { }
