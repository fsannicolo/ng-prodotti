import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'stella',
  templateUrl: './stella.component.html',
  styleUrls: ['./stella.component.css'],
})
export class StellaComponent implements OnChanges {
  // creo una property binding personalizzata
  @Input() rating: number = 4;
  cropWidth: number = 75;

  ngOnChanges(): void {
    // imposto la width in base al rating
    this.cropWidth = this.rating * 15;
  }
  /*
  onClick(): void {
    //console.log(`Valore del rating: ${this.rating}`);
    this.ratingClicked.emit(`${this.rating}`);
  }*/
}
