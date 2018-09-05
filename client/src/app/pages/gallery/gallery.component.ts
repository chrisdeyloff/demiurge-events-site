import {Component, OnDestroy, OnInit } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { takeWhile } from 'rxjs/operators/takeWhile' ;
import { GalleryService } from '../../@core/data/gallery.service';

@Component({
  selector: 'demiurge-gallery',
  styleUrls: ['./gallery.component.scss'],
  templateUrl: './gallery.component.html',
})
export class GalleryComponent implements OnDestroy, OnInit {

  private alive = true;
  private fileNames: String[];

  constructor(
    private themeService: NbThemeService,
    private galleryService: GalleryService
  ) {
    this.themeService.getJsTheme()
      .pipe(takeWhile(() => this.alive))
      .subscribe(theme => {
    });
  }

  ngOnInit() {
    this.fileNames = this.galleryService.getData();
  }

  ngOnDestroy() {
    this.alive = false;
  }
}
