import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { AzureService } from '../services/azure.service';
import { PhotoService } from '../services/photo.service';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-tab-camera',
  templateUrl: 'tab-camera.page.html',
  styleUrls: ['tab-camera.page.scss'],
})
export class TabCamera {
  public photos: Photo[] = [];
  public currentImage: BehaviorSubject<any> = new BehaviorSubject<any>(undefined);
  public loading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public dataResult: BehaviorSubject<any> = new BehaviorSubject<any>(undefined);

  /**
   * construtor do componente
   */
  constructor(
    public photoService: PhotoService,
    public azure: AzureService,
    private camera: Camera,
    private storage: Storage,
  ) {}

  /**
   * incicialização
   */
  ngOnInit() {
    this.photoService.loadSaved();
  }

  /**
   * função de clique no icone da câmera
   */
  public onClickCamera() {
    console.log('entrando');
    this.loading.next(true);
    const options: CameraOptions = {
      quality: 35,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true,
    };
    this.camera.getPicture(options).then(
      (imageData) => {
        let base64Image = 'data:image/jpeg;base64,' + imageData;
        this.currentImage.next(base64Image);
        this.azure
          .getImageInfo(this.makeblob(base64Image))
          .pipe(finalize(() => this.loading.next(false)))
          .subscribe(
            (result) => {
              console.log(result);
              this.dataResult.next(result);
            },
            (error) => {
              console.log(error);
              this.dataResult.next(JSON.stringify(error));
            },
          );
      },
      (err) => {
        console.log('Camera issue: ' + err);
        this.dataResult.next('Camera issue: ' + JSON.stringify(err));
      },
    );
  }

  /**
   * conversao de formato de dado de imagem
   * @param dataURL - base64 img input
   */
  private makeblob(dataURL): Blob {
    const BASE64_MARKER = ';base64,';
    const parts = dataURL.split(BASE64_MARKER);
    const contentType = parts[0].split(':')[1];
    const raw = window.atob(parts[1]);
    const rawLength = raw.length;
    const uInt8Array = new Uint8Array(rawLength);

    for (let i = 0; i < rawLength; ++i) {
      uInt8Array[i] = raw.charCodeAt(i);
    }

    return new Blob([uInt8Array], { type: contentType });
  }
}

/**
 * Helper class
 */
class Photo {
  data: any;
}
