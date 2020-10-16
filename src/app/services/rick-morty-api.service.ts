import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Character } from '../interfaces/character';

@Injectable({
  providedIn: 'root'
})
export class RickMortyApiService {

  private listCharacters: number[] = [];

  getRandomCharacters() {
    for (let index = 0; index < 12; index++) {
      this.listCharacters[index] = Math.floor(Math.random() * 671);
    }
  }

  constructor(
    private httpClient: HttpClient
  ) { }

  getCharacter(id: number): Observable<Character> {
    return this.httpClient.get<Character>('https://rickandmortyapi.com/api/character/' + id);
  };

  getPoolCharacters(): Observable<Character[]> {
    this.getRandomCharacters();
    return this.httpClient.get<Character[]>('https://rickandmortyapi.com/api/character/' + this.listCharacters);
  }

  getAllCharacters(): Observable<any> {
    return this.httpClient.get('https://rickandmortyapi.com/api/character/');
  }

}
