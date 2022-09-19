import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { consultaCep } from '../interfaces/consulta-cep';
import { catchError, map, Observable, of, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ConsultaCepService {
  constructor(private http: HttpClient) {}

  getCep(cep: string): Observable<Array<consultaCep>> {
    return this.http.get<Array<consultaCep>>(`https://viacep.com.br/ws/${cep}/json/`);
  }

  // validatorCep(cep: string): Observable<boolean> {
  //   return this.http.get<boolean>(`https://viacep.com.br/ws/${cep}/json/`).pipe(
  //     map((dados) => {
  //       if (dados.hasOwnProperty('erro')) {
  //         console.log('CEP invalido');
  //         return true;
  //       } else {
  //         console.log('CEP existe');
  //         return false;
  //       }
  //     })
  //   );
  // }
}
