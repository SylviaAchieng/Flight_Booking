import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(private http: HttpClient) { }

  getAllAirport() {
    return this.http.get(`/api/FlightBooking/GetAllAirport`);
  }
 
  saveAirport(airportList: any) {
    return this.http.post("/api/FlightBooking/AddUpdateBulkAirports",airportList );
  }
  
  getAllCity() {
    return this.http.get(`/api/FlightBooking/GetAllCity`);
  }

  getAllFlights() {
    return this.http.get(`/api/FlightBooking/GetAllFlights`);
  }

  createFlight(flights: any) {
    return this.http.post(`/api/FlightBooking/AddUpdateBulkFlights`,flights );
  }

  searchFlight(departureAirportId: number,arrivalAirportId:number,travelDate: string) {
    return this.http.get("/api/FlightBooking/SearchFlight?departureAirportId="+departureAirportId+"&arrivalAirportId="+arrivalAirportId+"&dateOfTravel="+travelDate);
  }

  register(flights: any) {
    return this.http.post("https://freeapi.gerasim.in/api/FlightBooking/register",flights );
  }
  login(flights: any) {
    return this.http.post("https://freeapi.gerasim.in/api/FlightBooking/login",flights );
  }
  bookTicket(flights: any) {
    return this.http.post("https://freeapi.gerasim.in/api/FlightBooking/bookticket",flights );
  }
}
