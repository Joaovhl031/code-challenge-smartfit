import { Component, } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Location } from './types/location.interface';
import { GetUnitsService } from './services/get-units.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showList = new BehaviorSubject(false)
  unitsLits: Location[] = [];

  constructor (private unitService: GetUnitsService) {

  }

  onSubmit() {
    this.showList.next(true)
    this.unitsLits = this.unitService.getFilteredUnits();
  }
}
