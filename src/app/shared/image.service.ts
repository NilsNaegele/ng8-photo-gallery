import { Injectable } from '@angular/core';

const IMAGES = [
  /* Heute */
  {id: 1, category: 'heute', caption: 'Bremen Nov. 2019', url: 'assets/my_images/a1.jpg'},
  {id: 3, category: 'heute', caption: 'Bremen Nov. 2019', url: 'assets/my_images/a3.jpg'},
  {id: 4, category: 'heute', caption: 'Bremen Nov. 2019', url: 'assets/my_images/a4.jpg'},
  {id: 5, category: 'heute', caption: 'Bremen Nov. 2019', url: 'assets/my_images/a5.jpg'},
  {id: 6, category: 'heute', caption: 'Bremen Nov. 2019', url: 'assets/my_images/a6.jpg'},
  {id: 9, category: 'heute', caption: 'Bremen Nov. 2019', url: 'assets/my_images/a9.jpg'},
  {id: 10, category: 'heute', caption: 'Bremen Nov. 2019', url: 'assets/my_images/a10.jpg'},
  {id: 12, category: 'heute', caption: 'Bremen Nov. 2019', url: 'assets/my_images/a12.jpg'},
  {id: 13, category: 'heute', caption: 'Bremen Nov. 2019', url: 'assets/my_images/a13.jpg'},
  {id: 14, category: 'heute', caption: 'Bremen Nov. 2019', url: 'assets/my_images/a14.jpg'},
  {id: 15, category: 'heute', caption: 'Bremen Nov. 2019', url: 'assets/my_images/a15.jpg'},
  {id: 16, category: 'heute', caption: 'Bremen Nov. 2019', url: 'assets/my_images/a16.jpg'},
  {id: 17, category: 'heute', caption: 'Bremen Nov. 2019', url: 'assets/my_images/a17.jpg'},
  {id: 18, category: 'heute', caption: 'Bremen Nov. 2019', url: 'assets/my_images/a18.jpg'},
  {id: 19, category: 'heute', caption: 'Bremen Nov. 2019', url: 'assets/my_images/a19.jpg'},
  {id: 21, category: 'heute', caption: 'Bremen Nov. 2019', url: 'assets/my_images/a21.jpg'},
  {id: 2, category: 'heute', caption: 'Bremen Nov. 2019', url: 'assets/my_images/a2.jpg'},
  {id: 7, category: 'heute', caption: 'Bremen Nov. 2019', url: 'assets/my_images/a7.jpg'},
  {id: 8, category: 'heute', caption: 'Bremen Nov. 2019', url: 'assets/my_images/a8.jpg'},
  {id: 11, category: 'heute', caption: 'Bremen Nov. 2019', url: 'assets/my_images/a11.jpg'},
  {id: 20, category: 'heute', caption: 'Bremen Nov. 2019', url: 'assets/my_images/a20.jpg'},
  {id: 22, category: 'heute', caption: 'Bremen Nov. 2019', url: 'assets/my_images/a22.jpg'},
  {id: 23, category: 'heute', caption: 'Bremen Nov. 2019', url: 'assets/my_images/a23.jpg'},
  {id: 24, category: 'heute', caption: 'Bremen Nov. 2019', url: 'assets/my_images/a24.jpg'},
  {id: 25, category: 'heute', caption: 'Bremen Nov. 2019', url: 'assets/my_images/a25.jpg'},
];

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  visibleImages = [];

  getImages() {
    return this.visibleImages = IMAGES.slice(0);
  }

  getImage(id: number) {

  }
}


