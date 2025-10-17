import { Component } from '@angular/core';
import { Apresentacao } from "../../components/apresentacao/apresentacao";

@Component({
  selector: 'app-home',
  imports: [Apresentacao],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

}
