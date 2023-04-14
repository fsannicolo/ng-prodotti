import { Component, OnInit } from '@angular/core';
import { ProdottiServizio } from './prodotti.service';
import { IProdotto } from './prodotto';

@Component({
  selector: 'pm-prodotti',
  templateUrl: './prodotti-list.component.html',
  styleUrls: ['./prodotti-list.component.css'],
})
export class ProdottiListComponent implements OnInit {
  mostraNascondi: boolean = false;

  // dependency injection con definizione del singleton
  constructor(private prodottiServizio: ProdottiServizio) {}

  titoloLista: string = 'LISTA DEI PRODOTTI';
  valoreRating: string = '';

  prodottiFiltrati: IProdotto[] = []; //aggiungiamo poi i dati presi dal file api/products/products.json
  prodotti: IProdotto[] = [];

  //accesso a questa variabile avviene attraverso i metodi setter e getter
  private _listaFiltrata: string = '';

  get listaFiltrata(): string {
    return this._listaFiltrata;
  }

  set listaFiltrata(valore: string) {
    this._listaFiltrata = valore;
    //aggiungiamo i dati all'array con datiFiltrari e passando il valore inserito come filtro
    this.prodottiFiltrati = this.datiFiltrati(valore);
  }

  ngOnInit(): void {
    this.prodotti = this.prodottiServizio.getProdotti();
    this.prodottiFiltrati = this.prodotti;
  }

  datiFiltrati(filtratoPer: string): IProdotto[] {
    filtratoPer = filtratoPer.toLocaleLowerCase();
    return this.prodotti.filter((prodotto: IProdotto) =>
      prodotto.productName.toLocaleLowerCase().includes(filtratoPer)
    );
  }

  onRatingClicked(valRating: string): void {
    this.valoreRating = valRating;
  }

  visualizzaImmagini() {
    this.mostraNascondi = !this.mostraNascondi;
  }
}
