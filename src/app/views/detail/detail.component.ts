import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { ChartDto } from '../../shared/models/dto/chart-dto';
import { Olympic } from '../../shared/models/olympic/olympic';
import { Participation } from '../../shared/models/participation/participations';
import { OlympicServiceService } from '../../shared/services/olympic-service.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent implements OnInit {

  public olympics: Olympic[] = [];

  public olympic: Olympic | undefined;

  public participations: Participation[] = [];

  public nameCountry!: string | undefined;
  public numberEntries: number = 0;
  public totalMedals: number = 0;
  public numberAthletes: number = 0;

  serie: ChartDto[] = [];

  constructor(private route: ActivatedRoute,private olympicService: OlympicServiceService)
    {}

  ngOnInit(): void {
    this.getAllOlympics();
  }

  public olympicParticipation = [
      {
        "name": "",
        "series": [
          {
            "name": "",
            "value": 0
          }
        ]
      }
  ];

  public view:[number,number] = [600, 400];
  showLabels: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Dates';

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

             this.olympicParticipation = [];

             for(let i of this.participations){
               this.numberEntries += 1 ;
               this.numberAthletes += i.athleteCount;
               this.totalMedals += i.medalsCount;

              this.serie.push(
                {
                  "name": i.year,
                  "value": i.medalsCount
                }
              );
             }

             this.olympicParticipation.push(
              {
                "name": this.olympic.country ,
                "series": this.serie
              }
            );

           }
       },
       error:(error) => {
         console.log(error);
       },
       complete:() => {}
     });
   }
}
