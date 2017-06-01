import { Component } from '@angular/core';
import { PostService } from './servis/post.service'
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'home-component',
  providers: [ PostService ],
  templateUrl: './dodajAuto.component.html'
})

export class DodajAutoComponent {


    autoData = new FormGroup({
    proizvodjac: new FormControl(),
    model: new FormControl(),
    zapremina: new FormControl(),
    snaga : new FormControl()
  });

  constructor(private _postService: PostService) { }



  public dodajAuto() {
    this._postService.dodajAuto(this.autoData);
    console.log(this.autoData.value)
  }

}

