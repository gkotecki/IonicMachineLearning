import { Component } from '@angular/core';
import { PhotoService } from '../services/photo.service';
import { AzureService } from '../services/azure.service';
import { BehaviorSubject } from 'rxjs';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-tab-camera',
  templateUrl: 'tab-camera.page.html',
  styleUrls: ['tab-camera.page.scss'],
})
export class TabCamera {
  public currentImage: any;
  public loading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public dataResult: BehaviorSubject<any> = new BehaviorSubject<any>(undefined);

  constructor(public photoService: PhotoService, public azure: AzureService) {}

  ngOnInit() {
    this.photoService.loadSaved();
  }

  public onClickCamera(): void {
    console.log('entrando');
    this.loading.next(true);
    this.photoService.takePicture();
    this.azure.getImageInfo('https://picsum.photos/200/300').subscribe((result) => {
      console.log(result);
      this.dataResult.next(result.categories);
      this.loading.next(false);
    });
  }
}
