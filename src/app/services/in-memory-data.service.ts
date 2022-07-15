import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Rental } from '../entities/rental';
import { Booking } from '../entities/booking';

@Injectable({providedIn: 'root'})
export class InMemoryDataService implements InMemoryDbService{
  createDb(){

    let rentals = [
      { id: 1, location: 'Paris', capacity: 6, price: 1000},
      { id: 2, location: 'Paris', capacity: 4, price: 700},
      { id: 3, location: 'London', capacity: 5, price: 1100},
      { id: 4, location: 'Amsterdam', capacity: 4, price: 800}
    ];

    let bookings = [
      { id:1, rental_id: 1, nrOfPeople: 5, imagePath: "../assets/Avenue-de-Camoens-Paris-Eiffel-Tower.jpg", isChecked: false },
      { id:2, rental_id: 3, nrOfPeople: 3, imagePath: "../assets/London.jpg", isChecked: false }
    ];

    return { rentals, bookings };
  }

  //override genId method to ensure that a rental/booking always has an id
  genId<T extends Rental | Booking>(myEntities: T[]): number{
    return myEntities.length ? Math.max(...myEntities.map(e => e.id)) + 1 : 0;
  }
}
