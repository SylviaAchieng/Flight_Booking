import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './pages/website/search/search.component';
import { BookFlightComponent } from './pages/website/book-flight/book-flight.component';
import { BookingsComponent } from './pages/admin/bookings/bookings.component';
import { MyBookingsComponent } from './pages/website/my-bookings/my-bookings.component';
import { LayoutComponent } from './pages/admin/layout/layout.component';
import { AirportComponent } from './pages/admin/airport/airport.component';
import { AllFlightsComponent } from './pages/admin/all-flights/all-flights.component';
import { CityComponent } from './pages/admin/city/city.component';
import { NewFlightComponent } from './pages/admin/new-flight/new-flight.component';
import { LoginComponent } from './pages/admin/login/login.component';

const routes: Routes = [
  {
    path:'', redirectTo:'search', pathMatch:'full'
  },
  {
    path:'search', component: SearchComponent, title:'Search Flight'
  },
  {
    path:'book-flight', component:BookFlightComponent, title:'Book New Ticket'
  },
  {
    path:'bookings', component:MyBookingsComponent, title:'My Bookings'
  },
  {
    path:'login', component:LoginComponent
  },
  {
    path:'', component:LayoutComponent,
    children:[
      {
        path:'airport', component:AirportComponent
      },
      {
        path:'all-flights', component: AllFlightsComponent
      },
      {
        path:'city', component: CityComponent
      },
      {
        path:'new-flight', component: NewFlightComponent
      }

    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
