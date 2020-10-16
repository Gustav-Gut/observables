import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Character } from '../interfaces/character';
import { AllCharacters } from '../interfaces/all-characters';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CallApiService {

  private listCharacters: number[] = [];

  getRandomCharacters() {
    for (let index = 0; index < 12; index++) {
      this.listCharacters[index] = Math.floor(Math.random() * 671);
    }
  }

  constructor(
    private httpClient: HttpClient
  ) { }

  getPoolCharacters(): Observable<Character[]> {
    return this.httpClient.get<Character[]>('https://rickandmortyapi.com/api/character/' + this.listCharacters);
  }

  getAll(): Observable<AllCharacters> {
    return this.httpClient.get<AllCharacters>('https://rickandmortyapi.com/api/character/');
  }

}
