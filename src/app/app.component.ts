import { Component, inject } from '@angular/core';
import { InvestmentsData } from './models/investments-data.model';
import { CalculateResultsComponent } from './calculate-results/calculate-results.component';
import { MatDialog } from '@angular/material/dialog';
import { Calculate } from './models/calculate.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  public onRestetAssumptions?: boolean;
  public investmentsData: InvestmentsData[] = [];
  public assumptions?: Calculate;
  private dialog = inject(MatDialog);

  public onCalculateInvestment(investmentsData: InvestmentsData[]): void {
    this.investmentsData = investmentsData;
    const data = {
      investmentsData: this.investmentsData,
      assumptions: this.assumptions,
    };

    const dialogRef = this.dialog.open(CalculateResultsComponent, {
      height: '90vh',
      width: '80vw',
      maxWidth: 'unset',
      data: data,
    });

    dialogRef.afterClosed().subscribe((res) => {
      console.log(res);
      this.onRestetAssumptions = true;
    });
  }

  public onAssumptionsInvestment(assumptions: Calculate): void {
    this.assumptions = assumptions;
  }
}
