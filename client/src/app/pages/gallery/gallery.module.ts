import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { GalleryComponent } from './gallery.component';


@NgModule({
  imports: [
    ThemeModule,
  ],
  declarations: [
    GalleryComponent,
  ],
})
export class GalleryModule { }
