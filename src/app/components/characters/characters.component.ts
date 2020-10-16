import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Character } from 'src/app/interfaces/character';
import { RickMortyApiService } from 'src/app/services/rick-morty-api.service';
import { CallApiService } from '../../services/call-api.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  public poolCharacters: Character[];
  public allCharacetrs: [];
  public finalResp: boolean;

  constructor(
    private rickMortyApiService: RickMortyApiService,
    private callApiService: CallApiService,
    private router: Router
  ) { }

  ngOnInit() {
    this.rickMortyApiService.getPoolCharacters().subscribe(resp => {
      console.log('my characters -->', resp);
      this.poolCharacters = resp;
    })

    this.callApiService.getAll().subscribe(resp => {
      console.log('respuesta allCharacters -->', resp.results[0]);
    }, error => {
      console.log('error allCharacters -->', error);
    })
  }

  characterDetail(id: number) {
    this.router.navigate(['characters', 'detail', id]);
  }

}
