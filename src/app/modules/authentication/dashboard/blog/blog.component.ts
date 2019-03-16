import { Component, OnInit } from '@angular/core';
import { ImageCroppedEvent } from 'ngx-image-cropper';

@Component({
  selector: 'app-dashboard-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  textAreas = [
    { value: '' }
  ];

  show = false;

  // Image input
  imageChangedEvent0: any = '';
  imageChangedEvent: any = '';
  imageChangedEvent2: any = '';
  imageChangedEvent3: any = '';

  defaultImageUrl = 'http://localhost:4200/assets/images/users/dashboard/1x/plus-icon.png';
  defaultProductionImageUrl = 'https://app.beleafdesign.co/assets/images/users/dashboard/1x/plus-icon.png';

  // Image 0
  fileChangeEvent0 = (event: any): void => this.imageChangedEvent0 = event;
  finishedCrop0() { this.imageChangedEvent0 = null; }
  // Image 1
  fileChangeEvent = (event: any): void => this.imageChangedEvent = event;
  finishedCrop() { this.imageChangedEvent = null; }

  // Image 2
  fileChangeEvent2 = (event: any): void => this.imageChangedEvent2 = event;
  finishedCrop2() { this.imageChangedEvent2 = null; }

  // Image 3
  fileChangeEvent3 = (event: any): void => this.imageChangedEvent3 = event;
  imageCropped = (event: ImageCroppedEvent, ele: any) => ele.setAttribute('src', event.base64);
  finishedCrop3() { this.imageChangedEvent3 = null; }

  imageLoaded() { }
  loadImageFailed() { }


  constructor() { }

  ngOnInit() {
  }

  addTextArea() {
    this.textAreas.push({ value: '' });
  }

  charCount(val: any): void {
    const len = val.value.length;
    const maxLength = val.getAttribute('maxLength');
    if (len >= maxLength) {
      val.value = val.value.substring(0, 2500);
    }
  }

}
