import { Component } from '@angular/core';
import { PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-tab-camera',
  templateUrl: 'tab-camera.page.html',
  styleUrls: ['tab-camera.page.scss'],
})
export class TabCamera {
  public currentImage: any;
  public loading: boolean = false;

  constructor(public photoService: PhotoService) {}

  ngOnInit() {
    this.photoService.loadSaved();
  }
}
