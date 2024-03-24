import { Olympic } from "../olympic/olympic";

export class OlympicDto implements Olympic {
    id: number =0;
    country:string= "";
    participations:[]=[];
    totalMedals:number=0;
}
