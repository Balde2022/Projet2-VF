import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, Observable, tap } from 'rxjs';
import { OlympicDto } from '../models/dto/olympic-dto';

@Injectable({
  providedIn: 'root'
})
export class OlympicServiceService {

  dataUrl: string = "http://localhost:3000/dataOlympic";
  
  constructor(private http: HttpClient) { }

  getAllOlympic(): Observable<OlympicDto[]>{
    return this.http.get<OlympicDto[]>(this.dataUrl);
  }
}
