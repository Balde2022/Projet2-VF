import { Component, OnInit } from '@angular/core';
import { Router } from 'express';
import { OlympicDto } from '../../shared/models/dto/olympic-dto';
import { Participation } from '../../shared/models/participation/participations';
import { OlympicServiceService } from '../../shared/services/olympic-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  olympic!: OlympicDto[];
  participations!: Participation[];

  public numberOfJOs:number = 0;
  public numberOfCountry:number = 0;


  public view: [number,number] = [600, 370];
  public showLabels: boolean = true;

  constructor( private router: Router, private olympicService: OlympicServiceService){
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  public productSales = [
    {
      "name": "book",
      "value": 5001
    }, {
      "name": "graphic card",
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

}
