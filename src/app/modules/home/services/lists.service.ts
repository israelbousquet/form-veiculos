import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ColorList } from '../interfaces/color-list';

@Injectable({
  providedIn: 'root',
})
export class ListsService {
  constructor(private http: HttpClient) {}

  getVehicle() {
    return ['Ônibus', 'Motocicleta', 'Automóvel'];
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
}
