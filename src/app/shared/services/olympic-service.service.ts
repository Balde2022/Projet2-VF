import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OlympicDto } from '../models/dto/olympic-dto';

@Injectable({
  providedIn: 'root'
})
export class OlympicServiceService {

  dataUrl: string = "http://localhost:3000/dataOlympic";
  
  private http = inject(HttpClient);

  constructor() { }

  getAllOlympic(): Observable<OlympicDto[]>{
    return this.http.get<OlympicDto[]>(this.dataUrl);
  }
}
