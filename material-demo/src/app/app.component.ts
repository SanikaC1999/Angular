import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {DataTableComponent} from './data-table/data-table.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DataTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'material-demo';
}
