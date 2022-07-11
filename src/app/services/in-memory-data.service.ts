import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Rental } from '../entities/rental';

@Injectable({providedIn: 'root'})
export class InMemoryDataService implements InMemoryDbService{
  createDb(){

    const rentals = [
      { id: 1, location: 'Paris', capacity: 6, price: 1000},
      { id: 2, location: 'Paris', capacity: 4, price: 700},
      { id: 3, location: 'London', capacity: 5, price: 1100},
      { id: 4, location: 'Amsterdam', capacity: 4, price: 800}
    ];

    return { rentals };
  }

  //override genId method to ensure that a rental always has an id
  genId(rentals: Rental[]): number{
    return rentals.length ? Math.max(...rentals.map(rental => rental.id)) + 1 : 0;
  }
}
