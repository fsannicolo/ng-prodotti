import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
} from '@angular/core';

@Component({
  selector: 'stella',
  templateUrl: './stella.component.html',
  styleUrls: ['./stella.component.css'],
})
export class StellaComponent implements OnChanges {
  //@Input() rating: number;
  rating:number = 4;
  cropWidth: number = 75;
  @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

  ngOnChanges(): void {
    /*In questo primo passaggio utilizziamo il rating = 4. 
    Poi faremo le opportune modifiche */
    this.cropWidth = this.rating * (75 / 5);
  }

  onClick(): void {
    //console.log(`Valore del rating: ${this.rating}`);
    this.ratingClicked.emit(`${this.rating}`);
  }
}
