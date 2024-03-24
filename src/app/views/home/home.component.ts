import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OlympicDto } from '../../shared/models/dto/olympic-dto';
import { Participation } from '../../shared/models/participation/participations';
import { OlympicServiceService } from '../../shared/services/olympic-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  public olympic!: OlympicDto[];
  participations!: Participation[];

  public getDataForChart: any[] = [];

  public numberOfJOs:number = 0;
  public numberOfCountry:number = 0;


  public view: [number,number] = [400, 300];
  public showLabels: boolean = true;

  constructor(private router: Router ,private olympicService: OlympicServiceService){
  }
  ngOnInit(): void {
    this.getAllOlympics();
    if(this.olympic != null){
      this.productSales = [];
      for(let i =0 ; i< this.olympic.length ; i++){
        this.productSales.push(
          {
            "name": this.olympic[i].country,
            "value": this.olympic[i].totalMedals,
          }
        )
      }
    }
  }

  public productSales = [
    {
      "name": "book",
      "value": 5001,
    }, {
      "name": "graphic",
      "value": 7322
    }, {
      "name": "desk",
      "value": 1726
    }, {
      "name": "laptop",
      "value": 2599
    }, {
      "name": "monitor",
      "value": 705
    }
  ];
  
  getAllOlympics(){
    this.olympicService.getAllOlympic()
    .subscribe({
      next: (response: OlympicDto[]) => {
        this.olympic = response;
        this.getTotalMedals();
      },
      error:(error) => {
        console.log(error);
      },
      complete:() => {}
    });
  }
  
  getTotalMedals(){
    for(let i of this.olympic){
      this.numberOfCountry+=1;
      this.participations = i.participations;
     for(let j of this.participations){
      i.totalMedals += j.medalsCount;
      this.numberOfJOs+=1;
     }
     
    }
    this.numberOfJOs/=this.numberOfCountry;
  }

  onSelect(data:[]): void {
    let id = JSON.parse(JSON.stringify(data));
    if(this.olympic != null){
      let donee = this.olympic.find( o => o.country == id.name);
      if(donee?.id)
        this.router.navigate(['/detail',donee?.id ])
    }
  }
}
