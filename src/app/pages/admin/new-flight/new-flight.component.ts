import { Component, OnInit } from '@angular/core';
import { MasterService } from '../../../core/service/master.service';

@Component({
  selector: 'app-new-flight',
  templateUrl: './new-flight.component.html',
  styleUrl: './new-flight.component.css'
})
export class NewFlightComponent implements OnInit{

  airportList: any [] = [];

  constructor(private master: MasterService){

  }

  ngOnInit(): void {
      this.loadAirports();
  }

  loadAirports(){
    this.master.getAllAirport().subscribe((res: any)=>{
      console.log("airport success");
      this.airportList = res.data;
    })
  }

}
