import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core'; 

@Component({
  selector: 'app-missionlist',
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css']
})
export class MissionlistComponent implements OnInit { 
  data: any[] = [];
  yearFilter: string = '';

  constructor(private httpClient: HttpClient) {} 

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    let url = 'https://api.spacexdata.com/v3/launches';
    if (this.yearFilter) {
      url += `?launch_year=${this.yearFilter}`;
    }

    this.httpClient.get(url)
      .subscribe((data: any) => {
        console.log(data[0]);
        this.data = data;
      });
  }

  getInput(event: any): void { // Renamed method to getInput
    this.yearFilter = event.target.value;
    this.fetchData();
  }

  trackByFlightId(index: number, flight: any): string {
    return flight.flightId;
  }
}
