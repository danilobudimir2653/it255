import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';

@Injectable()
export class PostService {
  constructor (
    private _http: Http,
    private _router: Router
  ) {}

  dodajAuto(autoData: any) {
    var data = "proizvodjac=" + autoData.value.proizvodjac + "&model=" + autoData.value.model + "&zapremina=" + autoData.value.zapremina
      +"&snaga=" + autoData.value.snaga;
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    this._http.post('http://localhost/c/servis.php', data, { headers: headers }).subscribe( data => {
      if (data["_body"] == "ok") {
        this._router.navigate(['']);
      }
    });
  }
}
