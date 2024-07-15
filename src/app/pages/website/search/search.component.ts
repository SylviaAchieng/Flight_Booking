import { Component, OnInit } from '@angular/core';
import { MasterService } from '../../../core/service/master.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit {

  airports: any [] = [];
  fromAirport: number = 0;
  toAirport: number = 0;
  travelDate: string = '';
  flightList: any [] = [];
  passengerObj: any = {
    'travelerName': '',
    'contactNo': '',
    'aadharNo': '',
    'seatNo': 0
  };
  passengerList: any [] = [];

  bookingObj : any = {
  "flightId": 0,
  "customerId": 0,
  "bookingDate": new Date(),
  "totalAmount": 0,
  "FlightBookingTravelers": []
  }

  constructor(private master: MasterService){
    const isLocal = localStorage.getItem('flightCustomer');
    if(isLocal != null) {
      this.bookingObj.customerId = JSON.parse(isLocal).userId;
    }

  }

  ngOnInit(): void {
    this.loadAirports();
    this.searchFlights();
      
  }

  addPassenger(){
    const obj  = JSON.stringify(this.passengerObj);
    const newObj = JSON.parse(obj);
    this.passengerList.push(newObj);
  }

  loadAirports(){
    this.master.getAllAirport().subscribe((res:any)=>{
      this.airports = res.data;

    })
  }

  searchFlights(){
    this.master.searchFlight(this.fromAirport, this.toAirport, this.travelDate).subscribe((res:any)=>{
      this.flightList = res.data;
    })
  }

  bookTicket(flightId: number){
    this.bookingObj.flightId = flightId;
    const model = document.getElementById('bookModel');
    if(model != null){
      model.style.display = "block"
    }
  }
  onBookTicket(){
    debugger;
    this.bookingObj.FlightBookingTravelers = this.passengerList;
    this.master.bookTicket(this.bookingObj).subscribe((res:any)=>{
      if(res.result){
        alert("Ticket booked success");
        this.closeModel();
      }else{
        alert(res.message);
      }
    })
  }

  closeModel(){
    const model = document.getElementById('bookModel');
    if(model != null){
      model.style.display = "none"
    }
  }

}
