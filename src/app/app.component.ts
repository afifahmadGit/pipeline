// import { registerLocaleData } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { OnedriveServiceService } from './services/onedrive-service.service';

export interface Section {
  name: string;
  updated: Date;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  folders: Section[] = [];
  list:Section[]=[]
  listContent:any
  listHead: any;
  slice: any;

  constructor(private onedriver: OnedriveServiceService,private _formBuilder: FormBuilder) {}
  ngOnInit(): void {
  }
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isLinear = false;
}
