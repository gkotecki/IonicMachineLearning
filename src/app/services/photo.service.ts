import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  public photos: Photo[] = [];

  constructor(private storage: Storage) {}

  loadSaved() {
    this.storage.get('photos').then((photos) => {
      this.photos = photos || [];
    });
  }
}

class Photo {
  data: any;
}
