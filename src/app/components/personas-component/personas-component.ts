import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Persona } from '../../models/persona';
import { ServicePersonas } from '../../services/service.personas';

@Component({
  selector: 'app-personas-component',
  imports: [RouterLink],
  templateUrl: './personas-component.html',
  styleUrl: './personas-component.css',
  providers: [ServicePersonas],
})
export class PersonasComponent {
  public personas!: Array<Persona>;
  public personasAxios!: Array<Persona>;
  public personasFetch!: Array<Persona>;
  constructor(private _service: ServicePersonas) {}
  ngOnInit(): void {
    this._service.getPersonas().then((response) => {
      console.log('Leyendo HTTP');
      this.personas = response;
    });

    this._service.getPersonasAxios().then((response) => {
      console.log('Leyendo Axios');
      this.personasAxios = response;
    });

    this._service.getPersonasFetch().then((response) => {
      console.log('Leyendo Fetch');
      this.personasFetch = response;
    });
  }
}
