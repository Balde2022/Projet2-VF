import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Olympic } from '../../shared/models/olympic/olympic';
import { Participation } from '../../shared/models/participation/participations';
import { OlympicServiceService } from '../../shared/services/olympic-service.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent {

  public olympics: Olympic[] = [];

  public olympic: Olympic | undefined;

  public participation: Participation[] = [];

  public participations: Participation[] = [];

  public nameCountry!: string | undefined;
  public numberEntries: number = 0;
  public totalMedals: number = 0;
  public numberAthletes: number = 0;

  constructor(private route: ActivatedRoute, private olympicService: OlympicServiceService){
  }

  public productSales = [
    {
      "name": "book",
      "series": [
        {
          "value": 4215,
          "name": "2016-09-20T10:50:07.516Z"
        },
        {
          "value": 3633,
          "name": "2016-09-23T14:41:01.779Z"
        },
        {
          "value": 3376,
          "name": "2016-09-22T15:23:08.000Z"
        },
        {
          "value": 6883,
          "name": "2016-09-22T20:50:35.000Z"
        },
        {
          "value": 2605,
          "name": "2016-09-13T10:17:44.624Z"
        }
      ]
    }
  ];

  view:[number,number] = [400, 400];
  colorScheme = {
    domain: ['#aae3f5']
  };
  value: number = 43;
  previousValue: number = 70;
  units: string = 'counts';
  showGridLine: boolean = true;
  showXAxisLabel: boolean = true;
  showYAxisLabel: boolean = true;

  getAllOlympics(){
    this.olympicService.getAllOlympic()
     .subscribe({
       next: (response: Olympic[]) => {
        
         this.olympics = response;
         const olympicId: string| null = this.route.snapshot.paramMap.get('id');
 
           if(olympicId){
             this.olympic = this.olympics.find( o => o.id == +olympicId);
           }
           if(this.olympic){
             this.nameCountry = this.olympic.country;
             
             this.participations = this.olympic.participations;
 
             for(let i of this.participations){
               this.numberEntries += 1 ;
               this.numberAthletes += i.athleteCount;
               this.totalMedals += i.medalsCount;
             }
 
           }
       },
       error:(error) => {
         console.log(error);
       },
       complete:() => {}
     });
   }
  

}
