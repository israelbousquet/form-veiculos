import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ColorList } from '../interfaces/color-list';
import { FipeList } from '../interfaces/fipe-list';

@Injectable({
  providedIn: 'root',
})
export class ListsService {
  constructor(private http: HttpClient) {}

  getVehicle() {
    return [
      { id: 1, name: 'Carro', tipo: 'carros' },
      { id: 2, name: 'Moto', tipo: 'motos' },
      { id: 3, name: 'Ônibus', tipo: 'onibus' },
      { id: 4, name: 'Caminhão', tipo: 'caminhoes' },
    ];
  }

  getFuel() {
    return [
      { value: 'gasoline', name: 'Gasolina' },
      { value: 'flex', name: 'Flex' },
      { value: 'alcool', name: 'Álcool' },
      { value: 'gnv', name: 'GNV' },
    ];
  }

  getColorList(): Observable<Array<ColorList>> {
    return this.http.get<Array<ColorList>>(
      'https://my-json-server.typicode.com/israelbousquet/colorlistAngular/colorList'
    );
  }

  getFipe(value: string): Observable<Array<any>> {
    return this.http.get<Array<FipeList>>(
      `https://parallelum.com.br/fipe/api/v1/${value}/marcas`
    );
  }

  getModelos(value: string, codigo: number): Observable<Array<any>> {
    return this.http.get<Array<any>>(
      `https://parallelum.com.br/fipe/api/v1/${value}/marcas/${codigo}/modelos`
    );
  }
}
