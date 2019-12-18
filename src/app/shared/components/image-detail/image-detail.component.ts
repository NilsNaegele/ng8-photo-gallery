import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

import { ImageService } from '../../image.service';

@Component({
  selector: 'app-image-detail',
  templateUrl: './image-detail.component.html',
  styleUrls: ['./image-detail.component.scss']
})
export class ImageDetailComponent implements OnInit {
  image: any;

  visibleImages: any[] = [];

  constructor(
      private imageService: ImageService,
      private route: ActivatedRoute,
      private router: Router,
      private location: Location) {}

  ngOnInit() {
      this.image = this.imageService.getImage(
          +this.route.snapshot.params.id
      );
      this.visibleImages = this.imageService.getImages();
      console.log(this.image.id, this.visibleImages.length);
  }

  back() {
    if (+this.image.id > 1) {
      this.router.navigate(['/bild', this.image.id - 1]);
      this.image = this.imageService.getImage(this.image.id - 1);
    }
  }

  forward() {
    if (+this.image.id <= this.visibleImages.length) {
      this.router.navigate(['/bild', this.image.id + 1]);
      this.image = this.imageService.getImage(this.image.id + 1);
    }

  }
  // goBack(): void {
  //     this.location.back();
  // }

}
