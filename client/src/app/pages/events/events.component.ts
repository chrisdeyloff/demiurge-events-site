import {Component, OnDestroy} from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { takeWhile } from 'rxjs/operators/takeWhile' ;

@Component({
  selector: 'demiurge-events',
  styleUrls: ['./events.component.scss'],
  templateUrl: './events.component.html',
})
export class EventsComponent implements OnDestroy {

  private alive = true;

  constructor(private themeService: NbThemeService) {
    this.themeService.getJsTheme()
      .pipe(takeWhile(() => this.alive))
      .subscribe(theme => {
    });
  }

  ngOnDestroy() {
    this.alive = false;
  }
}
