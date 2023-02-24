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

  constructor(private prodottiServizio: ProdottiServizio) {}

  titoloLista: string = 'LISTA DEI PRODOTTI'; //parte per il filtro //accesso a questa variabile avviene attraverso i metodi //setter e getter. è la stringa che mi creerà il filtro.
  private _listaFiltrata: string = '';

  valoreRating: string = '';

  get listaFiltrata(): string {
    return this._listaFiltrata;
  }
  set listaFiltrata(valore: string) {
    this._listaFiltrata = valore; //aggiungiamo i dati all'array richiamando la //function datiFiltrari e passando il valore //inserito come filtro
    this.prodottiFiltrati = this.datiFiltrati(valore);
  } //array vuoto che conterrà i prodotti filtrati
  prodottiFiltrati: IProdotto[] = []; //in questo caso usiamo any per indicare un tipo generico. //aggiungiamo poi i dati presi dal file api/products/products.json

  prodotti: IProdotto[] = []; //implemento onInit per dare un valore iniziale alla //variabile che mi serve per filtrare la lista //attenzione che qui this.listaFiltrata richiama la function //get listaFiltrata. la proprietà invece si chiama _listaFiltrata.
  ngOnInit(): void {
    //this.listaFiltrata = '';
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
  visualizzaImmagini()
  {
    this.mostraNascondi = !this.mostraNascondi;
  }
}
