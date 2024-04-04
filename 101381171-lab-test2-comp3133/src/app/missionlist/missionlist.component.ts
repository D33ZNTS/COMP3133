import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import e from 'express';

@Component({
  selector: 'app-missionlist',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './missionlist.component.html',
  styleUrl: './missionlist.component.css'
})
export class MissionlistComponent  implements OnInit{
  data:any[] = []
  yearFilter: string = '';
  httpClient = inject(HttpClient)
   ngOnInit(): void {
     this.fetchData()
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

  getinput(e: any): void {
  
    this.yearFilter = e.target.value;
    this.fetchData();
  }

   trackByFlightId(index: number, flight: any): string {
    return flight.flightId;
  }
  
}