import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { EventsComponent } from './events.component';


@NgModule({
  imports: [
    ThemeModule,
  ],
  declarations: [
    EventsComponent,
  ],
})
export class EventsModule { }
