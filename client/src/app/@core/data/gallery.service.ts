import { Injectable } from '@angular/core';

@Injectable()
export class GalleryService {

  private fileNames = [
    'WNCD-1.jpg',
    'WNCD-2.jpg',
    'WNCD-3.jpg',
    'WNCD-4.jpg',
    'WNCD-5.jpg',
    'WNCD-6.jpg',
    'WNCD-7.jpg',
    'WNCD-8.jpg',
    'WNCD-9.jpg',
    'WNCD-10.jpg',
    'WNCD-11.jpg',
    'WNCD-12.jpg',
    'WNCD-13.jpg',
    'WNCD-14.jpg',
    'WNCD-15.jpg',
    'WNCD-16.jpg',
    'WNCD-17.jpg',
    'WNCD-18.jpg',
    'WNCD-19.jpg',
    'WNCD-20.jpg',
    'WNCD-21.jpg',
    'WNCD-22.jpg',
    'WNCD-23.jpg',
    'WNCD-24.jpg',
    'WNCD-25.jpg',
    'WNCD-26.jpg',
    'WNCD-27.jpg',
    'WNCD-28.jpg',
    'WNCD-29.jpg',
    'WNCD-30.jpg',
    'WNCD-31.jpg',
    'WNCD-32.jpg',
    'WNCD-33.jpg',
    'WNCD-34.jpg',
    'WNCD-35.jpg',
    'WNCD-36.jpg',
    'WNCD-37.jpg',
    'WNCD-38.jpg',
    'WNCD-39.jpg',
    'WNCD-40.jpg',
    'WNCD-41.jpg',
    'WNCD-42.jpg',
    'WNCD-43.jpg',
    'WNCD-44.jpg',
    'WNCD-45.jpg',
    'WNCD-46.jpg',
    'WNCD-47.jpg',
    'WNCD-48.jpg',
    'WNCD-49.jpg',
    'WNCD-50.jpg',
    'WNCD-51.jpg'
  ];

  constructor() {
  }

  // TODO: observables
  getData() {
    return this.fileNames;
  }
}
