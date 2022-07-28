export interface Booking {
  id: number;
  rental_id: number;
  email: string;
  nrOfPeople: number;
  imagePath?: string;
  isChecked?: boolean;
}
