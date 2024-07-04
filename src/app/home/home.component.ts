import { Component, OnInit } from "@angular/core";
import { AsyncPipe } from "@angular/common";
import { PokemonService } from "../core/services/pokemon.service";
import { catchError, EMPTY, Observable } from "rxjs";
import { PokemonResults } from "../pokemon";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
  
})

export class HomeComponent implements OnInit {
  public pokemonResults$!: Observable<PokemonResults>;
  public errorMessage!: string;
  constructor(private service: PokemonService) {}

  ngOnInit(): void{ 
    this.pokemonResults$ = this.service.getPokemonList().pipe(catchError((error: string) => {
      this.errorMessage = error;
      return EMPTY;
      
  }))
}
}