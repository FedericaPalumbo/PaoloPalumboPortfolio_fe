import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { ShowreelComponent } from './pages/showreel/showreel.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about-me', component: AboutMeComponent },
    { path: 'showreel', component: ShowreelComponent },
    { path: 'gallery', component: GalleryComponent },
    { path: 'contacts', component: ContactsComponent },
    { path: '**', redirectTo: '' },
];