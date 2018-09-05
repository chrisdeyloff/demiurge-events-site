import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { HomeModule } from './home/home.module';
import { EventsModule } from './events/events.module';
import { GalleryModule } from './gallery/gallery.module';
import { AboutModule } from './about/about.module';
import { PagesRoutingModule } from './pages-routing.module';
import { ThemeModule } from '../@theme/theme.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';

const PAGES_COMPONENTS = [
  PagesComponent,
];

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    HomeModule,
    EventsModule,
    GalleryModule,
    AboutModule,
    MiscellaneousModule,
  ],
  declarations: [
    ...PAGES_COMPONENTS,
  ],
})
export class PagesModule {
}
