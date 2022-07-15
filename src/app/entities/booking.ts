export interface Booking {
  id: number;
  rental_id: number;
  nrOfPeople: number;
  imagePath?: string;
  isChecked?: boolean;
}
