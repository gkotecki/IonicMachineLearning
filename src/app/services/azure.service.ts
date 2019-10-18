import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AzureService {
  private url =
    'https://westcentralus.api.cognitive.microsoft.com/vision/v2.0/analyze?visualFeatures=Categories&language=en';
  private key = '53d7b66d0a6f4cd89ccfaad0f71bbf5f';

  constructor(private http: HttpClient) {}

  // body = {"url":"https://picsum.photos/200/300"}
  public getImageInfo(image: any): Observable<any> {
    console.log('getImageInfo entrado');

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Ocp-Apim-Subscription-Key': this.key,
      }),
    };
    const body = { url: image };
    return this.http.post(this.url, image, httpOptions);
  }

  public testFunc(): boolean {
    return true;
  }
}
