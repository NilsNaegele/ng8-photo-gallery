import { Component, Input, OnChanges } from '@angular/core';
import { ImageService } from '../shared/image.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnChanges {
  title = 'Suche nach Bildern in Beschreibung ...';

  @Input() searchBy ? = 'alle';

  searchImages: any[] = [];

  constructor(private imageService: ImageService) {
      this.searchImages = this.imageService.getImages();
  }

  ngOnChanges() {
      this.searchImages = this.imageService.getImages();
  }

}
