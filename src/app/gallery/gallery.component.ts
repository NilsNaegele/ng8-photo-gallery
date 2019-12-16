import { Component, Input, OnChanges } from '@angular/core';

import { ImageService } from '../shared/image.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnChanges {

  constructor(private imageService: ImageService) {
      this.visibleImages = this.imageService.getImages();
  }
  title = 'Auf Bild clicken für ganze Größe';
  @Input() filterBy ? = 'alle';

  visibleImages: any[] = [];

  private toggle = false;

  classes: string[] = [];
  show = false;

  ngOnChanges() {
      this.visibleImages = this.imageService.getImages();
  }

  toggleSidenav() {
      // console.log('sidebarToggled');
      this.classes.splice(this.classes.length - 1, 1);
      this.show = !this.show;
      if (this.show) {
          this.classes.push('active1');
      } else {
          this.classes.push('not-active1');
      }
  }

}
