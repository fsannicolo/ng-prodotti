import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertToSpace',
})

// creazione di una pipe personalizzata
export class ConvertToSpacePipe implements PipeTransform {
  transform(valore: string, carattere: string): string {
    return valore.replace(carattere, ' ');
  }
}
