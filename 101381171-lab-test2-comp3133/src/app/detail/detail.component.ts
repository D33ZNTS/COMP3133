import { HttpClient } from '@angular/common/http';
import { Component, inject, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent implements OnInit {
    @Input() id: string=''
    httpClient = inject(HttpClient)

    ngOnInit(): void {
  
      this.fetchData()
      console.log(this.detailData)
    }
    detailData:any
    fetchData(){
      this.httpClient.get('https://api.spacexdata.com/v3/launches/'+this.id).subscribe((data:any)=>{
        this.detailData = data

      })
    
    }

}