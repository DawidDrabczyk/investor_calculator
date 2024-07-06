import { Component, Input } from '@angular/core';
import { Calculate } from '../../models/calculate.model';

@Component({
  selector: 'app-calculate-data',
  templateUrl: './calculate-data.component.html',
  styleUrl: './calculate-data.component.css',
})
export class CalculateDataComponent {
  @Input() assumptions?: Calculate;
}
