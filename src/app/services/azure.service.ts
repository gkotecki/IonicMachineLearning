import { PhotoService } from './photo.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AzureService {
  private url =
	// 'https://westcentralus.api.cognitive.microsoft.com/vision/v2.0/analyze?visualFeatures=Categories&language=en';
	'https://westcentralus.api.cognitive.microsoft.com/vision/v2.0/describe?maxCandidates=1&language=en';
  private key = '53d7b66d0a6f4cd89ccfaad0f71bbf5f';

  constructor(private http: HttpClient, private photoService: PhotoService) {}  

  /**
   * faz o post a partir da img da camera
   *
   * @param image - imagem da camera
   */
  public getImageInfo(image: any): Observable<any> {
    // body = {"url":"https://picsum.photos/200/300"}
    console.log('getImageInfo entrado');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/octet-stream',
        'Ocp-Apim-Subscription-Key': this.key,
      }),
	};
    return this.http.post(this.url, image, httpOptions);
  }
}
